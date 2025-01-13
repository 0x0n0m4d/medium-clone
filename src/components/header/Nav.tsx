import Link from 'next/link';
import SignInPage from '../auth/SignInPage';
import SignUpPage from '../auth/SignUpPage';
import OpenModalButton from '../modals/OpenModalButton';

const Nav = () => {
  return (
    <nav className="outline-none decoration-transparent text-black/90 text-sm mr-4">
      <Link href="#" className="mr-7">
        Our story
      </Link>
      <Link href="#" className="mr-7">
        Membership
      </Link>
      <Link href="#" className="mr-7">
        Write
      </Link>
      <OpenModalButton className="mr-7" element={<SignInPage />}>
        Sign In
      </OpenModalButton>
      <OpenModalButton
        className="w-[105px] p-2.5 leading-6 bg-black/85 border border-black/85 hover:bg-black transition duration-200 rounded-full text-white tracking-tight"
        element={<SignUpPage />}
      >
        Get started
      </OpenModalButton>
    </nav>
  );
};

export default Nav;
