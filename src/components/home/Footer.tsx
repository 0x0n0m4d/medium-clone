import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 outline-none decoration-transparent h-20 w-full grid grid-flow-col gap-4 justify-center items-center border-t border-solid border-black pr-24">
      <Link href="#" className="text-black/60 text-md">
        Help
      </Link>
      <Link href="#" className="text-black/60 text-md">
        Status
      </Link>
      <Link href="#" className="text-black/60 text-md">
        About
      </Link>
      <Link href="#" className="text-black/60 text-md">
        Careers
      </Link>
      <Link href="#" className="text-black/60 text-md">
        Press
      </Link>
      <Link href="#" className="text-black/60 text-md">
        Blog
      </Link>
      <Link href="#" className="text-black/60 text-md">
        Privacy
      </Link>
      <Link href="#" className="text-black/60 text-md">
        Terms
      </Link>
      <Link href="#" className="text-black/60 text-md">
        Text to speech
      </Link>
      <Link href="#" className="text-black/60 text-md">
        Teams
      </Link>
    </footer>
  );
};

export default Footer;
