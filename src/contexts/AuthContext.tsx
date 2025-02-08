'use client';

import { createContext } from 'react';
import { User } from '@/interfaces/user.interface';

interface AuthProps {
  user: User | null;
  isLoading: boolean;
  error: boolean;
}

const AuthContext = createContext<AuthProps>({
  user: null,
  isLoading: false,
  error: false
});

export default AuthContext;
