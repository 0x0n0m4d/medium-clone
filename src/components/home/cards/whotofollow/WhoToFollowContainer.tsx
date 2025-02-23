'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  avatar: string;
  name: string;
  username: string;
  description: string;
}

const WhoToFollowContainer = ({
  avatar,
  name,
  username,
  description
}: Props) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  return (
    <div className="w-screen flex justify-between">
      <div className="flex gap-x-4">
        <Link href={`/${username}`} className="min-w-[32px]">
          <Image
            src={avatar}
            alt={name}
            width={32}
            height={32}
            className="w-[32px] h-[32px] rounded-full"
          />
        </Link>
        <Link
          href={`/${username}`}
          className={
            description
              ? 'flex flex-col gap-y-2 max-w-[175px]'
              : 'flex justify-start max-w-[175px]'
          }
        >
          <h2 className="text-start text-ellipsis text-base font-bold">
            {name}
          </h2>
          {description && (
            <p className="truncate text-ellipsis text-xs text-stone-500 max-h-[40px]">
              {description}
            </p>
          )}
        </Link>
      </div>
      <div className="flex items-start">
        <button
          onClick={e => {
            e.preventDefault();
            setIsFollowed(!isFollowed);
          }}
          className={`py-2.5 px-5 rounded-full text-xs text-center ${isFollowed ? 'text-white bg-black/90 hover:bg-black' : 'bg-transparent text-black/80 hover:text-black border border-solid border-black/80 hover:border-black'}`}
        >
          {isFollowed ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default WhoToFollowContainer;
