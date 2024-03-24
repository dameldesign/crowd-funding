import { IAlsoViewedItems } from "@/types";
import Image from "next/image";
import React from "react";

//The components here are re-used across other catgories as they share the same structure as 'also viewed' sections...
type IAlsoViewedCars = Omit<IAlsoViewedItems, "reviews">;
const AlsoViewedJobs = ({ related }: { related: IAlsoViewedCars[] }) => {
  return (
    <div className="py-6 border-y border-light-300">
      <h2 className="text-primary-300 text-2xl font-semibold">
        People Also Viewed
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {related.map((item, i) => (
          <ItemBlock key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AlsoViewedJobs;

export const Listings = ({ listings }: { listings: IAlsoViewedCars[] }) => {
  return (
    <div className="py-6 border-y border-light-300">
      <h2 className="text-primary-300 text-2xl font-semibold">
        Other Seller listings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {listings.map((item, i) => (
          <ItemBlock key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
const ItemBlock = ({
  imgUrl,
  name,
  type,
  address,
  price,
  promoPrice,
}: IAlsoViewedCars) => {
  return (
    <div>
      <Image src={imgUrl} alt="name" height={218} width={240} />
      <p className="text-xl font-medium text-primary-300 mt-4 truncate">
        {name}
      </p>
      <div className="flex gap-2 my-2 items-center">
        <p className="text-grey-100 text-sm">{type}</p>
        <div className="h-1 w-1 rounded-full bg-grey-100"></div>
        <div className="flex items-center gap-1">
          <Image
            src="/assets/images/company.png"
            alt="Location Icon"
            height={16}
            width={16}
          />
          <p className="truncate">{address}</p>
        </div>
      </div>
      <div className="flex gap-3">
        {promoPrice && (
          <p className="text-green-200 font-bold flex items-center">
            {promoPrice}
            <Image
              src="/assets/images/naira-green.png"
              alt="Naira Icon"
              width={16}
              height={16}
            />
          </p>
        )}
        <p
          className={`${
            promoPrice ? "text-light-200 line-through" : "text-primary-300"
          }  font-bold flex items-center`}
        >
          {price}
          <Image
            src="/assets/images/naira-black.png"
            alt="Naira Icon"
            width={16}
            height={16}
          />
        </p>
      </div>
    </div>
  );
};
