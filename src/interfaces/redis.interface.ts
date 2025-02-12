import { User } from '@prisma/client';

export interface GetTempUserDataProps {
  email: string;
  alreadyUsed: boolean;
  expirationTime: number;
}

export interface StoreTempUserDataProps {
  token: string;
  email: string;
  redirectUrl?: string;
}

export interface StoreUserSessionProps {
  ip: string;
  userAgent: string;
  userData: User;
}
