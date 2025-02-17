'use client';

import { ReactNode, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import AuthContext from '@/contexts/AuthContext';
import Loading from '../Loading';
import FrontPage from './FrontPage';
import UserHomeFeed from './UserHomeFeed';

const Home = () => {
  const [, , removeCookie] = useCookies(['access_token']);
  const { user, error } = useContext(AuthContext);
  const [userIsLogged, setUserIsLogged] = useState<boolean | null>(null);

  const Content = (): ReactNode => {
    if (error) {
      removeCookie('access_token', { path: '/', sameSite: 'lax' });
      return <FrontPage />;
    }
    if (userIsLogged === false) {
      return <FrontPage />;
    }

    return <UserHomeFeed />;
  };

  useEffect(() => {
    if (userIsLogged === null) {
      if (user) {
        setUserIsLogged(true);
      } else if (user === null) {
        setUserIsLogged(false);
      }
    }
  }, [userIsLogged, user]);

  return userIsLogged === null ? <Loading /> : <Content />;
};

export default Home;
