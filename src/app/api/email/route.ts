import { setTokenAlreadyUsedAction } from '@/actions/redis.action';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const token = data.token!;

    if (!token)
      return new Response('Bad request', {
        status: 400
      });

    const redisRes = await setTokenAlreadyUsedAction(token);

    if (!redisRes) return new Response('Already Used not set', { status: 500 });

    return new Response('OK');
  } catch (err) {
    console.log('[ERROR_SET_TOKEN_ALREADY_USED]', err);
    return new Response('Something went wrong', { status: 500 });
  }
}
