"use client";
import { formatAndDivideNumber } from "@/lib/utils";
import { ICategoryDetails } from "@/types";
import { Category, Status } from "@/types";
import { CalendarDaysIcon, CheckCheck, Globe, Hourglass, NotebookPen, TimerReset } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTools } from "react-icons/bs";

// interface IJobDetails extends ICategoryDetails {
//   price: string;
//   datePosted: string;
//   profile: string;
//   applicants: number;
//   info: { projectName: string; employees: string };
// }

interface FundProps {
  projectName: string;
  projectSummary?: string;
  minimumAmount?: number;
  totalAmount: number;
  methodology?: string;
  appendices?: string[];
  expectedDeliverables?: string[];
  milestones?: string[];
  timeline?: string;
  team?: string[];
  slug: string;
  projectDocumentation?: string;
  securityMeasures?: string;
  fairness?: string;
  technicalChallenges?: string[];
  solution?: string;
  community?: string;
  scope?: string;
  logoURI: string;
  marketFit?: string;
  tokenomics?: string;
  id: number;
  category?: Category[]; // Added category property
  status?: Status; // Added status property
  // ... other existing props
}

const JobsAboutSection: React.FC<FundProps> = ({
  projectName,
  projectSummary,
  minimumAmount,
  totalAmount,
  expectedDeliverables,
  methodology,
  appendices,
  milestones,
  timeline,
  slug,
  projectDocumentation,
  team,
  securityMeasures,
  fairness,
  technicalChallenges,
  solution,
  community,
  scope,
  logoURI,
  marketFit,
  tokenomics,
  id,
  category,
  status,
}: FundProps) => {
  const validLogoURI = logoURI || "/public/Fund.io-001.png"; // Replace with a default image path

  return (
    <div className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="relative  ">
        <div className="flex items-center justify-center mb-8">
          <Image
            src={validLogoURI}
            alt="Logo"
            width={560}
            height={592}
            className="rounded-xl flex bg-white"
          />
        </div>

        <div className="p-6 border border-grey-200 flex flex-col gap-3 rounded-xl">
          <div className="flex flex-row items-start justify-start gap-2">
          <h2 className="text-primary-base font-semibold mb-4 text-2xl">
            {projectName}
          </h2>
          <p className="text-primary-base font-semibold  mb-1">{status &&
                (status === "active" ? (
                  <div className=" w-3 rounded-full h-3 bg-[#3AC047]">
                  </div>
                ) : (
                  <p className=" w-3 rounded-full h-3 bg-primary-10">
                  </p>
                ))}</p>
          </div>
          <div className="flex flex-col items-start  justify-start">
            <h1 className="text-primary-base font-medium text-xl">
              Project Summary
            </h1>

            <h1 className="text-lg">{projectSummary}</h1>
          </div>
          <div className="flex flex-col items-start  justify-start">
            <h1 className="text-primary-base font-medium text-xl">
              Market Fit
            </h1>

            <h1 className="text-lg">{marketFit}</h1>
          </div>
          <div className="flex flex-col items-start  justify-start">
            <h1 className="text-primary-base font-medium text-xl">
              Security Measures
            </h1>

            <h1 className="text-lg">{securityMeasures}</h1>
          </div>
          <div className="flex flex-col items-start font-medium justify-start">
            <h1 className="text-primary-base text-xl">Expected Deliverables</h1>
            <ul className="flex text-sm flex-row gap-2 mb-4">
              {expectedDeliverables?.map((list: string, i: number) => (
                <h1 key={i}>{list},</h1>
              ))}
            </ul>
          </div>
          <div className="flex flex-row items-center">
                {minimumAmount && (
                  <h1 className="font-bold flex flex-row items-center justify-center text-[28px] text-[#0A1429]">
                    <span className=" text-[30px]">$</span>
                    {formatAndDivideNumber(Number(minimumAmount))}
                    <hr className="mx-[4.5px] text-[28px] h-[2.5px] border-none  w-[10px] bg-black" />
                  </h1>
                )}

                {totalAmount && (
                  <h1 className="font-bold flex flex-row items-center justify-center text-[28px] text-[#0A1429]">
                  <span className=" text-[30px]">$</span>
                    {formatAndDivideNumber(Number(totalAmount))}
                  </h1>
                )}
              </div>
          <button className=" bg-primary-base text-white hover:bg-primary-base/90 hover:border font-bold py-3 rounded-xl w-full">
            Click to Invest
          </button>
        </div>
      </div>

      {/*  */}
      <div>
        <div className="flex justify-between items-start">
          <h2 className="flex gap-2 items-center text-primary-base font-bold mb-4 text-3xl">
            {projectName}
            <p className="text-primary-base font-semibold  mb-1">{status &&
                (status === "active" ? (
                  <div className=" p-2 rounded-full  bg-[#3AC047]">
                     <Hourglass size={16} color="#ffffff" />
                  </div>
                ) : (
                  <p className=" p-2 rounded-full  bg-primary-10">
                     <CheckCheck size={16} color="#ffffff" />
                  </p>
                ))}</p>
          </h2>
          <div className="flex gap-2">
            <button>
              <Image
                src="/assets/images/bookmark.png"
                alt="Bookmark Icon"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <p className="flex items-center gap-1 text-grey-100 mb-2">
          <CalendarDaysIcon />
          {`${timeline} Project Duration `}
        </p>
        
        <div className="flex w-fit justify-between gap-3 items-center">
          <h1 className="text-primary-base font-medium text-xl">Methodology</h1>

          <div className="flex w-auto flex-row gap-2 items-center">
            {methodology && (
              <div className="flex flex-row gap-1 items-center justify-center">
                <span className="p-[2px] bg-black rounded-full"></span>
                <BsTools className="w-[16px] h-[16px] text-black" />
                <h1
                  className="text-16 font-normal text-black"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                >
                  {methodology}
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="text-primary-base border-light-300">
        <h1 className="text-primary-base font-medium text-xl">Team</h1>

          <ul className="flex flex-col text-black gap-2 mb-4">
            {team?.map((list: string, i: number) => (
              <li key={i}>{list},</li>
            ))}
          </ul>
        </div>

        <div>
          {projectDocumentation && (
            <div className="flex flex-row gap-1 border-b pb-3 items-center justify-center">
              <NotebookPen className="w-[16px] h-[16px] text-primary-300" />
              <h1
                className="text-16 font-normal text-primary-300"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                {projectDocumentation}
              </h1>
            </div>
          )}
        </div>
        <div className="flex  py-3  flex-row flex-wrap gap-2 w-[50%]">
          {category?.map((tag, index) => (
            <div key={index} className="">
              <button className="flex py-1 px-[12px] items-center text-black border-black text-sm justify-center border rounded-[16px]">
                {tag}
              </button>
            </div>
          ))}
        </div>
        <div className="flex w-fit mb-8 justify-between gap-3 items-center">
          <h1 className="text-primary-base font-medium text-xl">Fairness</h1>

          {fairness && (
            <div className="flex flex-row gap-2 items-center justify-center">
              <span className="p-[2px] bg-black rounded-full"></span>

              <h1
                className="text-sm font-normal text-black"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                {fairness}
              </h1>
            </div>
          )}
        </div>

      
        <div className="text-primary-base pt-4 border-t border-gray-200">
          <h2 className="text-2xl font-semibold ">More About the Project</h2>
          <div className="flex flex-row gap-3 mt-3 items-start justify-start">
            <>
            <Image
              src={validLogoURI}
              alt="Logo"
              width={80}
              height={80}
              className="rounded-xl h-[80px] w-[120px] border-y"
            />
            
            </>
            <div className="">
              <p className="text-primary-base font-semibold  mb-1">{status &&
                (status === "active" ? (
                  <div className=" w-3 rounded-full h-3 bg-[#3AC047]">
                  </div>
                ) : (
                  <p className=" w-3 rounded-full h-3 bg-primary-10">
                  </p>
                ))}</p>
              <p className="flex gap-1 text-grey-100  items-center">
            
           
              </p>

            </div>
          </div>
          <div className="flex flex-col my-3 items-start  justify-start">
            <h1 className="text-primary-base font-medium text-xl">
              Project Solution
            </h1>

            <h1 className="text-lg text-black">{solution}</h1>
          </div>
          <div className="text-primary-base border-light-300">
        <h1 className="text-primary-base font-medium text-xl">Technical Challenges</h1>

          <ul className="flex flex-row text-black gap-2 mb-4">
            {technicalChallenges?.map((list: string, i: number) => (
              <li key={i}>{list},</li>
            ))}
          </ul>
        </div>
          <div className="text-primary-base border-light-300">
        <h1 className="text-primary-base font-medium text-xl">Appendices</h1>

          <ul className="flex flex-col text-black gap-2 mb-4">
            {appendices?.map((list: string, i: number) => (
              <li key={i}>{list},</li>
            ))}
          </ul>
        </div>
          <div className="text-primary-base border-light-300">
        <h1 className="text-primary-base font-medium text-xl">Milestone</h1>

          <ul className="flex flex-col text-black gap-2 mb-4">
            {milestones?.map((list: string, i: number) => (
              <li key={i}>{list},</li>
            ))}
          </ul>
        </div>
          <button className="py-3 px-4 border border-light-200 rounded-xl ">
            Read more
          </button>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default JobsAboutSection;

// const Contact = ({
//   address,
//   phone,
//   url,
//   rating,
//   review,
//   profile,
// }: {
//   address: string;
//   phone: string;
//   url: string;
//   rating: number;
//   review: number;
//   profile: string;
// }) => {
//   return (
//     <section className="py-4 border-y border-light-300 mt-4">
//       <h2 className="text-2xl font-semibold mb-4">
//         Contact Information
//       </h2>
//       <div className="flex gap-2 items-center mb-3">
//         <Image
//           src="/assets/images/company.png"
//           alt="location"
//           width={24}
//           height={24}
//         />
//         <p className="">{profile}</p>
//       </div>

//       <div className="flex gap-3 ">
//         <div className="flex gap-2 items-center">
//           <Image
//             src="/assets/images/location.png"
//             alt="location"
//             width={24}
//             height={24}
//           />
//           <p>{address}</p>
//         </div>
//         <div className="h-5 w-[1px] bg-[#D3D2D3]"></div>
//         <div className="flex items-center">
//           <button className="text-links mr-1">Get directions</button>
//           <Image
//             src="/assets/images/direction.png"
//             alt="direction"
//             width={16}
//             height={16}
//           />
//         </div>
//       </div>
//       <div className="flex gap-2 my-3 items-center">
//         <Image
//           src="/assets/images/phone.png"
//           alt="location"
//           width={24}
//           height={24}
//         />
//         <p>{phone}</p>
//       </div>
//       <div className="flex gap-2 my-3 items-center">
//         <Image
//           src="/assets/images/web.png"
//           alt="location"
//           width={24}
//           height={24}
//         />
//         <Link href={url} className="text-links" target="_blank">
//           {url}
//         </Link>
//       </div>
//     </section>
//   );
// };
