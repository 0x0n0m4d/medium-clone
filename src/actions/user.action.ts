'use server';

import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';
import {
  GetUserDataActionProps,
  SaveUserDataActionProps,
  SendMailProps
} from '@/interfaces/user.interface';
import prisma from '@/lib/prismadb';
import {
  GetUserDataActionType,
  SaveUserDataActionType,
  SendMailType
} from '@/types/user.type';

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
  } catch (err) {
    console.log('[ERROR_SEND_MAIL_ACTION]', err);
    return undefined;
  }
}

export async function saveUserDataAction({
  email,
  name
}: SaveUserDataActionProps): Promise<SaveUserDataActionType> {
  try {
    if (!email) throw new Error('email is required');

    const username = '';

    const user = await prisma.user.create({
      data: {
        email,
        username,
        name
      }
    });

    return user;
  } catch (err) {
    console.log('[ERROR_SAVE_USER_ACTION]', err);
    return undefined;
  }
}

export async function getUserDataAction({
  email
}: GetUserDataActionProps): Promise<GetUserDataActionType> {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) return undefined;

    return user;
  } catch (err) {
    console.log('[ERROR_GET_USER_ACTION]', err);
  }
}
