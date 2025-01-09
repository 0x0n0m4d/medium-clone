import { Post } from '../../interfaces';
import TrendingPost from './TrendingPost';

const TrendingPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      {posts.map((post: Post) => (
        <TrendingPost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default TrendingPosts;
