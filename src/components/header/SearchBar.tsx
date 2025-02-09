const SearchBar = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center rounded-full py-3 px-6 min-w-[216px] gap-x-4">
      <div className="text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        placeholder="Search"
        className="bg-transparent outline-none text-start placeholder:text-gray-400/80 min-w-[192px] w-full"
      />
    </div>
  );
};

export default SearchBar;
