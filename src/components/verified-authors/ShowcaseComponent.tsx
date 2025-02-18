import Image from 'next/image';

const ShowcaseComponent = () => {
  return (
    <section className="relative bg-[#E6C0FF] w-full h-[466px] xs:h-[588px] sm:h-[735px]">
      <div className="w-full py-20 sm:py-32 px-10 sm:px-20">
        <h2 className="serif text-xl xs:text-2xl sm:text-[48px] 2xl:text-[70px] 2xl:max-w-[489px] leading-[32px] xs:leading-[36px] sm:leading-[52px] 2xl:leading-[74px] max-w-[232px] sm:max-w-[336px]">
          Showcase your published books
        </h2>
      </div>
      <div className="bg-[#cf88fe] -left-[240px] top-[140px] sm:top-[197px] 2xl:top-[240px] absolute w-[1129px] h-[600px] rounded-tl-full 2xl:rounded-t-full" />
      <Image
        src="/assets/showcase.png"
        alt="Showcase Thumb"
        width={1626}
        height={1278}
        className="absolute -bottom-[15px] ban:top-[183px] xs:top-[168px] sm:top-[193px] lg:right-0 lg:top-auto lg:-bottom-10 lg:w-[787px] lg:h-[655px]"
      />
    </section>
  );
};

export default ShowcaseComponent;
