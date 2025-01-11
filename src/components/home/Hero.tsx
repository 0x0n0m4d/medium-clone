'use client';

import Image from 'next/image';
import SignUpPage from '../auth/SignUpPage';
import OpenModalButton from '../modals/OpenModalButton';

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-grow px-7 py-8 max-w-[1250px]">
        <div className="flex flex-col h-[600px] py-40">
          <h2 className="serif leading-[100px] text-[130px] text-black/90 font-normal tracking-tighter mb-12">
            Human <br /> stories & ideas
          </h2>
          <h3 className="hero-subtext text-3xl font-normal mb-12 text-black/90">
            A place to read, write, and deepen your understanding
          </h3>
          <OpenModalButton
            className="w-[196px] py-5 leading-6 text-2xl bg-black/95 border border-black/90 rounded-full text-white"
            element={<SignUpPage />}
          >
            Start reading
          </OpenModalButton>
        </div>
        <Image
          src="/assets/brand.png"
          alt="Brand Image"
          width={460}
          height={600}
          className="absolute right-0"
        />
      </div>
    </div>
  );
};

export default Hero;
