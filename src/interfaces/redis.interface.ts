export interface GetTempUserDataProps {
  email: string;
  alreadyUsed: boolean;
  expirationTime: number;
}

export interface StoreTempUserDataProps {
  token: string;
  email: string;
}
