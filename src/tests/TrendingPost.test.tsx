import { render, screen } from '@testing-library/react';
import TrendingPost from '../components/trending/TrendingPost';
import '@testing-library/jest-dom';

it('should render a trending post', () => {
  render(
    <TrendingPost
      post={{
        title: 'title name',
        author: {
          name: '( ._.)',
          avatar: '/assets/default-avatar.png'
        },
        date: new Date('2010-10-10'),
        id: '1234'
      }}
    />
  );

  expect(screen.getByText('title name')).toBeInTheDocument();
  expect(screen.getByText('( ._.)')).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'user avatar' })).toHaveAttribute(
    'src',
    '/_next/image?url=%2Fassets%2Fdefault-avatar.png&w=64&q=75'
  );
});
