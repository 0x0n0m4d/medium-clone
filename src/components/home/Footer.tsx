import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between absolute bottom-0 w-full h-full">
      <div className="min-h-[570px] -z-50" />
      <div className="bg-black md:bg-background outline-none grid grid-flow-col gap-7 justify-start md:justify-center items-center md:border-t md:border-solid md:border-black pl-14 md:pl-0 md:pr-52 min-h-[72px] z-10">
        <Link
          href="/"
          className="text-white md:text-black/60 hover:underline md:hover:decoration-transparent text-xs"
        >
          Help
        </Link>
        <Link
          href="/"
          className="hidden md:inline text-white md:text-black/60 text-xs"
        >
          Status
        </Link>
        <Link
          href="/"
          className="text-white md:text-black/60 hover:underline md:hover:decoration-transparent text-xs"
        >
          About
        </Link>
        <Link href="/" className="hidden md:inline text-black/60 text-xs">
          Careers
        </Link>
        <Link href="/" className="hidden md:inline text-black/60 text-xs">
          Press
        </Link>
        <Link href="/" className="hidden md:inline text-black/60 text-xs">
          Blog
        </Link>
        <Link
          href="/"
          className="text-white md:text-black/60 hover:underline md:hover:decoration-transparent text-xs"
        >
          Privacy
        </Link>
        <Link
          href="/"
          className="text-white md:text-black/60 hover:underline md:hover:decoration-transparent text-xs"
        >
          Terms
        </Link>
        <Link href="/" className="hidden md:inline text-black/60 text-xs">
          Text to speech
        </Link>
        <Link href="/" className="hidden md:inline text-black/60 text-xs">
          Teams
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
