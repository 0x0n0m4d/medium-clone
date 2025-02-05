import { Metadata } from 'next';
import Home from '@/components/home/Home';

export const metadata: Metadata = {
  title: 'Medium: Read and write stories',
  description:
    'On Medium, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world.'
};

const Page = () => {
  return <Home />;
};

export default Page;
