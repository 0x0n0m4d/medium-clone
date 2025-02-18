import Link from 'next/link';
import NestedAboutInfo from './NestedAboutInfo';

const MoreAboutComponent = () => {
  return (
    <section className="relative bg-[#242424] flex flex-col px-10 py-10 lg:px-28 lg:pt-28 2xl:pt-32">
      <h2 className="serif text-white text-2xl xs:text-[70px] leading-[36px] xs:leading-[74px]">
        More about author verification on Medium:
      </h2>
      <NestedAboutInfo
        title="Who can be verified on Medium?"
        info="At this time, we are accepting applications for verification from all authors who have published books that include an ISBN (International Standard Book Number)."
      />
      <NestedAboutInfo
        title="How is author verification different from verification on other platforms?"
        info="Verification on Medium means that the account has been confirmed to be the author of the book or books that are shown on their profile."
      />
      <NestedAboutInfo
        title="Can anyone get verified on Medium?"
        info="You do not need to be a paying Medium member nor be enrolled in our Partner Program to become a verified author. You simply need to have an account on Medium, a profile with complete information, and that you’ve published a book, of course."
      />
      <NestedAboutInfo title="Does it cost money?" info="Nope!" />
      <NestedAboutInfo
        title="How do I know if I am verified?"
        info="When you are verified, a blue icon will appear next to your name on your profile, your story pages, and most other places where your name appears on Medium. You will also receive an email from us when your application has been processed, whether it has been approved or not."
      />
      <NestedAboutInfo
        title="How do I know if someone else is verified?"
        info="By the blue icon by their name, and the fact that they have a Books tab on their profile page."
      />
      <NestedAboutInfo
        title="Can a verified badge be automatically removed from an account?"
        info="We reserve the right to remove verification from an account if the account is found to not belong to the actual author of the book(s) listed, or if the account otherwise breaks our terms of service."
      />
      <NestedAboutInfo
        title="Can I request to remove my verified badge?"
        info="Yes, of course! You can request to have your verification removed by contacting us. Removing the badge will also remove the books from the profile page."
      />
      <NestedAboutInfo
        title="What should I do after I’m verified?"
        info="Write a Medium story! You can expand on the ideas in your book, share sections that were cut from the published version, or write on any topic you want. The more you write, the better your readers will get to know you and your work."
      />
      <div className="w-full flex items-center justify-center gap-x-5">
        <span className="text-white text-base">Published a book?</span>
        <Link
          href="/"
          className="rounded-full text-center text-base bg-white py-3 px-8 text-black/80 hover:text-black"
        >
          Apply now
        </Link>
      </div>
    </section>
  );
};

export default MoreAboutComponent;
