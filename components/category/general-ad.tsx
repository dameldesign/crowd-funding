import Image from "next/image";

export function GeneralAdvert (){
    return (
        <div className=" rounded-[12px] px-6 mt-6 items-center justify-center  flex   h-[275px] w-full">
        <Image
          width={519}
          height={519}
          className="object-fit  w-full h-full rounded-[12px] "
          src={"/assets/images/general-ad.jpg"}
          alt="advert"
        />
      </div>
    );
}