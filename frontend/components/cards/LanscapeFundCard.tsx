import Image from "next/image";
import { FC } from "react";
import { Clock3, Globe, MapPin, NotebookPenIcon, Phone } from "lucide-react";
import { formatAndDivideNumber } from "@/lib/utils";
import Link from "next/link";
import { Category, Status } from "@/types";
import { BsSuitcaseLg, BsTools } from "react-icons/bs";

interface LandscapeFundCardProps {
  projectName: string;
  projectSummary?: string;
  minimumAmount?: number;
  background?: string;
  textColor?: string;
  width?: "normal" | "wide";
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

const LandscapeFundCard: FC<LandscapeFundCardProps> = ({
  projectName,
  projectSummary,
  minimumAmount,
  totalAmount,
  methodology,
  background,
  textColor,
  width,
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
}) => {
  return (
    <Link href={slug} key={id} className="w-full max-w-[1,032px] ">
      <div className="relative w-full h-[240px] rounded-t-[12px] flex flex-row items-start justify-between ">
        {/* main card */}
        <div className="flex w-full flex-row gap-6">
          <div className="lg:w-[400px] h-[200px] rounded-[12px]">
            <Image
              src={logoURI}
              alt={projectName}
              width={400}
              height={200}
              className="rounded-[12px] object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col  justify-start  items-start w-full h-fit">
            <div className="flex w-auto  max-w-full justify-start flex-row  gap-2">
              <h1
                className="text-[20.16px] font-medium "
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                {projectName}
              </h1>

              {status &&
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
                    <Clock3 className="h-[16px] w-[16px]" />
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


<div className="flex flex-col gap-2 ">
<div className="flex w-full mt-2 flex-row gap-1 items-center justify-center">
                <NotebookPenIcon className="w-[16px] h-[16px]  text-[#6C727F]" />
                <h1
                  className="text-16 w-full font-normal text-[#6C727F]"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                >
                  {projectSummary}
                </h1>
              </div>
              {/* number and web */}
              
              <div className="flex w-auto flex-row gap-2 items-center">
              <div className="flex w-auto flex-row gap-2 items-center">
                {methodology && (
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <BsTools className="w-[16px] h-[16px] text-[#6C727F]" />
                    <h1
                      className="text-16 font-normal text-[#6C727F]"
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

{methodology && marketFit && (
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <span className="p-[2px] bg-[#6C727F] rounded-full"></span>
                    <BsSuitcaseLg
                      className="h-[16px] w-[16px]"
                    />
                    <h1 className="text-16 font-normal text-[#6C727F]">
                      {marketFit}
                    </h1>
                  </div>
                )}
</div>

<div>
{methodology && projectDocumentation && (
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <Globe className="w-[16px] h-[16px] text-[#6C727F]" />
                    <h1
                      className="text-16 font-normal text-[#6C727F]"
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
              {/* real estate end here */}
              <div className="flex   flex-row flex-wrap gap-2 w-[50%]">
                {category?.map((tag, index) => (
                  <div key={index} className="">
                    <button className="flex py-1 px-[12px] items-center text-[#F08D38] border-[#F08D38] text-sm justify-center border rounded-[16px]">
                      {tag}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex flex-row items-center">
                {minimumAmount && (
                  <h1 className="font-bold flex flex-row items-center justify-center text-[24px] text-[#0A1429]">
                    <span className=" text-[28px]">$</span>
                    {formatAndDivideNumber(Number(minimumAmount))}
                    <hr className="mx-[4.5px] text-[28px] h-[2.5px] border-none  w-[10px] bg-black" />
                  </h1>
                )}

                {totalAmount && (
                  <h1 className="font-bold flex flex-row items-center justify-center text-[24px] text-[#0A1429]">
                  <span className=" text-[28px]">$</span>
                    {formatAndDivideNumber(Number(totalAmount))}
                  </h1>
                )}
              </div>

</div>
    

                </div>

        </div>
        <div className="h-[32px] w-[32px]">
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
    </Link>
  );
};

export default LandscapeFundCard;
