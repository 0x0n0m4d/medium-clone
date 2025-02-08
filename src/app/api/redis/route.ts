import { NextRequest } from 'next/server';
import { getUserSessionAction } from '@/actions/redis.action';
import { decryptJWT } from '@/lib/jwt';

export async function GET(req: NextRequest) {
  try {
    const jwt = req.headers.get('authorization');

    if (!jwt)
      return new Response('Operation not allowed', {
        status: 401
      });

    const token = await decryptJWT({ jwt: jwt }).then(res => {
      if (!res) return '';
      return res.token as string;
    });

    if (!token)
      return new Response('Bad JWT token', {
        status: 400
      });

    const data = await getUserSessionAction(token);

    if (data) {
      return new Response(JSON.stringify(data));
    } else {
      return new Response(null, {
        status: 204
      });
    }
  } catch (err) {
    console.log('[ERROR_AUTH_GET_REQUEST]', err);
    return new Response('Something went wrong', {
      status: 500
    });
  }
}
