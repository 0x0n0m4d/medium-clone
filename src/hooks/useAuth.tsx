import { useState } from 'react';
import { User } from '@prisma/client';

export function useAuth() {
  const [user, setUser] = useState<User | undefined>(undefined);

  return { user, setUser };
}
