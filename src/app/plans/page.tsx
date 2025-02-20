'use client';

import { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import Logo from '@/components/Logo';
import PlansFriendCard from '@/components/plans/PlansFriendCard';
import PlansMemberCard from '@/components/plans/PlansMemberCard';
import AuthContext from '@/contexts/AuthContext';

const Page = () => {
  const router = useRouter();
  const { user, error } = useContext(AuthContext);
  const [, , removeCookie] = useCookies(['access_token']);
  const [userIsLogged, setUserIsLogged] = useState<boolean | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [userAvatar, setUserAvatar] = useState<string>(
    '/assets/default-avatar.png'
  );

  const [isAnnuallySelected, setIsAnnuallySelected] = useState<boolean>(true);

  const handlePlanSelection = (isAnnually: boolean) => {
    setIsAnnuallySelected(isAnnually);
  };

  const Content = () => {
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
      <section className="bg-white w-full h-full">
        <nav className="flex w-full items-center justify-center py-6 border-b border-solid border-stone-100">
          <Link href="/">
            <Logo />
          </Link>
        </nav>
        <div className="flex flex-col w-full items-center justify-center px-10 py-10 mt-10 sm:mt-24">
          <h2 className="serif text-center text-xl leading-[32px] max-w-[520px] font-bold px-3">
            Support great writing and access all stories on Medium.
          </h2>
          <div className="flex flex-col w-full sm:items-center gap-y-5 mt-20 sm:mt-16">
            <span className="flex sm:hidden text-start text-xs text-stone-500 w-full">
              Select a billing option
            </span>
            <div className="flex w-full sm:max-w-[280px]">
              <button
                className={`flex w-full h-[58px] items-center justify-center border border-solid rounded-l-lg text-base text-center ${!isAnnuallySelected ? 'border-primary text-primary bg-slate-200/80' : 'border-stone-200 text-stone-800 bg-transparent'}`}
                onClick={e => {
                  e.preventDefault();
                  handlePlanSelection(false);
                }}
              >
                Pay monthly
              </button>
              <button
                className={`flex flex-col w-full h-[58px] items-center justify-center border border-solid rounded-r-lg text-base text-center ${isAnnuallySelected ? 'border-primary text-primary bg-slate-200/80' : 'border-stone-200 text-stone-800 bg-transparent'}`}
                onClick={e => {
                  e.preventDefault();
                  handlePlanSelection(true);
                }}
              >
                Pay annually <br />
                <span className="text-[11px]">Save up to $30</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:justify-center sm:items-center gap-y-5 px-10 mt-10 pb-16 sm:gap-x-8">
          <span className="flex sm:hidden text-start text-xs text-stone-500 w-full">
            Select a membership plan
          </span>
          <PlansMemberCard
            avatar={userAvatar}
            name={userName}
            isAnnuallySelected={isAnnuallySelected}
          />
          <PlansFriendCard
            avatar="/assets/default-avatar.png"
            name="Unknown"
            isAnnuallySelected={isAnnuallySelected}
          />
        </div>
      </section>
    );
  };

  useEffect(() => {
    if (userIsLogged === null) {
      if (user) {
        setUserIsLogged(true);
        setUserName(user.name);
        setUserAvatar(user.photoUrl);
      } else if (user === null) {
        setUserIsLogged(false);
      }
    }
  }, [userIsLogged, user]);

  return userIsLogged === null ? <Loading /> : <Content />;
};

export default Page;
