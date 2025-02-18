import AuthorContainer from './AuthorContainer';

const AuthorsComponent = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center w-full py-20 sm:py-28 2xl:py-36 px-10">
      <h2 className="serif text-xl xs:text-2xl sm:text-[48px] 2xl:text-[70px] text-center font-bold max-w-[275px] xs:max-w-[354px] sm:max-w-[528px] 2xl:max-w-[766px] leading-[32px] xs:leading-[36px] sm:leading-[52px] 2xl:leading-[74px] mb-14 sm:mb-24">
        Join a growing number of verified book authors
      </h2>
      <div className="w-full 2xl:w-auto grid 2xl:grid-cols-3 sm:justify-center 2xl:gap-x-12">
        <AuthorContainer
          avatar="/assets/verified-authors/savala.jpg"
          name="Savala Nolan"
          article="Don't Let It Get You Down"
          className="border-b border-solid border-black"
        />
        <AuthorContainer
          avatar="/assets/verified-authors/balram.jpg"
          name="Balram Chavan"
          article="Object Oriented Programming with Angular"
          className="border-b border-solid border-black"
        />
        <AuthorContainer
          avatar="/assets/verified-authors/catherine.jpg"
          name="Catherine Sanderson"
          article="The Positive Shift"
          className="border-b border-solid border-black"
        />
        <AuthorContainer
          avatar="/assets/verified-authors/nir.jpg"
          name="Nir Eyal"
          article="Indistractable"
          className="border-b border-solid border-black"
        />
        <AuthorContainer
          avatar="/assets/verified-authors/marianne.jpg"
          name="Marianne Belloti"
          article="Kill It With Fire"
          className="border-b border-solid border-black"
        />
        <AuthorContainer
          avatar="/assets/verified-authors/sara.jpg"
          name="Sara Wachter-Boettcher"
          article="Technically Wrong"
          className="border-b border-solid border-black"
        />
        <AuthorContainer
          avatar="/assets/verified-authors/devon.jpg"
          name="Devon Price"
          article="Laziness Does Not Exist"
          className="2xl:max-w-[296px] border-b border-solid border-black 2xl:border-none"
        />
        <AuthorContainer
          avatar="/assets/verified-authors/brandeis.jpg"
          name="Brandeis Marshall"
          article="Data Conscience"
          className="border-b border-solid border-black 2xl:border-none"
        />
        <AuthorContainer
          avatar="/assets/verified-authors/bill.jpg"
          name="Bill Franks"
          article="Winning the Room"
        />
      </div>
    </section>
  );
};

export default AuthorsComponent;
