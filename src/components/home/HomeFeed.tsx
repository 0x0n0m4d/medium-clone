import TrendingPosts from '../TrendingPosts';
import HomeFeedPosts from './HomeFeedPosts';

const HomeFeed = () => {
  return (
    <div>
      <section>
        <TrendingPosts />
      </section>
      <section>
        <HomeFeedPosts />
      </section>
    </div>
  );
};

export default HomeFeed;
