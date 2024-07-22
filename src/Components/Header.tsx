const Header: React.FC<{
  isDark: boolean;
  handleToggle: () => void;
}> = ({ isDark, handleToggle }) => {
  return (
    <div>
      <div className="bg-mobileHeader w-full h-[13.6rem] bg-no-repeat bg-cover px-[2.4rem] pt-[3.2rem] md:bg-tabletHeader md:rounded-es-[10rem] md:px-[4rem] xl:px-[16.5rem]">
        <div className="flex items-center justify-between">
          <img src="/images/desktop/logo.svg" alt="DevJobs Logo" />
          <div className="flex items-center gap-[1.6rem]">
            <img src="/images/desktop/icon-sun.svg" alt="" />
            <label className="relative inline-block w-[4.8rem] h-[2.4rem]">
              <input
                type="checkbox"
                className="opacity-0 w-0 h-0"
                checked={isDark}
                onChange={handleToggle}
              />
              <span
                className={`slider block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-white rounded-full transition-colors`}
              ></span>
              <span
                className={` dot absolute left-[5px] top-[5px] w-[1.4rem] h-[1.4rem] bg-violet rounded-full transition-transform ${
                  isDark ? "transform translate-x-9" : ""
                }`}
              ></span>
            </label>
            <img src="/images/desktop/icon-moon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
