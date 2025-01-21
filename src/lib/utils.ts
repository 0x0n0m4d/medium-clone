import { createHash } from 'crypto';

export async function createNewToken(email: string): Promise<string> {
  try {
    const salt = `${Math.floor(Math.random() * 99999)}:${email}`;
    const hash = createHash('sha256').update(salt).digest('hex');
    return hash.slice(0, 13);
  } catch (error) {
    console.log('[ERROR_CREATING_TEMP_TOKEN]', error);
    return '';
  }
}
