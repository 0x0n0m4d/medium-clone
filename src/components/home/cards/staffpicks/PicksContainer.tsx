import Image from 'next/image';
import Link from 'next/link';
import { monthSelector } from '@/lib/utils';

interface Props {
  avatar: string;
  user: string;
  title: string;
  publishedDate: Date;
}

const PicksContainer = ({ avatar, user, title, publishedDate }: Props) => {
  const today = new Date();
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(
    publishedDate.getFullYear(),
    publishedDate.getMonth(),
    publishedDate.getDate()
  );
  const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const diffDays = Math.floor((utc2 - utc1) / _MS_PER_DAY);

  const publishedMonth = monthSelector(publishedDate.getMonth()).substring(
    0,
    3
  );

  return (
    <div className="w-full flex flex-col gap-y-3">
      <div className="w-full flex gap-x-3">
        <Link href={`/@${user}`}>
          <Image
            src={avatar}
            alt={user}
            width={20}
            height={20}
            className="rounded-full"
          />
        </Link>
        <Link
          href={`#@${user}`}
          className="text-xs text-stone-800 hover:underline text-ellipsis"
        >
          {user}
        </Link>
      </div>
      <Link
        href={`#${user}/the-title`}
        className="w-full flex flex-col gap-y-4"
      >
        <h2 className="text-base font-extrabold">{title}</h2>
        <span className="text-xs text-stone-500">
          {diffDays <= 7
            ? `${diffDays}d ago`
            : `${publishedMonth} ${publishedDate.getDate()}`}
        </span>
      </Link>
    </div>
  );
};

export default PicksContainer;
