import Link from 'next/link';
import SignInPage from '../auth/SignInPage';
import OpenModalButton from '../modals/OpenModalButton';

const Nav = () => {
  return (
    <nav className="outline-none decoration-transparent text-black/80 text-sm">
      <Link href="#" className="mr-6">
        Our story
      </Link>
      <Link href="#" className="mr-6">
        Membership
      </Link>
      <Link href="#" className="mr-6">
        Write
      </Link>
      <OpenModalButton className="mr-6" element={<SignInPage />}>
        Sign In
      </OpenModalButton>
    </nav>
  );
};

export default Nav;
