import { User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import {
  ClapIcon,
  CommentIcon,
  LessIcon,
  MoreIcon,
  SaveList
} from '@/atoms/icons';
import { monthSelector } from '@/lib/utils';

interface Props {
  user: User;
  title: string;
  description?: string | null;
  createdAt: string;
  claps: number;
}

const ArticlesCard = ({
  user,
  title,
  description,
  createdAt,
  claps
}: Props) => {
  const today = new Date();
  const createdAtDate = new Date(createdAt);
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(
    createdAtDate.getFullYear(),
    createdAtDate.getMonth(),
    createdAtDate.getDate()
  );
  const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const diffDays = Math.floor((utc2 - utc1) / _MS_PER_DAY);

  const createdAtMonth = monthSelector(createdAtDate.getMonth()).substring(
    0,
    3
  );

  return (
    <div className="w-full flex flex-col pt-7 pb-16 border-b border-solid border-stone-200 gap-y-5">
      <Link href={`/${user.username}`} className="flex items-center gap-x-3">
        <Image
          src={user.photoUrl}
          alt={user.name}
          width={20}
          height={20}
          className="w-[20px] h-[20px] rounded-full"
        />
        <span className="text-xs text-start text-stone-800">{user.name}</span>
      </Link>
      <Link
        href={`#/${user.username}/modifiedtitle`}
        className="w-full flex flex-col items-start text-start gap-y-4"
      >
        <h1 className="font-bold text-[24px] leading-[30px]">{title}</h1>
        {description && (
          <span className="text-base text-stone-500 text-start">
            {description}
          </span>
        )}
      </Link>
      <div className="w-full flex items-center justify-between">
        <Link
          href={`#/${user.username}/modifiedtitle`}
          className="flex items-center gap-x-5"
        >
          <div className="text-xs text-stone-500">
            {diffDays <= 7
              ? `${diffDays}d ago`
              : `${createdAtMonth} ${createdAtDate.getDate()}`}
          </div>
          <div className="flex text-xs text-stone-500 items-center gap-x-2">
            <ClapIcon /> {claps}
          </div>
          <div className="flex items-center text-xs text-stone-500 gap-x-2">
            <CommentIcon /> 0
          </div>
        </Link>
        <div className="flex items-center text-stone-500 gap-x-7">
          <button>
            <LessIcon />
          </button>
          <button>
            <SaveList />
          </button>
          <button>
            <MoreIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
