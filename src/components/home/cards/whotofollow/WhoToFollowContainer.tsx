'use state';

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
    <div className="w-full flex justify-between">
      <Link href={`/${username}`} className="w-full min-w-[32px]">
        <Image
          src={avatar}
          alt={name}
          width={32}
          height={32}
          className="w-[32px] h-[32px] rounded-full"
        />
      </Link>
      <div className="w-full flex items-center">
        <Link
          href={`/${username}`}
          className="flex flex-col gap-y-2 max-w-[175px]"
        >
          <h2 className="text-ellipsis text-base font-bold">{name}</h2>
          <p className="truncate text-ellipsis text-xs text-stone-500 max-h-[40px]">
            {description}
          </p>
        </Link>
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
