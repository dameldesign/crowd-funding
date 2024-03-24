"use client";

import AlsoViewedJobs from "@/components/jobs/AlsoViewedJobs";
import ExploreLinks from "@/components/jobs/ExploreLinks";
import JobsAboutSection from "@/components/jobs/JobsAboutSection";
import TitleWrapper from "@/components/shared/TitleWrapper";
import { popularProject } from "@/constants/home";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
// import {FundImage } from "@/public/assets/images/notfound.png";


// import {
//   JOB_DETAILS,
// } from "@/constants/details";

import React from "react";

const CarDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  let slug = "";

  if (pathname) {
    slug = pathname.split("/").pop() || ""; // Ensure slug is a string even if pop() returns undefined
  } else {
    console.error("pathname is undefined");
    // Handle the case where pathname is undefined
  }

  // Find the job in popularProject based on the slug
  const job = popularProject.find((project) => project.slug === slug);

  // If the job is not found, you might want to handle this case, e.g., show a 404 page
  if (!job) {
    return (
      <div className="w-full my-auto h-[60vh] mx-auto flex flex-col items-center justify-center ">
              <div className="w-full relative border-white bg-transparent p-3 border-[12px] -translate-y-2 max-h-[750px] flex max-w-[500px] overflow-hidden rounded-xl">
        <Image
          width={612}
          height={208}
          className="min-w-full object-cover rounded-xl"
          quality={100}
          src="/assets/images/notfound.png"
          alt="hero_image"
        />
      </div>
        <TitleWrapper>
          <h1 className="text-primary-10">Project Not Found!!!</h1>
        </TitleWrapper>
        <button
          onClick={() => router.back()} // Add a back button
          className="mt-4 px-4 flex flex-row gap-2 py-2 bg-primary-base text-white rounded-[12px]"
        >
          <ArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  // Assuming job is an object that should have all the required properties
  const data = {
    ...job, // Use the job object directly
    totalAmount: job.totalAmount || 0,
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
