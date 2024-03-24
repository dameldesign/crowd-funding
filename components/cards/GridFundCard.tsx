
import Image from "next/image";
import { FC } from "react";
import { Clock3 } from "lucide-react";
import { formatAndDivideNumber,} from "@/lib/utils";
import Link from "next/link";
import { Category, Status } from "@/types";


interface GridFundCardProps {
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


   const GridFundCard: FC<GridFundCardProps> = ({
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
    // ... other existing props
   }) => {
    return (
        <Link href={slug} key={id}>
        <div className="rounded-[12px] border border-gray-200/50  flex pb-6 flex-col shadow gap-2 w-[280px] hover:scale-105 duration-500 transform">
          <div className="w-[280px] relative flex items-center justify-center h-[218px] bg-white  rounded-[12px]">
            <Image
              src={logoURI}
              alt={projectName}
              width={328}
              height={218}
              className="rounded-[12px] max-h-[218px] object-cover w-full"
            />
            {/* favorite  & revers*/}
            <div>
              <div className="absolute top-2 bg-white p-1 rounded-[8px] hover:bg-gray-100  right-2  z-10">
                {" "}
                <Image
                  alt="logo"
                  src="/assets/icons/add-icon.svg"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto justify-between  items-start px-2  rounded-b-[12px] ">
            <div className="flex w-full justify-between items-center flex-row">
              <div className="flex w-[75%] justify-start gap-2">
                <h1
                  className="text-[20.16px] font-medium "
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "75%",
                    width: "75%",
                  }}
                >
                  {projectName}
                </h1>
              </div>
  
              {(status) &&
   (status === "active" ? (
      <div className="text-left text-16 text-white bg-[#3AC047] py-1 px-2 rounded-[8px] font-normal">
        Active
      </div>
   ) : (
      <p className="text-left text-16 text-white bg-primary-10 py-1 px-2 rounded-[8px] font-normal">
        Closed
      </p>
    ))}

            </div>
  

  
            <div className="flex flex-row w-full items-center justify-start gap-2">
              <p className="text-left  text-16 text-[#6C727F] font-normal  leading-6 ">
                {scope}
              </p>
              {timeline && (
                <div className="flex flex-row gap-1 items-center justify-center">
                  <span className="p-[2px] bg-[#6C727F] rounded-full"></span>
                  < Clock3
                    className="h-[16px] w-[16px]"
                  />
                  <h1
                    className="text-16 font-normal text-[#6C727F] "
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                      width: "100%",
                    }}
                  >
                    {timeline}
                  </h1>
                </div>
              )}
  
            </div>
  <div className="flex flex-row items-center">

            {minimumAmount && (
              <h1 className="font-bold flex flex-row items-center justify-center text-[20px] text-[#0A1429]">
                <span className=" text-[22px]">$</span>
                {formatAndDivideNumber(Number(minimumAmount))}
                <hr className="mx-[4.5px] text-[22px] h-[2.5px] border-none  w-[10px] bg-black"/>

              </h1>
            )}
           
            {totalAmount && (
              <h1 className="font-bold text-[20px] text-[#0A1429]">
                <span className=" text-[22px]">$</span>
                {formatAndDivideNumber(Number(totalAmount))}
              </h1>
            )}
  </div>
  
  

          </div>
        </div>
      </Link>
    );
};

export default GridFundCard;