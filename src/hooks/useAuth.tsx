'use client';

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { User } from '@prisma/client';
import { getUserSessionData } from '@/redux/slices/userData.slice';
import { AppDispatch } from '@/redux/store';

export default function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(['access_token']);
  const [user, setUser] = useState<User | null | undefined>(
    cookies.access_token ? undefined : null
  );
  const [isLoading, setIsLoading] = useState<boolean>(
    cookies.access_token ? true : false
  );
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (user === undefined && isLoading) {
      dispatch(getUserSessionData(cookies.access_token))
        .then((res: any) => {
          if (res.payload) {
            setUser(res.payload.userData);
          } else {
            setUser(null);
          }
        })
        .catch(() => {
          setError(true);
          setUser(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoading, user, cookies]);

  return { user, isLoading, error };
}
