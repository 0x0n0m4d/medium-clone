import HeaderTitle from './HeaderTitle';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="bg-background fixed w-full z-10 px-20">
      <div className="flex justify-between max-w-[1192px] flex-grow">
        <HeaderTitle />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
