import { NextRequest } from 'next/server';
import { getUserDataAction } from '@/actions/user.action';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const email = searchParams.get('email');

    if (!email)
      return new Response('Missing fields', {
        status: 400
      });

    const data = await getUserDataAction({ email });

    if (data) {
      return new Response(JSON.stringify(data));
    } else {
      return new Response(null, {
        status: 204
      });
    }
  } catch (error) {
    console.log('[ERROR_AUTH_GET_REQUEST]', error);
    return new Response('Something went wrong', {
      status: 500
    });
  }
}
