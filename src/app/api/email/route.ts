import { NextRequest } from 'next/server';
import {
  getTempTokenData,
  storeTempTokenData
} from '@/src/actions/redis.action';
import { sendMailAction } from '@/src/actions/user.action';
import { generateNewHash } from '@/src/lib/utils';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const token = searchParams.get('token');

    if (!token) throw new Error('token is required');

    const data = await getTempTokenData(token);

    if (data) {
      return new Response(JSON.stringify(data));
    } else {
      return new Response(null, {
        status: 204
      });
    }
  } catch (error) {
    return new Response(undefined, {
      status: 400
    });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const operation = data.operation!;
    const email = data.email!;

    if (operation != 'register' && operation != 'login')
      throw new Error('wrong type of operation');

    const token = generateNewHash(email, 13);

    await storeTempTokenData({ token, email });
    await sendMailAction({ token, email, isLogin: operation === 'login' });

    return new Response('Success');
  } catch (error) {
    return new Response(`[ERROR_EMAIL_POST_REQUEST] ${error}`, {
      status: 400
    });
  }
}
