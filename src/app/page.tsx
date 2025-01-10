import { Metadata } from 'next';
import Hero from '../components/home/Hero';
import HomeFeed from '../components/home/HomeFeed';

export const metadata: Metadata = {
  title: 'Medium: Read and write stories',
  description:
    'On Medium, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world.'
};

const Home = () => {
  return (
    <main>
      <Hero />
      <HomeFeed />
    </main>
  );
};

export default Home;
