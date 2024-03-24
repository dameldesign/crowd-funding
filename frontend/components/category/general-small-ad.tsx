import Image from "next/image";

export function GeneralSmallAdvert (){
    return (
        <div className=" rounded-[16px]  items-center justify-center  flex   h-[156px] w-full">
        <Image
          width={519}
          height={519}
          className="object-fit  w-full h-full rounded-[16px] "
          src={"/assets/images/general-ad.jpg"}
          alt="advert"
        />
      </div>
    );
}