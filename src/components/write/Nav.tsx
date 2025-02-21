import Link from 'next/link';
import Logo from '../Logo';
import AvatarButton from './AvatarButton';
import MoreButton from './MoreButton';
import NotificationButton from './NotificationButton';

const Nav = () => {
  return (
    <nav className="flex items-center justify-center w-full px-9 py-7 sm:py-8">
      <div className="w-full max-w-[1072px] flex items-center justify-between">
        <div className="w-full flex items-center gap-x-3">
          <Link href="/">
            <Logo />
          </Link>
          <p className="text-start text-sm mt-2">
            Draft in NAME
            <span className="hidden ml-7 text-stone-500 text-sm mt-2">
              Saving...
            </span>
          </p>
        </div>
        <div className="flex items-center gap-x-7">
          <button
            className="text-[15px] text-white text-center py-1 px-3 bg-primary disabled:bg-green-700/20 rounded-full"
            disabled
          >
            Publish
          </button>
          <div className="flex items-center gap-x-4 sm:gap-x-5">
            <MoreButton />
            <NotificationButton />
            <AvatarButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
