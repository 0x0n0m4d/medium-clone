import { NextRequest } from 'next/server';
import {
  getTempTokenDataAction,
  storeTempTokenDataAction
} from '@/actions/redis.action';
import { sendMailAction } from '@/actions/user.action';
import { generateNewHash } from '@/lib/utils';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const token = searchParams.get('token');

    if (!token)
      return new Response('Missing fields', {
        status: 400
      });

    const data = await getTempTokenDataAction(token);

    if (data) {
      return new Response(JSON.stringify(data));
    } else {
      return new Response(null, {
        status: 204
      });
    }
  } catch (err) {
    console.log('[ERROR_EMAIL_GET_REQUEST]', err);
    return new Response('Something went wrong', {
      status: 500
    });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const operation = data.operation!;
    const email = data.email!;
    const redirectUrl = data.redirectUrl;

    if (!email || (operation != 'register' && operation != 'login'))
      return new Response('Bad request', {
        status: 400
      });

    const token = generateNewHash(email, 13);

    const redisRes = await storeTempTokenDataAction({
      token,
      email,
      redirectUrl
    });
    if (!redisRes)
      return new Response('Failed to send email', {
        status: 500
      });

    const mailRes = await sendMailAction({
      token,
      email,
      isLogin: operation === 'login'
    });
    if (!mailRes)
      return new Response('Failed to send email', {
        status: 500
      });

    return new Response('Success');
  } catch (err) {
    console.log('[ERROR_EMAIL_POST_REQUEST]', err);
    return new Response('Something went wrong', {
      status: 500
    });
  }
}
