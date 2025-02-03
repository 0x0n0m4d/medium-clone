import {
  GetTempUserDataProps,
  StoreUserSessionProps
} from '@/interfaces/redis.interface';

export type GetTempUserDataType = GetTempUserDataProps | undefined | null;

export type StoreTempUserDataType = boolean | undefined;

export type GetUserSessionType = StoreUserSessionProps | undefined | null;

export type StoreUserSessionType = string | undefined;
