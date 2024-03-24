"use client";
import { cn } from "@/lib/utils";
import { ICategoryDetails } from "@/types";
import { Category, Status } from "@/types";
import { TimerReset } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    status?: Status;     // Added status property
    // ... other existing props
   }

   const JobsAboutSection: React.FC<FundProps> = ({
    projectName,
    projectSummary,
    minimumAmount,
    totalAmount,
    methodology,
    appendices,
    expectedDeliverables,
    milestones,
    timeline,
    team,
    slug,
    projectDocumentation,
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

  const validLogoURI = logoURI || '/public/Fund.io-001.png'; // Replace with a default image path
  const status = 'active'; // or 'closed'

const statusClass = cn({
 'bg-green-500': status === 'active',
 'bg-red-500': status === 'closed',
});

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

        <form action="" className="p-6 border border-light-200 rounded-xl">
      <h2 className="text-primary-300 font-semibold mb-4 text-2xl">
      {projectName}
      </h2>
      <div className="flex gap-3">
        <input
          type="text"
          className="py-2 px-4 border border-light-200 rounded-lg placeholder:text-grey-100"
          placeholder="Full Name"
        />
        <input
          type="email"
          className="py-2 px-4 border border-light-200 rounded-lg placeholder:text-grey-100"
          placeholder="Email"
        />
      </div>
      <textarea
        name=""
        id=""
        rows={3}
        className="py-2 px-4 border border-light-200 rounded-lg placeholder:text-primary-300 my-4 w-full"
        placeholder="Hello. I’d like to know if Audi RS7 you have listed on Connect Nigeria for 15,000,000 ₦ is still available."
      ></textarea>
      <button className=" bg-primary-base text-white hover:bg-primary-base/90 hover:border font-bold py-3 rounded-xl w-full">
      Click to Invest
      </button>
    </form>

      </div>

      {/*  */}
      <div>
        <div className="flex justify-between items-start">
          <h2 className="flex gap-2 items-center text-primary-300 font-bold mb-4 text-3xl">
            {projectName}
             <div className={statusClass}>
    {/* Your content here */}
 </div>
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
          <TimerReset
          />
          {`${timeline} applicants on this position`}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-primary-300 font-bold text-2xl flex items-center">
            {solution}
            <Image
              src="/assets/images/naira-black.png"
              alt="Naira Icon"
              width={24}
              height={24}
            />
            <span className="ml-1 text-grey-100 font-normal text-base ">
              monthly
            </span>
          </p>
          <p className="text-grey-100">{`Posted on ${timeline}`}</p>
        </div>
        {/* <Contact
          address={contact.address}
          phone={contact.phone}
          url={contact.url}
          rating={rating}
          review={review}
          profile={profile}
        /> */}
        <div className="text-primary-300 py-4 border-b border-light-300">
          <h2 className="text-2xl font-semibold ">About the Role</h2>
          <ul className="flex flex-col gap-2 mb-4">
            { milestones?.map((list: string, i: number) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
          <button className="py-3 px-4 border border-light-200 rounded-xl ">
            Read more
          </button>
        </div>
        <div className="text-primary-300 pt-4">
          <h2 className="text-2xl font-semibold ">About the Role</h2>
          <div className="flex my-2">
            <Image
                     src={validLogoURI}
              alt="Logo"
              width={80}
              height={80}
              className="rounded-xl"
            />
            <div>
              <p className="text-primary-300 font-semibold mb-1">{status}</p>
              <p className="flex gap-1 text-grey-100 items-center">
                <span>Hospitality</span>
                <span className="h-[5px] w-[5px] rounded-full bg-grey-100"></span>
                <span>{methodology}</span>
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-2 mb-4">
          {appendices?.map((list: string, i: number) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
          <button className="py-3 px-4 border border-light-200 rounded-xl ">
            Read more
          </button>
        </div>
      </div>
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
//       <h2 className="text-primary-300 text-2xl font-semibold mb-4">
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

