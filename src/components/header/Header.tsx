import Link from 'next/link';
import Logo from '../Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="bg-background fixed w-full z-10 px-20">
      <div className="flex justify-between max-w-xl flex-grow">
        <Link href="/" aria-label="logo">
          <Logo />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
