import * as jose from 'jose';

const SECRET = Buffer.from(process.env.JWT_SECRET!);

interface IEncryptJWT {
  token: string;
  email: string;
  exp: Date;
}

export const encryptJWT = async ({
  token,
  email,
  exp
}: IEncryptJWT): Promise<string> => {
  const jwt = await new jose.EncryptJWT({ token: token, email: email })
    .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
    .setIssuedAt()
    .setIssuer(process.env.NEXT_PUBLIC_URL!)
    .setAudience(process.env.NEXT_PUBLIC_URL!)
    .setExpirationTime(exp)
    .encrypt(SECRET);

  return jwt;
};

export const decryptJWT = async (jwt: string): Promise<jose.JWTPayload> => {
  const { payload } = await jose.jwtDecrypt(jwt, SECRET, {
    issuer: process.env.NEXT_PUBLIC_URL!,
    audience: process.env.NEXT_PUBLIC_URL!
  });

  return payload;
};
