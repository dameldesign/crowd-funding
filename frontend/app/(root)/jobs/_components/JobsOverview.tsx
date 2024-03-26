"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Table,
  Equal,
  X,
} from "lucide-react";
import { GeneralSmallAdvert } from "@/components/category/general-small-ad";
import JobsSponsorComponent from "./SponsorComponent";
import ExploreMore from "@/components/category/explore-more";
import { popularProject } from "@/constants/home";
import LandscapeFundCard from "@/components/cards/LanscapeFundCard";
import GridFundCard from "@/components/cards/GridFundCard";

const JobsOverview = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const [isRotated, setIsRotated] = useState(false);
  const options = ["All", "dapp", "tool", "template"];

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  const [layout, setLayout] = useState<"card1" | "card2">("card1");

  // pagination

  const [activePage, setActivePage] = useState(0);
  const itemsCountPerPage = 6; // Set the number of items you want per page

  const handlePageChange = (data: any) => {
    console.log("Page changed to: " + data.selected);
    setActivePage(data.selected);
  };

  const handlePreviousPage = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };



  console.log("Rendering page: " + activePage);

  return (
    <section className="w-full  h-full flex flex-col pt-6  items-start mx-auto justify-start place-items-center gap-6">
      <div className=" border-b-2  border-gray-200/50 mb-6 border-0">
        <JobsSponsorComponent />
      </div>

      {/* filter section */}
      <div className="w-full flex  flex-row items-center justify-end gap-2 ">
        <div className=" w-full gap-3 max-w-fit flex flex-row items-center justify-between">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-3 py-1 border w-[121px] capitalize h-[40px] rounded-xl flex text-sm text-black font-medium items-center justify-between"
            >
              {selectedOption || "All"}
              <ChevronDown
                size={14}
                className={`ml-2  transition-transform duration-300 text-brand-black transform ${
                  isRotated ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="absolute z-20 top-full w-[151px] py-2.5 px-1  right-0 mt-2 bg-white items-center justify-center flex flex-col rounded-xl shadow-md">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`p-2  w-full text-base  cursor-pointer ${
                      selectedOption === option
                        ? "bg-primary-10/80 text-white capitalize"
                        : " hover:bg-primary-10 hover:text-white capitalize"
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* switch layout button */}
          <div className=" bg-gray-200/50 rounded-xl hidden lg:flex items-center  justify-center ">
            <button
              className={`p-2  text-black rounded-xl ${
                layout === "card1" ? "bg-primary-base text-white" : ""
              }`}
              onClick={() => setLayout("card1")}
            >
              <Table size={15} />
            </button>
            <button
              className={`p-2 text-black rounded-xl  ${
                layout === "card2" ? "bg-primary-base text-white" : ""
              }`}
              onClick={() => setLayout("card2")}
            >
              <Equal size={15} strokeWidth={5} />
            </button>
          </div>
        </div>
      </div>
      {/*  */}

      {/* single card starts here */}
      <div className="max-w-[1555px] w-auto mx-auto flex flex-col items-center justify-center">
        {layout === "card1" && (
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-10 mt-2 mx-auto w-full cursor-pointer">
            {popularProject
              .filter(
                (project) =>
                  selectedOption === "All" ||
                  project.category.some(
                    (category) => category === selectedOption
                  )
              )

              .flatMap((popular, index) => [
                <GridFundCard
                  key={`${index}-1`}
                  id={popular.id}
                  slug={`/jobs/${popular.slug}`}
                  projectName={popular.projectName}
                  scope={popular.scope}
                  logoURI={popular.logoURI}
                  timeline={popular.timeline}
                  minimumAmount={popular.minimumAmount}
                  totalAmount={popular.totalAmount}
                  status={popular.status}
                  category={popular.category} // Pass the entire category array
                />,
                <GridFundCard
                  key={`${index}-2`}
                  id={popular.id}
                  slug={`/jobs/${popular.slug}`}
                  projectName={popular.projectName}
                  scope={popular.scope}
                  logoURI={popular.logoURI}
                  timeline={popular.timeline}
                  minimumAmount={popular.minimumAmount}
                  totalAmount={popular.totalAmount}
                  status={popular.status}
                  category={popular.category} // Pass the entire category array
                />,
              ])}
          </div>
        )}

        {layout === "card2" && (
          <div className="max-w-[1300px] flex  gap-y-6 space-y-6 flex-wrap  cursor-pointer flex-row">
            {popularProject
              .filter(
                (project) =>
                  selectedOption === "All" ||
                  project.category.some(
                    (category) => category === selectedOption
                  )
              )

              .flatMap((popular, index) => [
                <LandscapeFundCard
                  key={index}
                  id={popular.id}
                  slug={`/jobs/${popular.slug}`}
                  textColor="#3B6E35"
                  background="#5FAD56"
                  width="wide"
                  scope={popular.scope}
                  projectDocumentation={popular.projectDocumentation}
                  projectName={popular.projectName}
                  status={popular.status}
                  projectSummary={popular.projectSummary}
                  timeline={popular.timeline}
                  minimumAmount={popular.minimumAmount}
                  totalAmount={popular.totalAmount}
                  logoURI={popular.logoURI}
                  methodology={popular.methodology}
                  category={popular.category}
                  marketFit={popular.marketFit}
                  // ... pass the rest of the props as needed
                />,
              ])}
          </div>
        )}
      </div>
      <div className=" border-t-2  border-gray-200/50 mt-10 border-0">
        <JobsSponsorComponent />
      </div>
      {/* pagination  */}
      <div className="w-full flex items-center gap-3 justify-center my-10">
        <ChevronLeft className="text-black/50" />
        <span className="bg-[#F08D38] rounded-[12px] items-center justify-center text-white py-2 px-3">
          1
        </span>
        <span className=" text-black py-2 px-3">2</span>
        <span className=" text-black py-2 px-3">3</span>
        <span className=" text-black py-2 px-3">4</span>
        <ChevronRight />
      </div>
      <ExploreMore />
    </section>
  );
};

export default JobsOverview;
