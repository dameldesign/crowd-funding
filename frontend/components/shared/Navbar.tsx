/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client";

import React, { useRef, useState } from "react";
import { AiOutlinePicLeft } from "react-icons/ai";
import ContextWrapper from "./ContextWrapper";
import Link from "next/link";
import Image from "next/image";
import FundLogo from "../../public/fund.png";
import { Button } from "../ui/button";
import useCheckWindowSize from "../../utils/usePreventAnimation";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);

  useCheckWindowSize(navbarRef);

  return (
    <>
      <div className="w-full bg-black relative h-[48px] hidden lg:flex flex-row items-center justify-between">
        <div>
          <Image
            width={327}
            height={150}
            className="max-h-[49px] z-10 "
            src="/assets/images/BannerLeft.png"
            alt="fund_logo"
          />
        </div>
        <h1 className="text-xs text-white">
        This Application was build using Cartesi 
        </h1>
        <div>
          <Image
            width={327}
            height={150}
            className="max-h-[49px] z-10 "
            src="/assets/images/BannerRight.png"
            alt="fund_logo"
          />
        </div>
      </div>
      <nav
        className={cn(
          'min-h-[70px] [&[aria-disabled="true"]]:bg-transparent flex items-center w-full border-r-0 border-l-0 z-50 bg-white/60 py-2 backdrop-blur-lg border-t-0 border-b sticky top-0'
        )}
      >
        <ContextWrapper>
          <div className="w-full max-w-full flex relative !overflow-x-hidden justify-between gap-3 items-center">
            <Link className="font-bold flex items-center gap-2" href="/">
              <Image
                width={150}
                height={150}
                className="max-h-[150px]"
                src={FundLogo}
                alt="fund_logo"
              />
            </Link>

            <div
              ref={navbarRef}
              aria-hidden={isHidden}
              className="flex gap-8 ml-auto bg-white lg:bg-transparent w-full lg:w-max pt-4 lg:pt-0 pb-12 lg:pb-0 lg:h-auto h-screen [&[aria-hidden='true']]:translate-y-[-100px] [&[aria-hidden='true']]:opacity-0 [&[aria-hidden='true']]:pointer-events-none transition-transform lg:[&[aria-hidden='true']]:pointer-events-auto lg:[&[aria-hidden='true']]:opacity-100 lg:[&[aria-hidden='true']]:translate-y-0 pointer-events-auto translate-y-0 opacity-100  right-0 px-[4%] lg:px-0 lg:items-center lg:transition-none lg:relative fixed lg:flex-row flex-col top-full"
            >
              {["home", "projects", "contact"].map((route) => (
                <Link
                  className="text-sm hover:text-primary-base hover:font-semibold transition-all capitalize"
                  key={route}
                  href={route === "home" ? "/" : route}
                >
                  {route}
                </Link>
              ))}

              {/* Sign up and Login Buttons */}
              <Link
                className=" border w-max border-primary-base rounded text-sm px-6 py-[5px] hover:text-primary-base"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="bg-primary-base w-max text-white px-6 py-[6px] rounded hover:bg-primary-base/70 text-sm"
                href="/signup"
              >
                Sign up
              </Link>
            </div>

            {/* Menu bar */}
            <Button
              onClick={() => setIsHidden(!isHidden)}
              className="p-0 h-12 w-12 justify-center lg:hidden flex rounded-full bg-transparent text-black hover:bg-zinc-100"
            >
              <AiOutlinePicLeft className="text-[24px]" />
            </Button>
          </div>
        </ContextWrapper>
      </nav>
    </>
  );
}
