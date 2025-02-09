import Link from 'next/link';
import Logo from '../Logo';
import FrontNav from './FrontNav';

const Header = () => {
  return (
    <header className="bg-background fixed w-full z-10 px-20">
      <div className="flex justify-between max-w-xl flex-grow">
        <Link href="/" aria-label="logo">
          <Logo />
        </Link>
        <FrontNav />
      </div>
    </header>
  );
};

export default Header;
