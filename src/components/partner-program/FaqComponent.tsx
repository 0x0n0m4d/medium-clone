import NestedInfo from '../NestedInfo';

const FaqComponent = () => {
  return (
    <section className="relative bg-[#242424] flex flex-col px-10 py-10 lg:px-28 lg:pt-28 2xl:pt-32">
      <h2 className="serif text-white text-2xl xs:text-[70px] leading-[36px] xs:leading-[74px]">
        FAQ
      </h2>
      <NestedInfo
        title="What are the new changes for the Partner Program?"
        info="We’ve updated the Partner Program to incentivize high-quality human writing. Here’s a quick summary: we’ve opened up the Partner Program to more locations, removed the 100 follower requirement, and require Medium membership to join. Earnings will be higher for stories that have repeat readers, have been Boosted, and that have a high read ratio. All stories will also earn more based on engagement signals like claps, highlights, and replies. Referral bonuses are being deprecated and new story stats will be added in so writers can better understand their story earnings breakdown."
      />
      <NestedInfo
        title="How are earnings calculated?"
        info="Earnings will be based on member read and listen time as well as member engagement signals. This includes claps, highlights, replies, and new follows. Reads and read ratios will be defined as people who read your story for 30 seconds or more divided by total views. More information on how earnings are calculated can be found here with examples featured here."
      />
      <NestedInfo
        title="What is happening with referred memberships?"
        info="We’re deprecating the Membership Referral Program and replacing it with a Follower Bonus. Stories that are read by and have engagement with existing followers will get an extra bonus in earnings.
All member referrals made up until September 1, 2023 will continue to be honored indefinitely. We will keep your custom referral pages up so that they don’t break your links in stories, but we will stop generating new referrals for members who sign up after September 1st."
      />
      <NestedInfo
        title="Do existing Partner Program writers need to re-apply or update anything at this time?"
        info="Nope, if you’re already in the Partner Program, you won’t have to do anything new to stay in the program."
      />
      <NestedInfo
        title="Where can I go if I have more questions about the Partner Program?"
        info="Check out the Partner Program Guide! If you have any other questions, submit a Help Desk request and we’ll get back to you as soon as possible!"
      />
    </section>
  );
};

export default FaqComponent;
