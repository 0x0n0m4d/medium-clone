'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import CheckInboxPage from './CheckInboxPage';

interface Props {
  isLogin: boolean;
}

const ExpiredEmailDialog = ({ isLogin }: Props) => {
  const [email, setEmail] = useState('');
  const [hasEmailSent, setHasEmailSent] = useState(false);

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
        <div className="relative rounded px-11 py-14 shadow-black/15 shadow-[0px_2px_10px] text-center flex flex-col w-[610px] h-[420px] md:w-[910px] md:h-[560px] my-auto">
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
                setHasEmailSent(true);
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
              <button className="text-white text-sm py-3 px-7 bg-black/85 hover:bg-black transition rounded-full">
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
