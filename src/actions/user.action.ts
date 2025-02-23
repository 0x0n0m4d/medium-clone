'use server';

import { Resend } from 'resend';
import { v5 as uuidv5 } from 'uuid';
import EmailTemplate from '@/components/EmailTemplate';
import {
  GetUserDataActionProps,
  SaveUserDataActionProps,
  SendMailProps
} from '@/interfaces/user.interface';
import prisma from '@/lib/prismadb';
import { NAMESPACE } from '@/lib/utils';
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
    if (!name) throw new Error('name is required');

    const username = '@' + email.split('@')[0];
    const id = uuidv5(username, NAMESPACE);

    const user = await prisma.user.create({
      data: {
        id,
        email,
        username,
        name,
        photoUrl: '/assets/default-avatar.png'
      }
    });

    return user;
  } catch (err) {
    console.log('[ERROR_SAVE_USER_ACTION]', err);
    return undefined;
  }
}

export async function getUserDataAction({
  id
}: GetUserDataActionProps): Promise<GetUserDataActionType> {
  try {
    const user = await prisma.user.findUnique({
      where: { id }
    });

    if (!user) return undefined;

    return user;
  } catch (err) {
    console.log('[ERROR_GET_USER_ACTION]', err);
  }
}
