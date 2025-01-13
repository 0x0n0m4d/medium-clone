'use client';

import Image from 'next/image';
import SignUpPage from '../auth/SignUpPage';
import OpenModalButton from '../modals/OpenModalButton';

const Hero = () => {
  return (
    <div className="w-full max-w-[1192px] flex flex-grow items-center h-screen min-h-[630px] overflow-x-hidden">
      <div className="flex flex-col mt-20 justify-center">
        <h2 className="serif leading-[100px] text-[106px] min-w-[800px] sm:text-banner text-black/90 font-normal mb-12 text-thin">
          Human <br /> stories & ideas
        </h2>
        <h3 className="hero-subtext text-lg font-normal mb-12 text-black/90">
          A place to read, write, and deepen your understanding
        </h3>
        <OpenModalButton
          className="w-[196px] py-5 leading-6 text-lg bg-primary hover:bg-phover sm:bg-black/90 sm:hover:bg-black border border-black/90 rounded-full text-white"
          element={<SignUpPage />}
        >
          Start reading
        </OpenModalButton>
      </div>
      <div className="hidden sm:flex justify-between absolute mt-20 left-0 w-full overflow-x-hidden">
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
