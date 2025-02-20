import Link from 'next/link';
import PicksContainer from './PicksContainer';

const StaffPicks = () => {
  const date = new Date();
  const date2 = new Date();
  const date3 = new Date();
  date.setDate(date.getDate() - 2);
  date3.setDate(date.getDate() - 3);
  date2.setDate(date.getDate() - 14);

  return (
    <div className="w-full flex flex-col gap-y-7 pt-7">
      <Link href="/@MediumStaff/list/staff-picks">
        <h2 className="text-start font-bold text-base">Staff Picks</h2>
      </Link>
      <div className="w-full flex flex-col gap-y-7">
        <PicksContainer
          avatar="/assets/default-avatar.png"
          user="User Unknow"
          title="Some Title of Current Article, Another Text To Extends"
          publishedDate={date}
        />
        <PicksContainer
          avatar="/assets/default-avatar.png"
          user="Another Unknow User"
          title="Another Title Just For Difference, Another Text To Extends"
          publishedDate={date2}
        />
        <PicksContainer
          avatar="/assets/default-avatar.png"
          user="Last Example User"
          title="Last Long Title For Tests, Extending Title"
          publishedDate={date3}
        />
      </div>
      <Link
        href="/@MediumStaff/list/staff-picks"
        className="text-start text-sm text-stone-500 hover:underline"
      >
        See the full list
      </Link>
    </div>
  );
};

export default StaffPicks;
