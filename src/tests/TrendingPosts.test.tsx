import { render } from '@testing-library/react';
import TrendingPost from '../components/TrendingPost';
import TrendingPosts from '../components/TrendingPosts';

jest.mock('../components/TrendingPost.tsx', () =>
  jest.fn(() => <div>trending post</div>)
);

interface Post {
  title: string;
  author: { name: string; avatar: string };
  date: Date;
  id: string | number;
}

it('should map through an array of posts', () => {
  const posts: Post[] = [
    {
      title: 'article name',
      author: { name: 'Lucas Rodrigues', avatar: '/assets/default-avatar.png' },
      date: new Date('7-4-2010'),
      id: 'foo'
    },
    {
      title: 'article name 2',
      author: { name: 'Another Name', avatar: '/assets/default-avatar.png' },
      date: new Date('10-29-2015'),
      id: 'bar'
    }
  ];

  render(<TrendingPosts posts={posts} />);

  // First call
  expect(TrendingPost).toHaveBeenNthCalledWith(
    1,
    { post: expect.objectContaining({ id: 'foo' }) },
    undefined
  );
  // Second call
  expect(TrendingPost).toHaveBeenNthCalledWith(
    2,
    { post: expect.objectContaining({ id: 'bar' }) },
    undefined
  );
});
