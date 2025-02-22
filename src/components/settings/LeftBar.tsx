import Link from 'next/link';

const LeftBar = () => {
  return (
    <div className="bg-white hidden relative lg:block w-full max-w-[408px] min-h-[1080px] h-full border-l border-solid border-gray-100 px-10 py-7 z-20">
      <h2 className="font-bold text-base">Suggested help articles</h2>
      <div className="mt-12 grid gap-y-5">
        <Link href="#" className="text-sm text-stone-800">
          Sign in or sign up to Medium
        </Link>
        <Link href="#" className="text-sm text-stone-800">
          Your profile page
        </Link>
        <Link href="#" className="text-sm text-stone-800">
          Writing and publishing your first story
        </Link>
        <Link href="#" className="text-sm text-stone-800">
          About Medium's distribution system
        </Link>
        <Link href="#" className="text-sm text-stone-800">
          Get started with the Partner Program
        </Link>
      </div>
      <footer className="fixed bottom-10 w-full">
        <div className="flex gap-x-2 gap-y-2 text-stone-500 text-[11px]">
          <Link href="/">Help</Link>
          <Link href="/">Status</Link>
          <Link href="/">About</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Press</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
        </div>
        <div className="flex gap-x-2 gap-y-2 text-stone-500 text-[11px]">
          <Link href="/">Text to speech</Link>
          <Link href="/">Teams</Link>
        </div>
      </footer>
    </div>
  );
};

export default LeftBar;
