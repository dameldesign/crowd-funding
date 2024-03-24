import Image from "next/image";
import { FC } from "react";
import { Clock3, MapPin } from "lucide-react";
import { formatAndDivideNumber, formatDateRange } from "@/lib/utils";
// import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import { BsTools } from "react-icons/bs";
interface SponsorConnectCardProps {
  title: string;
  slug: string;
  body?: string;
  bodyestate?: string;
  imageUrl: string;
  background?: string;
  textColor?: string;
  width?: "normal" | "wide";
  location?: string;
  locationestate?: string;
  rate?: number;
  rateNumber?: number;
  open?: string;
  close?: string;
  today?: string;
  company?: string;
  openTime?: string;
  serviceFees?: string;
  jobsFees?: number | undefined | string;
  eventFees?: number | undefined;
  estateslashedFees?: number | undefined | string;
  estateFees?: number | string | undefined;
  estatesNewFees?: number | undefined | string;
  time?: [string?, string?];
  // realestate
  rooms?: number;
  bathroom?: number;
  sqft?: number;
  showReverseIcon?: boolean;
}

const SponsorConnectCard: FC<SponsorConnectCardProps> = ({
  title,
  slug,
  body,
  bodyestate,
  imageUrl,
  location,
  locationestate,
  // rate,
  // rateNumber,
  time,
  open,
  close,
  today,
  // openTime,
  company,
  serviceFees,
  estateFees,
  jobsFees,
  estateslashedFees,
  estatesNewFees,
  rooms,
  bathroom,
  sqft,
  showReverseIcon,
  eventFees,
}) => {
  return (
    <Link href={slug}>
      <div className="rounded-t-[12px] flex gap-1 flex-col">
        <div className="w-[240px] relative rounded-[12px]">
          <Image
            src={imageUrl}
            alt={title}
            width={240}
            height={175}
            className="rounded-[12px] h-[175px] object-cover w-full"
          />
        </div>
        <div className="flex flex-col my-0 h-auto  justify-evenly py-0 items-start w-[240px]">
          <div className="flex w-full justify-between items-center flex-row">
            <div className="flex w-full justify-start gap-2">
              <h1
                className="text-[16.16px] text-black/65 font-medium "
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                {title}
              </h1>
            </div>

            {(open || close) &&
              (open ? (
                <div className=" text-left text-16 text-white bg-[#3AC047] py-1 px-2 rounded-[8px] font-normal">
                  {" "}
                  {open}
                </div>
              ) : (
                <p className="text-left text-16 text-white bg-[#C8623C] py-1 px-2 rounded-[8px] font-normal">
                  {close}
                </p>
              ))}
            <p
              className={`text-left text-16 text-white rounded-[8px] font-normal ${
                today ? "bg-[#3AC047] py-1 px-2 " : ""
              }`}
            >
              {today}
            </p>
          </div>

          <div className="flex flex-row w-full items-center justify-start gap-2">
            {/* room amount sqft  */}
            <div className="flex flex-row gap-2 justify-start items-center">
              {rooms && (
                <p className="text-left  text-[12px] text-[#6C727F] font-bold  leading-6 ">
                  {rooms}
                  <span className="ml-1 font-normal">rooms</span>
                </p>
              )}
              {bathroom && (
                <div className="flex w-full flex-row gap-1 items-center justify-center">
                  <span className=" p-[2px]  bg-[#6C727F]  rounded-full"></span>
                  <h1
                    className="text-[12px] w-full font-bold text-[#6C727F]"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                      width: "100%",
                    }}
                  >
                    {bathroom}{" "}
                    <span className="ml-1 font-normal">bathroom</span>
                  </h1>
                </div>
              )}
              {sqft && (
                <div className="flex w-full flex-row gap-1 items-center justify-center">
                  <span className=" p-[2px]  bg-[#6C727F]  rounded-full"></span>
                  <h1
                    className="text-[12px] w-full font-bold text-[#6C727F]"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                      width: "100%",
                    }}
                  >
                    {sqft} <span className="ml-1 font-normal">sqft</span>
                  </h1>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-start items center">
            <p className="text-left  text-[12px] text-[#6C727F] font-normal  leading-6 ">
              {bodyestate}
            </p>
            {locationestate && (
              <div className="flex w-full flex-row gap-1 items-center justify-center">
                <span className=" p-[2px]  bg-[#6C727F]  rounded-full"></span>
                <MapPin className="w-[12px] h-[12px] text-[#6C727F]" />
                <h1
                  className="text-[12px] w-full font-normal text-[#6C727F]"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                >
                  {locationestate}
                </h1>
              </div>
            )}
          </div>
          <div className="flex flex-row w-full items-center justify-start gap-2">
            <p className="text-left text-[11.67px] text-[#6C727F] font-normal  leading-6 ">
              {body}
            </p>
            {company && (
              <div className="flex flex-row gap-1 items-center justify-center">
                <span className="p-[2px] bg-[#6C727F] rounded-full"></span>
<BsTools />
                <h1
                  className="text-[12px] font-normal text-[#6C727F] "
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                >
                  {company}
                </h1>
              </div>
            )}
            {/* {rateNumber && (
              <>
                <span className="p-[2px] bg-[#6C727F] rounded-full"></span>
                <Rating
                  readonly
                  initialValue={rateNumber}
                  size={14}
                  SVGstyle={{ display: "inline" }}
                  fillColor="#F08D38"
                />
              </>
            )}
            {rate && (
              <p className="text-left text-[12px] text-[#6C727F] font-normal leading-6 ">
                ({rate})
              </p>
            )} */}
            {time && (
              <div className="flex flex-row gap-1  items-center justify-center">
                <span className=" p-[2px]  bg-[#6C727F]  rounded-full"></span>

                <Clock3 className="w-[10px] h-[10px]  text-[#6C727F]" />
                <p className="text-left text-[11px] text-[#6C727F] font-normal leading-6 ">
                  {formatDateRange(time)}
                </p>
              </div>
            )}
          </div>

          {location && (
            <div className="flex w-full flex-row gap-1 items-center justify-center">
              <MapPin className="w-[10px] h-[10px] text-[#6C727F]" />
              <h1
                className="text-[11px] w-full font-normal text-[#6C727F]"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                {location}
              </h1>
            </div>
          )}
          {serviceFees && (
            <h1 className="font-bold text-[16px] text-[#0A1429]">
              {serviceFees}
              <span className="ml-[2.5px]">₦</span>
            </h1>
          )}
          {estateFees && (
            <h1 className="font-bold text-[16px] text-[#0A1429]">
              {formatAndDivideNumber(Number(estateFees))}
              <span className="ml-[2.5px]">₦</span>
            </h1>
          )}

          {estateslashedFees && (
            <div className="flex flex-row gap-2 items-center justify-center">
              <h1 className="font-bold text-[16px] text-[#3AC047]">
                {formatAndDivideNumber(Number(estatesNewFees) || 0)}
                <span className="ml-[2.5px]">₦</span>
              </h1>
              <p className="stroke-gray-400 font-medium line-through text-[#D3D2D3] text-[12px]">
                {" "}
                {formatAndDivideNumber(Number(estateslashedFees))}
                <span className="ml-[3.5px]">₦</span>
              </p>
            </div>
          )}

          {/* jobs fee */}
          {typeof jobsFees !== "undefined" &&
            (Number(jobsFees) > 0 ? (
              <div className="flex flex-row gap-2 items-center justify-center">
                <h1 className="font-bold flex flex-row justify-center items-center text-[16px] text-black">
                  {formatAndDivideNumber(Number(jobsFees))}
                  <span className="ml-[2.5px]">₦</span>
                  <span className="ml-[5px]  text-[#6C727F] text-[10px] font-normal">
                    monthly
                  </span>
                </h1>
              </div>
            ) : (
              <div className="flex flex-row gap-2 items-center justify-center">
                <h1 className="font-bold text-[16px] text-black">
                  Discussable
                </h1>
              </div>
            ))}

          {/* event fee */}
          {typeof eventFees !== "undefined" &&
            (Number(eventFees) > 0 ? (
              <div className="flex flex-row gap-2 items-center justify-center">
                <h1 className="font-bold flex flex-row justify-center items-center text-[24px] text-black">
                  <span className=" mr-[3.5px] text-black text-[20px] font-normal">
                    From
                  </span>
                  {formatAndDivideNumber(Number(eventFees))}
                  <span className="ml-[2.5px]">₦</span>
                </h1>
              </div>
            ) : (
              <div className="flex flex-row gap-2 items-center justify-center">
                <h1 className="font-bold text-[24px] text-[#3AC047]">Free</h1>
              </div>
            ))}
        </div>
      </div>
    </Link>
  );
};

export default SponsorConnectCard;
