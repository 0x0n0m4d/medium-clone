'use client';

import { ReactNode, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckIcon, MastodonIcon } from '@/atoms/icons';
import Loading from '@/components/Loading';
import Logo from '@/components/Logo';
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
      <section className="bg-white w-screen h-screen flex flex-col items-center">
        <div className="flex justify-center items-center gap-x-10 mt-20">
          <Link href="/">
            <Logo />
          </Link>
          <h2 className="serif text-[48px]">+</h2>
          <Link href="/">
            <MastodonIcon />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-6 mt-16">
          <h1 className="serif text-center font-bold text-2xl sm:text-[48px]">
            Join Mastodon
          </h1>
          <p className="max-w-[580px] text-base text-center leading-10">
            Become a Medium member to join our members-only Mastodon instance.
            It’s a great place to connect with other like-minded Medium members
            along with millions of others on the growing Mastodon decentralized
            social network.
          </p>
          <div className="flex flex-col items-center justify-center gap-y-3 mt-3">
            <p className="flex items-center text-center text-base gap-x-3">
              <span className="text-stone-600">
                <CheckIcon />
              </span>
              Operated by Medium
            </p>
            <p className="flex items-center text-center text-base gap-x-3">
              <span className="text-stone-600">
                <CheckIcon />
              </span>
              Choose your own @username
            </p>
            <p className="flex items-center text-center text-base gap-x-3">
              <span className="text-stone-600">
                <CheckIcon />
              </span>
              Get started in seconds
            </p>
          </div>
        </div>
        <Link
          href="/plans"
          className="py-3 px-12 rounded-full text-center text-sm bg-primary hover:bg-phover text-white mt-20"
        >
          Become a member
        </Link>
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
