import { useContext } from 'react';
import Link from 'next/link';
import SignInPage from '../auth/SignInPage';
import ModalContext from '../modals/ModalContext';

const Nav = () => {
  const { setModalOpen } = useContext(ModalContext);

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
      <button
        className="mr-6"
        onClick={() => setModalOpen(true, <SignInPage />)}
      >
        Sign In
      </button>
    </nav>
  );
};

export default Nav;
