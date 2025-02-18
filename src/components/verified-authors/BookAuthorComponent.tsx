import Link from 'next/link';
import BookAuthorBanner from './BookAuthorBanner';

const BookAuthorComponent = () => {
  return (
    <section className="bg-[#f6f8ff] w-full flex flex-grow items-center min-h-[412px] sm:min-h-[564px] lg:min-h-[600px] 2xl:min-h-[690px] z-10">
      <div className="flex flex-col items-start justify-start max-w-[270px] xs:max-w-[381px] sm:max-w-[548px] lg:max-w-[623px] 2xl:max-w-[644px] gap-y-16 ml-10 sm:ml-20">
        <h2 className="serif text-start text-2xl xs:text-[48px] sm:text-[70px] 2xl:text-[85px] text-black font-bold leading-tight xs:leading-[48px] sm:leading-[74px] 2xl:leading-[88px]">
          Become a verified book author on Medium
        </h2>
        <p className="text-sm sm:text-base 2xl:text-md text-start leading-snug max-w-[190px] xs:max-w-[304px] sm:max-w-[409px] 2xl:max-w-[473px]">
          Medium believes in the power of words, whether it’s one line or a
          whole book. Now, we are inviting book authors to verify their accounts
          by claiming the books they have written.
        </p>
        <Link
          href="/"
          className="text-center text-white text-xs sm:text-sm lg:text-base py-2 sm:py-3 lg:py-4 px-5 sm:px-6 lg:px-8 bg-black/90 hover:bg-black rounded-full"
        >
          Apply now
        </Link>
      </div>
      <BookAuthorBanner />
    </section>
  );
};

export default BookAuthorComponent;
