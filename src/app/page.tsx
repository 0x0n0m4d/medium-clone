import { Metadata } from 'next';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import Hero from '@/components/home/Hero';

export const metadata: Metadata = {
  title: 'Medium: Read and write stories',
  description:
    'On Medium, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world.'
};

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center px-16 sm:px-20">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Home;
