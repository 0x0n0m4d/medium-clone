import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';

const Loading = () => {
  return (
    <div className="w-full h-screen min-h-[542px] flex flex-col items-center justify-center bg-white">
      <Link href="/" className="min-h-[65px] w-full bg-white fixed top-0 py-10">
        <span className="flex w-full h-full justify-center items-center">
          <Logo />
        </span>
      </Link>
      <Image
        src="/assets/cube.gif"
        alt="Loading Thumb"
        width={400}
        height={400}
        unoptimized
        className="w-[400px] h-[400px]"
      />
    </div>
  );
};

export default Loading;
