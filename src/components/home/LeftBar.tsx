import Link from 'next/link';
import ReadingList from './cards/readinglist/ReadingList';
import StaffPicks from './cards/staffpicks/StaffPicks';
import WhoToFollow from './cards/whotofollow/WhoToFollow';
import WritingStick from './cards/writestick/WritingStick';

const LeftBar = () => {
  return (
    <div className="hidden lg:block w-full max-w-[339px] h-full border-l border-solid border-gray-100 px-10 py-10">
      <StaffPicks />
      <WritingStick />
      <WhoToFollow />
      <ReadingList />
      <footer className="w-full">
        <div className="flex gap-x-2 gap-y-2 text-stone-500 text-[11px]">
          <Link href="/">Help</Link>
          <Link href="/">Status</Link>
          <Link href="/">About</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Press</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
        </div>
        <div className="flex gap-x-2 gap-y-2 text-stone-500 text-[11px]">
          <Link href="/">Text to speech</Link>
          <Link href="/">Teams</Link>
        </div>
      </footer>
    </div>
  );
};

export default LeftBar;
