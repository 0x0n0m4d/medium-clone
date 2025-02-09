import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo';

interface Props {
  email: string;
  isLogin: boolean;
  className?: string;
}

const CheckInboxPage = ({ email, isLogin, className }: Props) => {
  return (
    <div
      className={`fixed left-0 right-0 top-0 bottom-0 bg-white flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto ${className}`}
    >
      <Link
        href={`${process.env.NEXT_PUBLIC_URL}`}
        className="min-h-[65px] w-full bg-white fixed top-0 py-10 z-20"
      >
        <span className="flex w-full h-full justify-center items-center">
          <Logo />
        </span>
      </Link>
      <div className="min-h-[80px]" />
      <div className="bg-[#D7EFEE] relative rounded px-11 py-14 shadow-black/15 shadow-[0px_2px_10px] text-center flex flex-col w-[610px] h-[420px] xl:w-[910px] xl:h-[560px] my-auto">
        <div className="grid place-items-center">
          <h2 className="serif text-black/95 text-2xl font-thin">
            Check your inbox
          </h2>
          <p className="text-[19px] text-center text-black/80 tracking-tight max-w-[550px] my-10">
            We just emailed a confirmation link to {email}. Click the link, and
            you’ll be signed {isLogin ? 'in' : 'up'}.
          </p>
          <Link
            href={'/'}
            className="text-white text-sm py-3 px-7 bg-black/85 hover:bg-black transition rounded-full"
          >
            OK
          </Link>
        </div>
        <Image
          src="/assets/inbox.png"
          alt="Inbox Thumb"
          width={780}
          height={244}
          className="object-contain w-[500px] xl:w-[780px] h-[244px]"
        />
      </div>
    </div>
  );
};

export default CheckInboxPage;
