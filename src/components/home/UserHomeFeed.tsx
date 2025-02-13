import Nav from '../header/Nav';

const UserHomeFeed = () => {
  return (
    <div>
      <Nav />
      <div className="bg-white h-screen w-screen flex flex-col items-center justify-center">
        Some content
      </div>
      <div className="bg-white h-screen w-screen flex flex-col items-center justify-center">
        Another content
      </div>
    </div>
  );
};

export default UserHomeFeed;
