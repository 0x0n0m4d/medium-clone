'use client';

import SignUpPage from '../auth/SignUpPage';
import OpenModalButton from '../modals/OpenModalButton';

const Hero = () => {
  return (
    <div className="bg-[var(--homepage-main-color)] flex justify-center">
      <div className="flex-grow px-6 py-4 max-w-[1250px]">
        <h2 className="serif text-8xl text-black font-normal tracking-tighter mb-4">
          Stay curious.
        </h2>
        <h3 className="hero-subtext text-2xl font-normal max-w-md mb-12 text-black/90">
          Discover stories, thinking, and expertise from writers on any topic.
        </h3>
        <OpenModalButton
          className="w-52 p-3 leading-6 tetxt-xl bg-black/95 border border-black/90 rounded-full text-white"
          element={<SignUpPage />}
        >
          Start reading
        </OpenModalButton>
      </div>
    </div>
  );
};

export default Hero;
