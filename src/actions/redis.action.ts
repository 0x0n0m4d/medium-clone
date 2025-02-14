'use server';

import {
  StoreTempUserDataProps,
  StoreUserSessionProps
} from '@/interfaces/redis.interface';
import { encryptJWT } from '@/lib/jwt';
import redis from '@/lib/redis';
import { generateNewHash } from '@/lib/utils';
import {
  GetTempUserDataType,
  GetUserSessionType,
  StoreTempUserDataType,
  StoreUserSessionType
} from '@/types/redis.type';

export async function storeTempTokenDataAction({
  token,
  email,
  redirectUrl
}: StoreTempUserDataProps): Promise<StoreTempUserDataType> {
  try {
    await redis.get(token, err => {
      if (!err) {
        return false;
      }
    });

    const exp = new Date();
    exp.setHours(exp.getHours() + 2);

    const data = {
      email,
      redirectUrl: redirectUrl ?? '/',
      alreadyUsed: false,
      exp
    };

    const res = await redis.set(
      token,
      Buffer.from(JSON.stringify(data)),
      'EX',
      60 * (60 * 24)
    );

    if (!res) return false;

    return true;
  } catch (err) {
    console.log('[ERROR_STORE_TOKEN_IN_REDIS]', err);
  }
}

export async function getTempTokenDataAction(
  token: string
): Promise<GetTempUserDataType> {
  try {
    const data = await redis.getBuffer(token, (_, redisData) => {
      return redisData;
    });
    if (!data) return null;

    return JSON.parse(Buffer.from(data).toString('utf-8'));
  } catch (err) {
    console.log('[ERROR_GET_TEMP_TOKEN_DATA]', err);
  }
}

export async function setTokenAlreadyUsedAction(
  token: string
): Promise<boolean> {
  try {
    const data = await redis.getBuffer(token, (_, redisData) => {
      return redisData;
    });
    if (!data) return false;

    const decodedData = JSON.parse(Buffer.from(data).toString('utf-8'));
    if (decodedData.alreadyUsed) return true;

    decodedData.alreadyUsed = true;

    const res = await redis.set(
      token,
      Buffer.from(JSON.stringify(decodedData)),
      'EX',
      60 * (60 * 2)
    );

    if (!res) return false;
    return true;
  } catch (err) {
    console.log('[ERROR_GET_TEMP_TOKEN_DATA]', err);
    return false;
  }
}

export async function storeUserSessionAction({
  ip,
  userAgent,
  userData
}: StoreUserSessionProps): Promise<StoreUserSessionType> {
  try {
    if (!ip) throw new Error('ip is required');
    if (!userAgent) throw new Error('userAgent is required');
    if (!userData) throw new Error('userData is required');

    const token = generateNewHash(userData.email, 32);
    const exp = new Date();
    exp.setHours(exp.getHours() + 24);
    const jwt = await encryptJWT({ token, email: userData.email, exp });

    const data = {
      ip,
      userAgent,
      jwt,
      userData
    };

    const res = await redis.set(
      token,
      Buffer.from(JSON.stringify(data)),
      'EX',
      60 * (60 * 24)
    );

    if (!res) return undefined;

    return data;
  } catch (err) {
    console.log('[ERROR_STORE_USER_SESSION_DATA]', err);
  }
}

export async function getUserSessionAction(
  token: string
): Promise<GetUserSessionType> {
  try {
    const data = await redis.getBuffer(token, (_, redisData) => {
      return redisData;
    });
    if (!data) return null;

    return JSON.parse(Buffer.from(data).toString('utf-8'));
  } catch (err) {
    console.log('[ERROR_GET_USER_SESSION_DATA]', err);
  }
}

export async function removeUserSessionAction(token: string): Promise<number> {
  try {
    const res = await redis.del(token);

    return res;
  } catch (err) {
    console.log('[ERROR_REMOVE_USER_SESSION_DATA]', err);
    return 0;
  }
}
