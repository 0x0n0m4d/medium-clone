'use server';

import { Resend } from 'resend';
import EmailTemplate from '../components/EmailTemplate';
import { SendMailProps } from '../interfaces/user.interface';
import { SendMailType } from '../types/user.type';

export async function sendMailAction({
  token,
  email,
  isLogin
}: SendMailProps): Promise<SendMailType> {
  try {
    if (!token) throw new Error('token is required');
    if (!email) throw new Error('email is required');
    if (isLogin === undefined) throw new Error('isLogin is required');

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails
      .send({
        from: 'noreply@resend.dev',
        to: email,
        subject: isLogin
          ? 'Sign in to Medium'
          : 'Finish creating your account on Medium',
        react: EmailTemplate({ token, isLogin })
      })
      .catch(err => {
        if (err) {
          return false;
        }
      });

    return true;
  } catch (error) {
    console.log('[ERROR_SEND_MAIL_ACTION]', error);
    return undefined;
  }
}
