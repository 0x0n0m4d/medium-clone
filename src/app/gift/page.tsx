'use client';

import { ReactNode, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import Logo from '@/components/Logo';
import AuthContext from '@/contexts/AuthContext';

const Page = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [userIsLogged, setUserIsLogged] = useState<boolean | null>(null);

  const Content = (): ReactNode => {
    if (userIsLogged) {
      router.push('/gift-plans');
      window.location.reload();
    }

    return (
      <section className="bg-white flex flex-col w-screen h-screen justify-between items-center">
        <Image
          src="/assets/gift_head.png"
          alt="Head"
          width={600}
          height={470}
          className="fixed top-10 2xl:top-0 -left-[270px] sm:-left-[50px] 2xl:left-0 sm:-top-[40px] z-20 w-[440px] 2xl:w-[600px]"
        />
        <Image
          src="/assets/gift_foot.png"
          alt="Foot"
          width={600}
          height={470}
          className="fixed bottom-0 -right-[100px] sm:-right-[30px] 2xl:right-0 z-20 w-[340px] sm:w-[470px] 2xl:w-[600px]"
        />
        <nav className="absolute top-0 w-full h-full flex flex-col items-center justify-between py-12 z-10">
          <Link href="/" className="flex w-[150px]">
            <Logo />
          </Link>
          <div className="min-h-[350px] -z-50" />
        </nav>
        <div className="min-h-[90px] -z-50" />
        <div className="flex flex-col items-center justify-center max-w-[616px] gap-y-10">
          <div className="relative">
            <h1 className="serif text-[48px] sm:text-[70px] text-center leading-[50px] sm:leading-[70px]">
              The perfect gift for readers and writers
            </h1>
            <Image
              src="/assets/gift_effect.gif"
              alt="Lazy Header"
              width={616}
              height={140}
              unoptimized
              className="hidden sm:block absolute -top-[67px]"
            />
          </div>
          <h3 className="text-base sm:text-[18px] text-center leading-8 sm:leading-10">
            An annual Medium membership is a great gift for the reader or writer
            in your life—they can read any article in our entire library across
            all devices, access our global community of writers, and support the
            writers they read the most.
          </h3>
          <Link
            href="/gift-plans"
            className="px-8 py-4 bg-black/90 hover:bg-black rounded-full text-white text-center text-base z-30"
          >
            Give Medium now
          </Link>
        </div>
        <div className="min-h-[90px] -z-50" />
        <footer className="absolute bottom-0 w-full h-full flex flex-col justify-between items-center z-10">
          <div className="min-h-[450px] -z-50" />
          <ul className="flex items-center text-center underline gap-x-3 text-[11px] mb-16">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Terms</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
            <li>
              <Link href="/">Help</Link>
            </li>
            <li>
              <Link href="/">Teams</Link>
            </li>
            <li>
              <Link href="/">Press</Link>
            </li>
          </ul>
        </footer>
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
  }, [userIsLogged, user]);

  return userIsLogged === null ? <Loading /> : <Content />;
};

export default Page;
