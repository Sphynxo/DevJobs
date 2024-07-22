import React, { useState } from "react";

interface JobListProps {
  jobs: Array<{
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: {
      content: string;
      items: string[];
    };
    role: {
      content: string;
      items: string[];
    };
  }>;
  isDark: boolean;
}

const JobList: React.FC<JobListProps> = ({ jobs, isDark }) => {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 10);
  };

  return (
    <div className="flex flex-col items-center mt-[5.6rem] pb-[6.2rem]">
      <div className="px-[2.4rem] flex flex-col gap-[4.8rem] md:flex-row flex-wrap md:px-[4rem] md:justify-between xl:px-[16.5rem]">
        {jobs.slice(0, visibleCount).map((job) => (
          <div
            className={`w-full px-[3.2rem] pb-[3.6rem] rounded-[6px] ${
              isDark ? "bg-darkBlue" : "bg-[white]"
            } transition-colors duration-300 md:w-[35rem] xl:w-[35rem]`}
            key={job.id}
          >
            <div
              className="w-[5rem] h-[5rem] flex items-center justify-center rounded-[15px] translate-y-[-50%]"
              style={{ backgroundColor: job.logoBackground }}
            >
              <img src={job.logo} alt={job.company} />
            </div>
            <div className="flex items-center gap-[1.2rem]">
              <p className="text-p text-darkGrey">{job.postedAt}</p>
              <div className="w-[0.4rem] h-[0.4rem] bg-darkGrey rounded-full"></div>
              <p className="text-p text-darkGrey">{job.contract}</p>
            </div>
            <h3
              className={`text-h3 font-bold mt-[1.6rem] ${
                isDark ? "text-white" : "text-darkBlue"
              } transition-colors duration-300`}
            >
              {job.position}
            </h3>
            <p className="text-p text-darkGrey mt-[1.6rem]">
              {job.company}
            </p>
            <h4 className="text-h4 font-bold text-violet mt-[4.4rem]">
              {job.location}
            </h4>
          </div>
        ))}
      </div>
      {visibleCount < jobs.length && (
        <button
          onClick={handleLoadMore}
          className="text-p py-[1.6rem] px-[3.2rem] bg-violet font-bold text-white mt-[3.2rem] rounded-[6px]"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default JobList;
