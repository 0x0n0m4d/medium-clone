export interface EncryptJwtProps {
  token: string;
  email: string;
  exp: Date;
}

export interface DecryptJwtProps {
  jwt: string;
}
