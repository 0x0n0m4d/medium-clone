import HowItWorksItem from '@/components/verified-authors/HowItWorksItem';

const HowItWorksComponent = () => {
  return (
    <section className="relative bg-[#B5E5A4] flex flex-col flex-grow items-start justify-center px-10 sm:px-20 lg:px-28 gap-y-10 w-full min-h-[425px] xs:min-h-[433px] sm:min-h-[549px] lg:min-h-[581px] 2xl:min-h-[642px] z-10">
      <h2 className="serif text-xl xs:text-2xl sm:text-[48px] 2xl:text-[70px]">
        How it works
      </h2>
      <HowItWorksItem
        index={1}
        title="Claim your book"
        content="Apply for verification via this form, which will ask you for your published book information (ISBN, title, description, and publisher info)"
        contentClassName="pb-8 border-b border-solid border-black"
      />
      <HowItWorksItem
        index={2}
        title="The review process"
        content="We will review to verify your information and contact you in a few weeks"
        contentClassName="pb-8 border-b border-solid border-black"
      />
      <HowItWorksItem
        index={3}
        title="Get verified"
        content="Once verified, your profile will include the official Medium author badge, and feature your book"
      />
    </section>
  );
};

export default HowItWorksComponent;
