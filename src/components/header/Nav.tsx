'use client';

import { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowTopRight,
  FillNotificationsIcon,
  NotificationsIcon,
  SearchIcon,
  WriteIcon
} from '@/atoms/icons';
import AuthContext from '@/contexts/AuthContext';
import SignInDialog from '../auth/SignInDialog';
import SignUpDialog from '../auth/SignUpDialog';
import Logo from '../Logo';
import OpenModalButton from '../modals/OpenModalButton';
import AvatarButton from './dropdown/AvatarButton';
import SearchBar from './SearchBar';

const Nav = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [cookies] = useCookies(['access_token']);
  const { user } = useContext(AuthContext);

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious();
    if (latest > previous!) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="bg-white sticky top-0 w-full z-10 px-6 lg:px-10"
    >
      <div className="flex flex-col items-center text-xs">
        <div
          className={`lg:hidden flex items-center w-full flex-grow min-h-[41px] border-b border-solid border-gray-100 ${cookies.access_token && user ? 'justify-center' : 'justify-between'}`}
        >
          <Link
            href="/membership"
            className="serif text-black/50 hover:text-black/90 h-full flex items-center justify-center gap-x-3"
          >
            Open in app
            <ArrowTopRight />
          </Link>
          {!cookies.access_token && !user && (
            <div className="flex items-center gap-x-4">
              <OpenModalButton
                className="py-0.5 px-3 bg-primary hover:bg-phover text-white rounded-full"
                element={<SignUpDialog />}
              >
                Sign up
              </OpenModalButton>
              <OpenModalButton
                className="py-0.5 px-3 text-black/50 hover:text-black/90"
                element={<SignInDialog />}
              >
                Sign in
              </OpenModalButton>
            </div>
          )}
        </div>
        <div className="flex justify-between w-full flex-grow items-center min-h-[57px] border-b border-solid border-gray-100">
          <div className="flex items-center gap-x-5">
            <Link href="/" aria-label="logo">
              <Logo />
            </Link>
            <div className="hidden xs:flex">
              <SearchBar />
            </div>
          </div>
          <div className="flex outline-none text-black/90 text-sm items-center gap-x-5">
            <Link
              href="/search"
              className="flex xs:hidden mr-3 text-black/50 hover:text-black/90"
            >
              <SearchIcon />
            </Link>
            <OpenModalButton
              className="hidden sm:flex items-center py-2.5 px-5 text-black/50 hover:text-black/90 gap-x-3"
              element={<SignInDialog redirectUrl="/new-story" />}
            >
              <WriteIcon />
              Write
            </OpenModalButton>
            {!cookies.access_token && !user ? (
              <>
                <OpenModalButton
                  className="hidden lg:flex py-2.5 px-5 bg-primary hover:bg-phover text-white rounded-full"
                  element={<SignUpDialog />}
                >
                  Sign up
                </OpenModalButton>
                <OpenModalButton
                  className="hidden lg:flex py-2.5 px-5 text-black/50 hover:text-black/90"
                  element={<SignInDialog />}
                >
                  Sign in
                </OpenModalButton>
              </>
            ) : (
              <Link
                href="/me/notifications"
                className={`flex mr-5 ${pathname === '/me/notifications' ? 'text-black' : 'text-black/50 hover:text-black/90'}`}
              >
                {pathname === '/me/notifications' ? (
                  <FillNotificationsIcon />
                ) : (
                  <NotificationsIcon />
                )}
              </Link>
            )}
            <AvatarButton />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
