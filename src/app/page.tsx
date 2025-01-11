import { Metadata } from 'next';
import Hero from '../components/home/Hero';

export const metadata: Metadata = {
  title: 'Medium: Read and write stories',
  description:
    'On Medium, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world.'
};

const Home = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default Home;
