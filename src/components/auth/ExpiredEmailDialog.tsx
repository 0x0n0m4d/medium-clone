'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { saveTempData } from '@/redux/slices/tempData.slice';
import { AppDispatch } from '@/redux/store';
import Logo from '../Logo';
import CheckInboxPage from './CheckInboxPage';

interface Props {
  isLogin: boolean;
}

const ExpiredEmailDialog = ({ isLogin }: Props) => {
  const route = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [hasEmailSent, setHasEmailSent] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    const action = await dispatch(saveTempData({ email, isLogin }));

    return action.payload;
  };

  return (
    <>
      <div
        className={`left-0 right-0 top-0 bottom-0 bg-white flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto ${hasEmailSent ? 'hidden' : 'fixed'}`}
      >
        <Link
          href="/"
          className="min-h-[65px] w-full bg-white fixed top-0 py-10 z-20"
        >
          <span className="flex w-full h-full justify-center items-center">
            <Logo />
          </span>
        </Link>
        <div className="min-h-[80px]" />
        <div className="relative rounded px-11 py-14 shadow-black/15 shadow-[0px_2px_10px] text-center flex flex-col w-[610px] h-[420px] xl:w-[910px] xl:h-[560px] my-auto">
          <div className="grid place-items-center">
            <h2 className="serif text-black/95 text-2xl my-10 font-thin">
              {isLogin
                ? 'Your sign in link has expired'
                : 'Your sign up link has expired'}
            </h2>
            <p className="text-base text-center text-black/80 font-thin max-w-[360px]">
              Enter the email address associated with your account, and we’ll
              send a new magic link to your inbox.
            </p>
            <form
              className="flex flex-col items-center gap-2"
              onSubmit={e => {
                e.preventDefault();
                setIsPending(true);

                handleSubmit()
                  .then(() => {
                    setHasEmailSent(true);
                  })
                  .catch(err => {
                    console.log('[ERROR_SEND_MAIL_ACTION]', err);
                    route.push('/');
                    window.location.reload();
                  })
                  .finally(() => setIsPending(false));
              }}
            >
              <div className="flex flex-col items-center gap-3 mt-10 mb-10">
                <label className="text-sm leading-[20px] text-center text-black/70">
                  Your email
                </label>
                <input
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  className="border-b border-solid border-stone-200 w-[270px] py-3.5 px-3 rounded-md duration-300 text-start text-sm outline-none"
                  required
                />
              </div>
              <button
                className="text-white text-sm py-3 px-7 bg-black/90 hover:bg-black disabled:bg-black/70 transition rounded-full"
                disabled={isPending}
              >
                Continue
              </button>
            </form>
            <div className="flex mt-8">
              <Link
                href={
                  isLogin
                    ? '/m/signin?operation=login'
                    : '/m/signin?operation=register'
                }
                className="text-sm text-primary hover:text-phover transition duration-200"
              >
                <i className="fa-solid fa-chevron-left thin-icon text-sm" />
                {isLogin ? '  All sign in options' : '  All sign up options'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CheckInboxPage
        email={email}
        isLogin={isLogin}
        className={hasEmailSent ? 'block' : 'hidden'}
      />
    </>
  );
};

export default ExpiredEmailDialog;
