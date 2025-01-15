'use client';

import Image from 'next/image';
import SignUpDialog from '../auth/SignUpDialog';
import OpenModalButton from '../modals/OpenModalButton';

const Hero = () => {
  return (
    <div className="w-full max-w-xl flex flex-grow items-center h-screen min-h-[630px] overflow-x-hidden">
      <div className="flex flex-col mt-20 justify-center">
        <h2 className="serif leading-[100px] min-w-[800px] text-2xl sm:text-3xl text-black/85 font-normal mb-20 text-thin">
          Human <br /> stories & ideas
        </h2>
        <h3 className="hero-subtext text-lg font-normal mb-20 text-black/90">
          A place to read, write, and deepen your understanding
        </h3>
        <OpenModalButton
          className="w-[196px] py-7 leading-6 text-md bg-primary hover:bg-phover sm:bg-black/90 sm:hover:bg-black border border-black/90 rounded-full text-white z-10"
          element={<SignUpDialog />}
        >
          Start reading
        </OpenModalButton>
      </div>
      <div className="hidden sm:flex justify-between absolute mt-20 left-0 w-full overflow-x-hidden -z-50">
        <div className="min-w-[780px]" />
        <Image
          src="/assets/brand.png"
          alt="Brand Image"
          width={460}
          height={600}
          className="object-cover w-[460px] h-[600px]"
        />
      </div>
    </div>
  );
};

export default Hero;
