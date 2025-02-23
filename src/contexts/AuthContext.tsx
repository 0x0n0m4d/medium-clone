'use client';

import { createContext } from 'react';
import { User } from '@prisma/client';

interface AuthProps {
  user: User | null | undefined;
  isLoading: boolean;
  error: boolean;
}

const AuthContext = createContext<AuthProps>({
  user: undefined,
  isLoading: false,
  error: false
});

export default AuthContext;
