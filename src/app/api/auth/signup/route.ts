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

    const res = await saveUserDataAction({ email, name });

    if (res) {
      return new Response('User registered successfully');
    } else {
      return new Response('Failed to register new user', {
        status: 500
      });
    }
  } catch (err) {
    console.log('[ERROR_SIGNUP_POST_REQUEST]', err);
    return new Response('Something went wrong', {
      status: 500
    });
  }
}
