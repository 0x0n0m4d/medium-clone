import { render } from '@testing-library/react';
import TrendingPost from '../src/components/trending/TrendingPost';
import TrendingPosts from '../src/components/trending/TrendingPosts';

jest.mock('../TrendingPost.tsx', () => jest.fn(() => <div>trending post</div>));

interface Post {
  title: string;
  author: string;
  date: Date;
  id: string | number;
}

it('should map through an array of posts', () => {
  const posts: Post[] = [
    {
      title: 'article name',
      author: 'Lucas Rodrigues',
      date: new Date('01-09-2025'),
      id: 'foo'
    },
    {
      title: 'article name 2',
      author: 'Another Name',
      date: new Date('08-25-2013'),
      id: 'bar'
    }
  ];

  render(<TrendingPosts posts={posts} />);

  expect(TrendingPost).toHaveBeenNthCalledWith(
    1,
    { post: expect.objectContaining({ id: 'foo' }) },
    expect.anything()
  );

  expect(TrendingPost).toHaveBeenNthCalledWith(
    2,
    { post: expect.objectContaining({ id: 'bar' }) },
    expect.anything()
  );
});
