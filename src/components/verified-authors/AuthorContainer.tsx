import Image from 'next/image';
import { VerifiedIcon } from '@/atoms/icons';

interface Props {
  avatar: string;
  name: string;
  article: string;
  className?: string;
}

const AuthorContainer = ({ avatar, name, article, className }: Props) => {
  return (
    <div
      className={`flex w-full sm:min-w-[636px] 2xl:min-w-[310px] 2xl:max-w-[310px] py-6 ${className}`}
    >
      <Image
        src={avatar}
        alt={name}
        width={112}
        height={112}
        className="rounded-full w-[56px] h-[56px] mr-3"
      />
      <div className="flex flex-col items-start gap-y-2 sm:gap-y-1">
        <h2 className="flex items-center font-bold text-base sm:text-md gap-x-2">
          {name}
          <VerifiedIcon />
        </h2>
        <p className="text-start text-sm sm:text-base">
          Author, &quot;{article}&quot;
        </p>
      </div>
    </div>
  );
};

export default AuthorContainer;
