'use client';

import { ReactNode, useContext } from 'react';
import { useCookies } from 'react-cookie';
import AuthContext from '@/contexts/AuthContext';
import Loading from '../Loading';
import FrontPage from './FrontPage';
import UserHomeFeed from './UserHomeFeed';

const Home = () => {
  const [cookies, , removeCookie] = useCookies();
  const { user, isLoading, error } = useContext(AuthContext);

  if (!cookies.access_token) return <FrontPage />;

  const Content = (): ReactNode => {
    if (error) {
      removeCookie('access_token');
      return <FrontPage />;
    }
    if (!user && cookies.access_token) {
      return <Loading />;
    }

    return <UserHomeFeed />;
  };

  return <div>{isLoading ? <Loading /> : <Content />}</div>;
};

export default Home;
