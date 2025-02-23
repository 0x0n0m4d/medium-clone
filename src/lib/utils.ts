import { createHash } from 'crypto';

export const NAMESPACE = 'c21820c5-3cb9-4e86-a0bb-4fb9ce7f2d56';

export function generateNewHash(value: string, length: number): string {
  const salt = `${Math.floor(Math.random() * 99999)}:${value}`;
  return createHash('sha256').update(salt).digest('hex').slice(0, length);
}

export function monthSelector(index: number): string {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return months[index];
}
