import { storeUserSessionAction } from '@/actions/redis.action';
import { saveUserDataAction } from '@/actions/user.action';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const email = data.email;
    const name = data.name;

    if (!name || !email)
      return new Response('Missing fields', {
        status: 400
      });

    const user = await saveUserDataAction({ email, name });

    if (!user) {
      return new Response('Failed to register new user', {
        status: 500
      });
    }

    const userAgent = req.headers.get('user-agent');
    const userIP = req.headers.get('x-forwarded-for');

    if (!userAgent || !userIP)
      return new Response('Missing important headers', {
        status: 400
      });

    const jwt = await storeUserSessionAction({
      ip: userIP,
      userAgent,
      userData: user
    });

    if (!jwt)
      return new Response('User session not created', {
        status: 500
      });

    return new Response(jwt);
  } catch (err) {
    console.log('[ERROR_SIGNUP_POST_REQUEST]', err);
    return new Response('Something went wrong', {
      status: 500
    });
  }
}
