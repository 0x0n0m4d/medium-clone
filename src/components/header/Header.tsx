import HeaderTitle from './HeaderTitle';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between max-w-[1192px] flex-grow">
        <HeaderTitle />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
