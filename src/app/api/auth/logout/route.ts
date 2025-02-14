import { removeUserSessionAction } from '@/actions/redis.action';
import { decryptJWT } from '@/lib/jwt';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const jwt = data.jwt;

    if (!jwt)
      return new Response('Bad request', {
        status: 400
      });

    const token: any = await decryptJWT({ jwt })
      .then(res => {
        return res!.token;
      })
      .catch(() => {
        return null;
      });

    if (!token)
      return new Response('Invalid JWT', {
        status: 400
      });

    const redisRes = await removeUserSessionAction(token);

    if (!redisRes)
      return new Response('Session not deleted', {
        status: 500
      });

    return new Response('OK');
  } catch (err) {
    console.log('[ERROR_LOGOU_POST_REQUEST]', err);
    return new Response('Something went wrong', {
      status: 500
    });
  }
}
