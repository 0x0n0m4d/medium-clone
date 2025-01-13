import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black sm:bg-background outline-none absolute bottom-0 h-[72px] w-full grid grid-flow-col gap-4 justify-start sm:justify-center items-center sm:border-t sm:border-solid sm:border-black pl-14 sm:pl-0 sm:pr-24">
      <Link
        href="#"
        className="text-white sm:text-black/60 hover:underline sm:hover:decoration-transparent text-sm"
      >
        Help
      </Link>
      <Link
        href="#"
        className="hidden sm:inline text-white sm:text-black/60 text-sm"
      >
        Status
      </Link>
      <Link
        href="#"
        className="text-white sm:text-black/60 hover:underline sm:hover:decoration-transparent text-sm"
      >
        About
      </Link>
      <Link href="#" className="hidden sm:inline text-black/60 text-sm">
        Careers
      </Link>
      <Link href="#" className="hidden sm:inline text-black/60 text-sm">
        Press
      </Link>
      <Link href="#" className="hidden sm:inline text-black/60 text-sm">
        Blog
      </Link>
      <Link
        href="#"
        className="text-white sm:text-black/60 hover:underline sm:hover:decoration-transparent text-sm"
      >
        Privacy
      </Link>
      <Link
        href="#"
        className="text-white sm:text-black/60 hover:underline sm:hover:decoration-transparent text-sm"
      >
        Terms
      </Link>
      <Link href="#" className="hidden sm:inline text-black/60 text-sm">
        Text to speech
      </Link>
      <Link href="#" className="hidden sm:inline text-black/60 text-sm">
        Teams
      </Link>
    </footer>
  );
};

export default Footer;
