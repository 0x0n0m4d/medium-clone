import { render, screen } from '@testing-library/react';
import TrendingPost from '../components/TrendingPost';
import '@testing-library/jest-dom';

it('should render a trending post', () => {
  render(
    <TrendingPost
      post={{
        title: 'title name',
        author: 'chico moedas',
        date: new Date('2010-10-10'),
        id: '1234'
      }}
    />
  );

  expect(screen.getByText('title name')).toBeInTheDocument();
  expect(screen.getByText('chico moedas')).toBeInTheDocument();
});
