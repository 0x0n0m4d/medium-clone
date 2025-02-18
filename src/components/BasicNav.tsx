'use client';

import { useCookies } from 'react-cookie';
import Link from 'next/link';
import SignInDialog from './auth/SignInDialog';
import SignUpDialog from './auth/SignUpDialog';
import Logo from './Logo';
import OpenModalButton from './modals/OpenModalButton';

interface Props {
  redirectUrl?: string;
}

const BasicNav = ({ redirectUrl }: Props) => {
  const [cookies] = useCookies(['access_token']);

  return (
    <nav className="w-full flex justify-between items-center p-10 border-b border-solid border-black">
      <Link href="/">
        <Logo />
      </Link>
      {!cookies.access_token && (
        <div className="flex items-center gap-x-6">
          <OpenModalButton
            className="py-3 px-6 rounded-full text-center text-sm bg-transparent border border-solid border-black/80 text-black/80 hover:border-black hover:text-black"
            element={<SignInDialog redirectUrl={redirectUrl} />}
          >
            Sign in
          </OpenModalButton>
          <OpenModalButton
            className="py-3 px-6 rounded-full text-center text-sm text-white bg-black/90 hover:bg-black"
            element={<SignUpDialog redirectUrl={redirectUrl} />}
          >
            Sign up
          </OpenModalButton>
        </div>
      )}
    </nav>
  );
};

export default BasicNav;
