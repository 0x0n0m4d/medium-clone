import { createContext } from 'react';
import { User } from '@prisma/client';

interface IAuthContext {
  user: User | undefined;
  setUser: Function;
}

const AuthContext = createContext<IAuthContext>({
  user: undefined,
  setUser: () => {}
});

export default AuthContext;
