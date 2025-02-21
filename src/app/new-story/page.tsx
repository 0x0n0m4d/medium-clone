'use client';

import { ReactNode, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import Nav from '@/components/write/Nav';
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
      <section className="bg-white h-full min-h-screen w-full">
        <Nav />
        <div className="w-full flex justify-center py-5 sm:py-10">
          <div className="w-full max-w-[740px] flex flex-col px-7 sm:px-10">
            <input
              placeholder="Title"
              className="serif outline-none py-1 w-full text-start text-[34px] sm:text-[42px] placeholder:text-stone-400/80"
            />
            <textarea
              className="serif outline-none py-1 resize-none text-[18px] sm:text-[21px] placeholder:text-stone-400/80"
              placeholder="Tell your story..."
            />
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
