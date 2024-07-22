import { useState } from "react";
import Header from "./Components/Header";
import JobList from "./Components/JobList";
import jobs from "./Data/data.json";
import SearchBar from "./Components/SearchBar";


function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [jobTitle, setJobTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [isFullTime, setIsFullTime] = useState<boolean>(false);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const filterJobs = (
    title: string,
    loc: string,
    fullTime: boolean
  ) => {
    let filtered = jobs;

    if (title !== "") {
      filtered = filtered.filter((job) =>
        job.position.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (loc !== "") {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(loc.toLowerCase())
      );
    }

    if (fullTime) {
      filtered = filtered.filter(
        (job) => job.contract.toLowerCase() === "full time"
      );
    }

    setFilteredJobs(filtered);
  };

  const handleSearch = () => {
    filterJobs(jobTitle, location, isFullTime);
  };

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  const handleFullTimeChange = (fullTime: boolean) => {
    setIsFullTime(fullTime);
    filterJobs(jobTitle, location, fullTime);
  };

  return (
    <div className={`${isDark ? "dark-mode" : ""} min-h-screen`}>
      <Header isDark={isDark} handleToggle={handleToggle} />

      <SearchBar
        isDark={isDark}
        setJobTitle={setJobTitle}
        setLocation={setLocation}
        handleSearch={handleSearch}
        isFullTime={isFullTime}
        setIsFullTime={handleFullTimeChange}
      />

      {filteredJobs.length > 0 ? (
        <JobList jobs={filteredJobs} isDark={isDark} />
      ) : (
        <div className="flex flex-col items-center gap-[2rem] mt-[10rem]">
          <p className="text-h1">☹️</p>
          <p className="text-h1 font-bold text-grey">No Result</p>
        </div>
      )}
    </div>
  );
}

export default App;
