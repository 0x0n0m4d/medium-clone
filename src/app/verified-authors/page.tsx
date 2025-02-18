import BasicFooter from '@/components/BasicFooter';
import BasicNav from '@/components/BasicNav';
import AuthorsComponent from '@/components/verified-authors/AuthorsComponent';
import BookAuthorComponent from '@/components/verified-authors/BookAuthorComponent';
import HowItWorksComponent from '@/components/verified-authors/HowItWorksComponent';
import MoreAboutComponent from '@/components/verified-authors/MoreAboutComponent';
import ShowcaseComponent from '@/components/verified-authors/ShowcaseComponent';

const Page = () => {
  return (
    <div className="relative h-full w-full overflow-x-hidden">
      <div className="relative z-10 bg-[#f6f8ff]">
        <BasicNav redirectUrl="/verified-authors" />
      </div>
      <BookAuthorComponent />
      <HowItWorksComponent />
      <AuthorsComponent />
      <ShowcaseComponent />
      <MoreAboutComponent />
      <div className="relative bg-white z-10">
        <BasicFooter />
      </div>
    </div>
  );
};

export default Page;
