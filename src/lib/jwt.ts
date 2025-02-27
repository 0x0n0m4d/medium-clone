import * as jose from 'jose';
import { DecryptJwtProps, EncryptJwtProps } from '@/interfaces/jwt.interface';
import { DecryptJwtType, EncryptJwtType } from '@/types/jwt.type';

// "example" word encoded in md5
const SECRET = Buffer.from('1a79a4d60de6718e8e5b326e338ae533');

export const encryptJWT = async ({
  token,
  email,
  exp
}: EncryptJwtProps): Promise<EncryptJwtType> => {
  try {
    const jwt = await new jose.EncryptJWT({ token: token, email: email })
      .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
      .setIssuedAt()
      .setIssuer(process.env.NEXT_PUBLIC_URL!)
      .setAudience(process.env.NEXT_PUBLIC_URL!)
      .setExpirationTime(exp)
      .encrypt(SECRET);

    return jwt;
  } catch (err) {
    console.log('[ERROR_ENCRYPT_JWT]', err);
  }
};

export const decryptJWT = async ({
  jwt
}: DecryptJwtProps): Promise<DecryptJwtType> => {
  try {
    const { payload } = await jose.jwtDecrypt(jwt, SECRET, {
      issuer: process.env.NEXT_PUBLIC_URL!,
      audience: process.env.NEXT_PUBLIC_URL!
    });

    return payload;
  } catch (err) {
    console.log('[ERROR_DECRYPT_JWT]', err);
  }
};
