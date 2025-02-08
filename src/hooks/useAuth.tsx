'use client';

import { useEffect, useState } from 'react';
import { User } from '@/interfaces/user.interface';
import { getUserSessionData } from '@/redux/slices/userData.slice';

interface Props {
  jwt: string | null;
  dispatch: any;
}

export default function useAuth({ dispatch, jwt }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(jwt ? true : false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!user && jwt) {
      dispatch(getUserSessionData(jwt))
        .then((res: any) => {
          if (res.payload) {
            setUser(res.payload.userData);
          }
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [jwt, user]);

  return { user, isLoading, error };
}
