import { createHash } from 'crypto';

export function generateNewHash(value: string, length: number): string {
  const salt = `${Math.floor(Math.random() * 99999)}:${value}`;
  return createHash('sha256').update(salt).digest('hex').slice(0, length);
}
