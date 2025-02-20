import Nav from '../header/Nav';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const UserHomeFeed = () => {
  return (
    <section className="bg-white w-full h-full flex flex-col">
      <Nav />
      <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-[1336px] h-full flex flex-col lg:flex-row items-start justify-between px-36">
          <RightBar />
          <LeftBar />
        </div>
      </div>
    </section>
  );
};

export default UserHomeFeed;
