import Link from 'next/link';
import { SearchIcon } from '@/atoms/icons';
import Nav from '@/components/header/Nav';

const Page = () => {
  return (
    <section className="bg-white w-full h-screen flex flex-col">
      <Nav />
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
        <div className="xs:hidden bg-transparent flex items-center justify-center rounded-full border border-solid border-stone-100 py-3 px-6 gap-x-4 mx-10 mt-10">
          <div className="text-black ">
            <SearchIcon />
          </div>
          <input
            placeholder="Search"
            className="text-sm bg-transparent outline-none text-start placeholder:text-stone-400 w-full"
          />
        </div>
        <div className="w-full min-w-[573px] max-w-[838px] h-full flex flex-col items-start justify-start px-10 sm:px-12 py-10 sm:py-20">
          <h1 className="font-bold text-[24px] sm:text-[42px]">
            Recent searches
          </h1>
          <span className="text-base mt-10 sm:mt-14">
            You have no recent searches
          </span>
        </div>
        <div className="hidden lg:block w-full max-w-[339px] h-full border-l border-solid border-gray-100">
          <div className="h-full min-h-[638px]" />
          <footer className="fixed bottom-0 w-full px-10 py-10 items-end">
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
      </div>
    </section>
  );
};

export default Page;
