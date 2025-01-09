import { Post } from '../interfaces';

const TrendingPost = ({ post }: { post: Post }) => {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.author}</p>
    </div>
  );
};

export default TrendingPost;
