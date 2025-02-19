import Link from 'next/link';
import Logo from './Logo';

const BasicFooter = () => {
  return (
    <footer className="w-full flex flex-col justify-center gap-y-4 sm:gap-y-0 sm:flex-row sm:justify-between items-center p-10">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-x-3 underline text-stone-700 text-[11px]">
        <Link href="/">About</Link>
        <Link href="/">Terms</Link>
        <Link href="/">Privacy</Link>
        <Link href="/">Help</Link>
        <Link href="/">Teams</Link>
        <Link href="/">Press</Link>
      </div>
    </footer>
  );
};

export default BasicFooter;
