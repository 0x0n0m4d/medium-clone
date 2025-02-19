import Image from 'next/image';
import Link from 'next/link';

const MediumPartnerComponent = () => {
  return (
    <section className="relative w-full min-h-[513px] flex flex-col flex-grow py-10 xs:py-28 px-8 xs:px-12">
      <div className="relative flex flex-col items-start justify-start gap-y-5 xs:gap-y-8 z-10">
        <h2 className="serif text-[48px] xs:text-[85px] lg:text-4xl leading-[52px] xs:leading-[88px] lg:leading-[120px] max-w-[887px]">
          Medium Partner Program
        </h2>
        <p className="text-sm xs:text-base text-start xs:max-w-[306px]">
          Medium’s Partner Program is for people who are interested in helping
          us fulfill our mission of deepening the collective wisdom of the world
          through personal expression, knowledge-sharing, and storytelling.
        </p>
        <Link
          href="/"
          className="text-sm xs:text-base text-center py-3 xs:py-4 px-7 xs:px-8 bg-black/90 hover:bg-black text-white rounded-full mt-7"
        >
          Apply now
        </Link>
      </div>
      <Image
        src="/assets/partner.png"
        alt="Partner Banner"
        width={808}
        height={647}
        className="block absolute bottom-0 left-0 -z-10"
      />
      <div className="block absolute bottom-0 right-0 max-w-[70%] xs:max-w-[50%]">
        <Image
          src="/assets/partner.png"
          alt="Partner Banner"
          width={808}
          height={647}
        />
      </div>
    </section>
  );
};

export default MediumPartnerComponent;
