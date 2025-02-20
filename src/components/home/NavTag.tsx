'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PlusIcon } from '@/atoms/icons';

const NavTag = () => {
  const router = useRouter();

  return (
    <nav className="relative w-full flex items-center gap-x-14 border-b border-solid border-gray-100">
      <div className="pb-5 text-stone-300 hover:text-stone-600">
        <Link href="/me/following/suggestions#suggested-topics">
          <PlusIcon />
        </Link>
      </div>
      <div className="pb-5 font-bold text-sm text-center text-black border-b border-solid border-black">
        <button
          onClick={() => {
            router.push('/');
          }}
        >
          For you
        </button>
      </div>
      <div className="pb-5 font-bold text-sm text-center text-stone-500 hover:text-black">
        <button
          onClick={() => {
            router.push('/?feed=following');
          }}
        >
          Following
        </button>
      </div>
      <button className="absolute right-0 px-4 text-stone-500">
        <i className="fa-solid fa-chevron-right text-sm" />
      </button>
    </nav>
  );
};

export default NavTag;
