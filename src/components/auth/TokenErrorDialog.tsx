import Link from 'next/link';
import Logo from '../Logo';

interface Props {
  isLogin: boolean;
}

const TokenErrorDialog = ({ isLogin }: Props) => {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-white flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto">
      <Link
        href="/"
        className="min-h-[65px] w-full bg-white fixed top-0 py-10 z-20"
      >
        <span className="flex w-full h-full justify-center items-center">
          <Logo />
        </span>
      </Link>
      <div className="min-h-[80px]" />
      <div className="relative rounded px-20 xl:px-11 py-14 shadow-black/15 shadow-[0px_2px_10px] text-center flex flex-col justify-center items-center w-[600px] h-[550px] xl:w-[910px] xl:h-[560px] my-auto">
        <div className="grid place-items-center">
          <h2 className="serif text-black/90 text-2xl font-thin">
            Apologies, but something went wrong.
          </h2>
          <p className="text-base text-center text-black/80 font-thin max-w-[360px] my-10">
            {isLogin
              ? 'Please try signing in again.'
              : 'Please try signing up again.'}
          </p>
          <Link
            href={
              isLogin
                ? '/m/signin?operation=login'
                : '/m/signin?operation=register'
            }
            className="text-white text-sm py-3 px-7 bg-black transition rounded-full"
          >
            {isLogin ? 'Back to sign in' : 'Back to sign up'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TokenErrorDialog;
