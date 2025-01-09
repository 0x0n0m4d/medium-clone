import Image from 'next/image';
import { Post } from '../../interfaces';

const TrendingPost = ({ post }: { post: Post }) => {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.author.name}</p>
      <Image
        src={post.author.avatar}
        alt="user avatar"
        width={25}
        height={25}
      />
    </div>
  );
};

export default TrendingPost;
