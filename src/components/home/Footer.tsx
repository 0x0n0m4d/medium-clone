import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between absolute bottom-0 w-full h-full">
      <div className="min-h-[570px] -z-50" />
      <div className="bg-black sm:bg-background outline-none grid grid-flow-col gap-7 justify-start sm:justify-center items-center sm:border-t sm:border-solid sm:border-black pl-14 sm:pl-0 sm:pr-52 min-h-[72px] z-10">
        <Link
          href="#"
          className="text-white sm:text-black/60 hover:underline sm:hover:decoration-transparent text-xs"
        >
          Help
        </Link>
        <Link
          href="#"
          className="hidden sm:inline text-white sm:text-black/60 text-xs"
        >
          Status
        </Link>
        <Link
          href="#"
          className="text-white sm:text-black/60 hover:underline sm:hover:decoration-transparent text-xs"
        >
          About
        </Link>
        <Link href="#" className="hidden sm:inline text-black/60 text-xs">
          Careers
        </Link>
        <Link href="#" className="hidden sm:inline text-black/60 text-xs">
          Press
        </Link>
        <Link href="#" className="hidden sm:inline text-black/60 text-xs">
          Blog
        </Link>
        <Link
          href="#"
          className="text-white sm:text-black/60 hover:underline sm:hover:decoration-transparent text-xs"
        >
          Privacy
        </Link>
        <Link
          href="#"
          className="text-white sm:text-black/60 hover:underline sm:hover:decoration-transparent text-xs"
        >
          Terms
        </Link>
        <Link href="#" className="hidden sm:inline text-black/60 text-xs">
          Text to speech
        </Link>
        <Link href="#" className="hidden sm:inline text-black/60 text-xs">
          Teams
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
