import Link from 'next/link';
import SignInDialog from '../auth/SignInDialog';
import SignUpDialog from '../auth/SignUpDialog';
import OpenModalButton from '../modals/OpenModalButton';

const FrontNav = () => {
  return (
    <nav className="outline-none text-black/90 text-sm mr-4">
      <Link href="#" className="mr-7">
        Our story
      </Link>
      <Link href="#" className="mr-7">
        Membership
      </Link>
      <Link href="#" className="mr-7">
        Write
      </Link>
      <OpenModalButton className="mr-7" element={<SignInDialog />}>
        Sign In
      </OpenModalButton>
      <OpenModalButton
        className="w-[105px] px-2.5 py-5 leading-6 bg-black/85 border border-black/85 hover:bg-black transition duration-200 rounded-full text-white text-center tracking-tight"
        element={<SignUpDialog />}
      >
        Get started
      </OpenModalButton>
    </nav>
  );
};

export default FrontNav;
