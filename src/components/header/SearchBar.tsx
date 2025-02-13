import { SearchIcon } from '@/atoms/icons';

const SearchBar = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center rounded-full py-3 px-6 min-w-[216px] gap-x-4">
      <div className="text-gray-400">
        <SearchIcon />
      </div>
      <input
        placeholder="Search"
        className="bg-transparent outline-none text-start placeholder:text-gray-400/80 min-w-[192px] w-full"
      />
    </div>
  );
};

export default SearchBar;
