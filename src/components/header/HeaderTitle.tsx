import Link from 'next/link';
import Logo from '../Logo';

const HeaderTitle = () => {
  return (
    <Link href="/">
      <Logo />
    </Link>
  );
};

export default HeaderTitle;
