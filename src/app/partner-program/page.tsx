import Link from 'next/link';
import BasicFooter from '@/components/BasicFooter';
import BasicNav from '@/components/BasicNav';
import FaqComponent from '@/components/partner-program/FaqComponent';
import InfoContainer from '@/components/partner-program/InfoContainer';
import MediumPartnerComponent from '@/components/partner-program/MediumPartnerComponent';

const Page = () => {
  return (
    <div className="bg-white relative h-full w-full overflow-x-hidden">
      <div className="relative z-10 bg-white">
        <BasicNav redirectUrl="/partner-program" />
      </div>
      <MediumPartnerComponent />
      <InfoContainer
        title="Quality over clickbait"
        description="In a creator economy ruled by clickbait and ad impressions, Medium’s Partner Program is taking a stand for quality. As a partner, when your best stories are read by Medium members, a portion of their membership dues will be shared with you. Here are a few factors we consider in order to determine quality."
        items={[
          {
            title: 'Member read time',
            description:
              'Members-only stories will earn money when a member reads your story for 30 seconds or more, and will continue to earn more the longer they keep reading. Long, thoughtful, reads are encouraged!'
          },
          {
            title: 'Positive interactions',
            description:
              'You’ll also earn more when members clap, highlight, reply, or engage with your story in other ways.'
          },
          {
            title: 'Follower bonus',
            description:
              'When members follow you and continue to read and interact with your stories, you will be given a follower bonus. We encourage writers to share their stories with readers in a way that promotes community and audience building.'
          },
          {
            title: 'Boost bonus',
            description:
              'Stories that are Boosted will also earn more for each read and interaction. We recommend that writers spend more time on fewer, high-quality stories to reach this bar.'
          }
        ]}
      />
      <InfoContainer
        title="Eligibility criteria"
        items={[
          {
            title: 'You’re a member.',
            description:
              'The best way to succeed as a Partner Program author is to also participate as a reader of stories on Medium.'
          },
          {
            title: 'You’ve published a story in the last 6 months.',
            description:
              'Staying active, publishing regularly, and being engaged with the community are important ways to help our platform flourish.'
          },
          {
            title: 'You’re located in an eligible country.',
            description:
              'We recently expanded the number of supported countries, so now more people than ever are able to join the Partner Program.'
          }
        ]}
      />
      <Link
        href="/"
        className="w-full flex items-center justify-between py-10 xs:py-20 px-8 xs:px-12 border-t border-solid border-black bg-white text-black hover:bg-[#242424] hover:text-white transition delay-100 ease-in-out"
      >
        <span className="serif text-2xl xs:text-[70px]">Apply now</span>
        <span className="text-2xl xs:text-[70px]">→</span>
      </Link>
      <FaqComponent />
      <BasicFooter />
    </div>
  );
};

export default Page;
