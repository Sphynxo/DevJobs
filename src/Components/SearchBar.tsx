import React, { useState } from "react";

interface SearchBarProps {
  isDark: boolean;
  setJobTitle: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  isFullTime: boolean;
  setIsFullTime: (fullTime: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  isDark,
  setJobTitle,
  setLocation,
  handleSearch,
  isFullTime,
  setIsFullTime,
}) => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="px-[2.4rem] w-full md:px-[4rem] xl:px-[16.5rem]">
      <div className="flex mt-[-4rem] w-full">
        <div className="relative flex-1 md:border-r-[1px]">
          <div className="absolute top-[50%] translate-y-[-50%] left-[2.4rem] flex items-center gap-[2.4rem]">
            <img
              src="/images/desktop/icon-search.svg"
              alt="search"
              className="hidden md:block"
            />
          </div>
          <input
            type="text"
            placeholder="Filter by title…"
            className={`w-full text-p py-[3.2rem] pl-[2.4rem] rounded-[6px] md:rounded-none md:rounded-l-[6px] outline-none ${
              isDark
                ? "bg-darkBlue text-white"
                : "bg-white text-darkBlue"
            } transition-colors duration-300 md:pl-[6.4rem]`}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <div className="absolute top-[2rem] right-[2.4rem] flex items-center gap-[2.4rem] md:hidden">
            <img
              src={
                isDark
                  ? "/images/mobile/icon-filter-white.svg"
                  : "/images/mobile/icon-filter.svg"
              }
              alt=""
              onClick={toggleSearch}
            />
            <img
              src="/images/mobile/search.svg"
              alt=""
              onClick={handleSearch}
            />
          </div>
        </div>

        <div
          className={`md:hidden ${
            openSearch ? "fixed" : "hidden"
          } w-full h-full bg-darkBlue opacity-[0.65] top-0 left-0 z-10`}
          onClick={toggleSearch}
        ></div>
        <div
          className={`md:w-[66.6%]  md:flex md:static z-20 absolute flex-col w-[35rem] md:flex-row ${
            openSearch ? "absolute" : "hidden"
          } `}
        >
          <div className="relative flex-1  md:flex md:border-r-[1px]">
            <div className="absolute top-[50%] translate-y-[-50%] left-[2.4rem] flex items-center gap-[2.4rem]">
              <img src="/images/desktop/icon-location.svg" alt="" />
            </div>
            <input
              type="text"
              placeholder="Filter by location..."
              className={`w-full text-p py-[3.2rem] pl-[6.4rem] outline-none ${
                isDark
                  ? "bg-darkBlue text-white"
                  : "bg-white text-darkBlue"
              } transition-colors duration-300 border-b-[1px] md:border-b-transparent rounded-t-[6px] md:rounded-none`}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="relative flex-1  md:flex">
            <div className="absolute top-[50%] translate-y-[-50%] left-[2.4rem] flex items-center gap-[2.4rem]"></div>
            <div
              className={`w-full text-p py-[1.6rem] pl-[2rem] pr-[1.6rem] outline-none ${
                isDark
                  ? "bg-darkBlue text-white"
                  : "bg-white text-darkBlue"
              } transition-colors duration-300 md:rounded-r-[6px] flex md:items-center justify-between flex-col items-start gap-[3rem] md:flex-row rounded-b-[6px] md:rounded-none`}
            >
              <div className="flex items-center gap-[1.6rem]">
                <input
                  type="checkbox"
                  className="w-[2.4rem] h-[2.4rem] outline-none border-transparent bg-grey"
                  checked={isFullTime}
                  onChange={(e) => setIsFullTime(e.target.checked)}
                  onClick={toggleSearch}
                />
                <p className="font-bold text-p">Full Time</p>
              </div>
              <button
                className="md:ml-[4.2rem] px-[1.4rem] py-[1.6rem] bg-violet text-p text-white font-bold rounded-[6px] w-full md:w-auto"
                onClick={() => {
                  handleSearch(), toggleSearch();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
