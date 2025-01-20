import { Resend } from 'resend';
import EmailTemplate from '../components/EmailTemplate';
import { EmailProps } from '../interfaces/user.interface';

export async function sendMailAction({
  email,
  isLogin
}: EmailProps): Promise<boolean> {
  try {
    if (!email) throw new Error('email required');
    if (isLogin === undefined) throw new Error('isLogin required');

    const resend = new Resend(process.env.RESEND_API_KEY);

    const token = '';

    await resend.emails.send({
      from: 'noreply@resend.dev',
      to: email,
      subject: isLogin
        ? 'Sign in to Medium'
        : 'Finish creating your account on Medium',
      react: EmailTemplate({ token, isLogin })
    });

    return true;
  } catch (error) {
    console.log('[ERROR_SEND_MAIL_ACTION]', error);
    return false;
  }
}
