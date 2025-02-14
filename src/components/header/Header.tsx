import Link from 'next/link';
import Logo from '../Logo';
import FrontNav from './FrontNav';

const Header = () => {
  return (
    <div className="bg-background fixed flex justify-center border-b border-solid border-[#292929] py-[18px] w-full z-10 px-20">
      <div className="flex items-center justify-between max-w-xl flex-grow">
        <Link href="/" aria-label="logo">
          <Logo />
        </Link>
        <FrontNav />
      </div>
    </div>
  );
};

export default Header;
