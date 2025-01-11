import HeaderTitle from './HeaderTitle';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="bg-[var(--background)] fixed w-full z-10">
      <div className="flex justify-between max-w-[1192px] flex-grow">
        <HeaderTitle />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
