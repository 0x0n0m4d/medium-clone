import Link from 'next/link';
import WhoToFollowContainer from './WhoToFollowContainer';

const WhoToFollow = () => {
  return (
    <div className="w-full flex flex-col gap-y-7 pt-7">
      <h2 className="font-bold text-base text-start">Who to follow</h2>
      <div className="w-full flex flex-col gap-y-7">
        <WhoToFollowContainer
          avatar="/assets/default-avatar.png"
          name="Unknown User"
          username="@unknown"
          description="a random user to test the component e capabilities"
        />
        <WhoToFollowContainer
          avatar="/assets/default-avatar.png"
          name="Another User"
          username="@another"
          description="another description with different words"
        />
        <WhoToFollowContainer
          avatar="/assets/default-avatar.png"
          name="User 3"
          username="@thethird"
          description="generic description is my passion"
        />
      </div>
      <Link
        href="/me/following/suggestions"
        className="text-start text-sm text-stone-500 hover:underline"
      >
        See more suggestions
      </Link>
    </div>
  );
};

export default WhoToFollow;
