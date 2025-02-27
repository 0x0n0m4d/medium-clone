import { v5 as uuidv5 } from 'uuid';
import {
  getTempTokenDataAction,
  storeUserSessionAction
} from '@/actions/redis.action';
import { getUserDataAction } from '@/actions/user.action';
import { NAMESPACE } from '@/lib/utils';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const token = data.token;

    if (!token)
      return new Response('Bad request', {
        status: 400
      });

    const email = await getTempTokenDataAction(token).then(res => {
      return res?.email;
    });

    if (!email)
      return new Response(null, {
        status: 204
      });

    const username = '@' + email.split('@')[0];
    const id = uuidv5(username, NAMESPACE);

    const user = await getUserDataAction({ id });

    if (!user)
      return new Response(null, {
        status: 204
      });

    const userAgent = req.headers.get('user-agent');
    const userIp = req.headers.get('x-forwarded-for');

    if (!userAgent || !userIp)
      return new Response('Missing important headers', {
        status: 400
      });

    const session = await storeUserSessionAction({
      ip: userIp,
      userAgent,
      userData: user
    });

    if (!session)
      return new Response('User session not created', {
        status: 500
      });

    return new Response(session.jwt);
  } catch (err) {
    console.log('[ERROR_LOGIN_GET_REQUEST]', err);
    return new Response('Something went wrong', {
      status: 500
    });
  }
}
