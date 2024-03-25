"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function FlashAd() {
  return (
    <section className="px-[3%] w-full items-center justify-center py-[2%] mx-auto ">
      <Link href=''>
        <button className={`flex rounded-2xl flex-col w-[184px] h-[340px] gap-4 relative`}>
          <Image
            alt="logo"
            src={"/assets/images/flash-ad.jpg"}
            fill
            className="rounded-2xl object-cover w-full"
          />
        </button>   
      </Link>
    </section>
  );
}
