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
  } catch (err) {
    console.log('[ERROR_GET_TEMP_TOKEN_DATA]', err);
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

    const exp = new Date();
    exp.setHours(exp.getHours() + 2);

    const data = {
      email,
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
    return undefined;
  }
}
