'use client';

import { ReactNode, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import Nav from '@/components/header/Nav';
import Loading from '@/components/Loading';
import LeftBar from '@/components/settings/LeftBar';
import RightBar from '@/components/settings/RightBar';
import AuthContext from '@/contexts/AuthContext';

const Page = () => {
  const router = useRouter();
  const { user, error } = useContext(AuthContext);
  const [, , removeCookie] = useCookies(['access_token']);
  const [userIsLogged, setUserIsLogged] = useState<boolean | null>(null);

  const Content = (): ReactNode => {
    if (error) {
      removeCookie('access_token', { path: '/', sameSite: 'lax' });
      router.push('/');
      window.location.reload();
    }
    if (userIsLogged === false) {
      router.push('/m/signin');
      window.location.reload();
    }

    return (
      <section className="bg-white w-full min-h-screen h-full flex flex-col overflow-x-hidden">
        <Nav />
        <div className="w-full h-full flex justify-center">
          <div className="w-full max-w-[1336px] h-full flex flex-col lg:flex-row items-center lg:items-start justify-between px-20 py-16">
            <RightBar
              email={user!.email}
              username={user!.username}
              name={user!.name}
              photoUrl={user!.photoUrl}
            />
            <LeftBar />
          </div>
        </div>
      </section>
    );
  };

  useEffect(() => {
    if (userIsLogged === null) {
      if (user) {
        setUserIsLogged(true);
      } else if (user === null) {
        setUserIsLogged(false);
      }
    }
  }, [user, userIsLogged]);

  return userIsLogged === null ? <Loading /> : <Content />;
};

export default Page;
