import Link from 'next/link';

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
      <Link href="#" className="mr-6">
        Sign In
      </Link>
    </nav>
  );
};

export default Nav;
