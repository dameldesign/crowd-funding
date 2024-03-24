
import AlsoViewedJobs from "@/components/jobs/AlsoViewedJobs";
import ExploreLinks from "@/components/jobs/ExploreLinks";
import JobsAboutSection from "@/components/jobs/JobsAboutSection";
import { popularProject } from "@/constants/home";

// import {
//   JOB_DETAILS,
// } from "@/constants/details";


import React from "react";

const CarDetails = () => {
  // const data = JOB_DETAILS;
// Assuming popularProject is an object that should have all the required properties
// Assuming popularProject is an array and you want to access the first element
const data = {
  ...popularProject[0], // Access the first element of the array
  totalAmount: popularProject[0].totalAmount || 0,
  // Add other properties as needed
 };
  return (
    <section className="bg-[#f5f5f5] py-8">
      <div className="shadow-md bg-white rounded-lg py-10  px-[4%]   w-[97%] mx-auto p-10">
        <JobsAboutSection {...data} />

        {/* <AlsoViewedJobs related={data.related} /> */}
        {/* <ExploreLinks /> */}
      </div>
    </section>
  );
};

export default CarDetails;
