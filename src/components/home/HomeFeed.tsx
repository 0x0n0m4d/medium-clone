import TrendingPosts from '../TrendingPosts';
import HomeFeedPosts from './HomeFeedPosts';

const HomeFeed = () => {
  return (
    <div>
      <section>
        <TrendingPosts
          posts={[
            {
              title: 'test',
              author: 'test',
              date: new Date(),
              id: 'test'
            }
          ]}
        />
      </section>
      <section>
        <HomeFeedPosts />
      </section>
    </div>
  );
};

export default HomeFeed;
