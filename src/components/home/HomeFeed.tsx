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
              author: {
                name: '404 Unknown',
                avatar: '/assets/default-avatar.png'
              },
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
