'use client';

import { useState } from 'react';
import Link from 'next/link';

const WritingStick = () => {
  const [isStickOpen, setIsStickOpen] = useState<boolean>(true);

  return (
    <div
      className={`${isStickOpen ? 'flex' : 'hidden'} relative mt-12 bg-[#c4e2ff] w-full h-full flex-col px-7 py-6 gap-y-10 rounded-lg`}
    >
      <h2 className="font-extrabold text-base">Writing on Medium</h2>
      <div className="flex flex-col gap-y-3">
        <Link href="#" className="text-base">
          New writer FAQ
        </Link>
        <Link href="#" className="text-base">
          Expert writing advice
        </Link>
        <Link href="#" className="text-base">
          Grow your readership
        </Link>
      </div>
      <div className="flex h-full mb-2">
        <Link
          href="/new-story"
          className="text-xs text-center text-white bg-black/90 hover:bg-black rounded-full py-2.5 px-5"
        >
          Start writing
        </Link>
      </div>
      <button
        className="absolute top-3 right-3 text-stone-800 hover:text-black"
        onClick={e => {
          e.preventDefault();
          setIsStickOpen(!isStickOpen);
        }}
      >
        <i className="fa-solid fa-xmark text-base" />
      </button>
    </div>
  );
};

export default WritingStick;
