import { sendMailAction } from '@/src/actions/user.action';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const operation = data.operation!;
    const email = data.email!;

    if (operation != 'register' && operation != 'login')
      throw new Error('wrong type of operation');

    const isLogin = operation === 'login';

    await sendMailAction({ email: email, isLogin });
    return new Response('Success');
  } catch (error) {
    return new Response(`[ERROR_AUTH_POST_REQUEST] ${error}`, {
      status: 400
    });
  }
}
