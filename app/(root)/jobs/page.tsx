import React from "react";
// import { GeneralAdvert } from "@/components/category/general-ad";
import JobsOverview from "./_components/JobsOverview";
// import JobsSidebar from "./_components/sidebar";
// import SearchComponent from "@/components/Overview/SearchComponent";

const JobsPage = () => {
  return (
    <section className="w-full max-w-[100vw] bg-[#f5f5f5] overflow-x-hidden">
      <div className=" px-[1.5rem] lg:px-[1.5%] w-full py-[1rem] flex flex-col ">
        <section className="flex justify-center shadow-md bg-white rounded-[12px] my-6 w-full">
          {/* <JobsSidebar /> */}
          <div className="flex  h-auto  items-start max-w-[1556px] px-[4%] mx-auto   pb-4 justify-center place-items-center ">
            <JobsOverview />
          </div>
        </section>
      </div>
    </section>
  );
};

export default JobsPage;
