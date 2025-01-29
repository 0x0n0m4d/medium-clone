'use server';

import { StoreTempUserDataProps } from '@/interfaces/redis.interface';
import redis from '@/lib/redis';
import { GetTempUserDataType, StoreTempUserDataType } from '@/types/redis.type';

export async function getTempTokenData(
  token: string
): Promise<GetTempUserDataType> {
  try {
    const data = await redis.getBuffer(token, (_, redisData) => {
      return redisData;
    });
    if (!data) return null;

    return JSON.parse(Buffer.from(data).toString('utf-8'));
  } catch (error) {
    console.log('[ERROR_GET_TEMP_TOKEN_DATA]', error);
    return undefined;
  }
}

export async function storeTempTokenData({
  token,
  email
}: StoreTempUserDataProps): Promise<StoreTempUserDataType> {
  try {
    await redis.get(token, err => {
      if (!err) {
        return false;
      }
    });

    const data = {
      email: email,
      alreadyUsed: false,
      expirationTime: new Date().setDate(new Date().getHours() + 2)
    };

    await redis.set(
      token,
      Buffer.from(JSON.stringify(data)),
      'EX',
      60 * (60 * 24)
    );

    return true;
  } catch (error) {
    console.log('[ERROR_STORE_TOKEN_IN_REDIS]', error);
    return undefined;
  }
}
