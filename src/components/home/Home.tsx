'use client';

import { useCookies } from 'react-cookie';
import Header from '../header/Header';
import Footer from './Footer';
import Hero from './Hero';

const Home = () => {
  const [cookies] = useCookies(['access_token']);
  const jwt = cookies.access_token;
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
