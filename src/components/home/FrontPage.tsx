import Header from '../header/Header';
import Footer from './Footer';
import Hero from './Hero';

const FrontPage = () => {
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

export default FrontPage;
