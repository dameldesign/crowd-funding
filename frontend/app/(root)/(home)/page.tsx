/* The above code is a TypeScript React component that represents a homepage layout. It includes
sections for a hero section with a title and subtext, an overlapping image, information about the
services offered, a registration section, and client feedbacks. It uses various components and
styles to create the desired layout and functionality. */
"use client";

import Image from "next/image";

import FundImage from "../../../public/assets/images/Fund.io_hero.png";

import ContextWrapper from "../../../components/shared/ContextWrapper";
import TitleWrapper from "../../../components/shared/TitleWrapper";
import { Button } from "../../../components/ui/button";
import {
  CardWrapper,
  CardWrapperHorizontal,
} from "../../../components/shared/CardWrapper";
import { services, testimonial } from "../../../constants/homePageCopyData";
import Slider from "../../../components/shared/Slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <section className="w-full bg-primary-base/">
        {/* Hero section */}
        <ContextWrapper className="mt-32 min-h-max pb-48 flex flex-col">
          {/* Header title */}
          <TitleWrapper>
            <span className="flex flex-wrap gap-2 justify-center items-center">
              <span className="block">Dedicated to Raising </span>
              <span className="text-primary-base block">Funds</span>
            </span>
            <span>Specifically for Tech StartUps</span>
          </TitleWrapper>

          {/* Hero subtext */}
          <p className="max-w-[600px] text-[13px] leading-6 sm:leading-6 sm:text-sm font-normal text-zinc-800 text-center mt-8 ">
            Whether it&rsquo;s a software development project, a hardware innovation,
            or a tech startup idea, Fund.io provides the infrastructure and
            community support needed to bring these projects to fruition through
            fundraising campaigns and collaborations within the tech community.
          </p>

          <>
            <span className="mt-8 block text-zinc-800 font-semibold">
              What&apos;s next?
            </span>
            {/* Action buttons */}
            <div className="flex items-center mt-4 gap-6">
              <Button className="text-xs sm:text-sm font-normal bg-transparent bg-primary-base px-6 text-white hover:bg-primary-base/80 border">
                Check StartUps
              </Button>
              <Button className="text-xs sm:text-sm font-normal bg-white px-6 text-zinc-800 shadow hover:bg-primary-10 hover:text-white">
                Learn more
              </Button>
            </div>
          </>
        </ContextWrapper>
      </section>

      {/* Overlapping Image */}
      <div className="w-full relative border-white bg-transparent p-3 border-[12px] -translate-y-24 max-h-[750px] flex max-w-[1020px] overflow-hidden rounded-xl">
        <Image
          width={612}
          height={208}
          className="min-w-full object-cover rounded-xl"
          quality={100}
          src={FundImage}
          alt="hero_image"
        />
      </div>

      {/* What do we offer */}
      <section className="w-full flex-col flex py-16">
        {/* Main content */}
        <ContextWrapper className="justify-center flex-col">
          <TitleWrapper className="flex-row text-2xl sm:text-[32px] text-center mx-auto">
            What do we offer?
          </TitleWrapper>
          <span className="mb-8 block text-[13px] sm:text-sm text-zinc-500 max-w-[600px] mt-2 text-center leading-5">
            The platform serves as a hub for tech enthusiasts, innovators, and
            entrepreneurs to showcase their tech-related projects and attract
            financial support from donors and investors interested in
            technology-driven initiatives.
          </span>

          {/* Services */}
          <div className="grid [@media(min-width:996px)]:grid-cols-3 grid-cols-1 sm:grid-cols-2 items-center gap-6 justify-between">
            {services.map((service, index) => (
              <CardWrapper
                className="border-none"
                headerContent={
                  <span className="bg-primary-20 p-2 text-[24px] rounded-full block w-max">
                    {service.icon}
                  </span>
                }
                bodyContent={service.text}
                key={index}
              />
            ))}
          </div>
        </ContextWrapper>
      </section>

      {/* Register with us */}
      <section className="w-full flex-col flex py-16 ">
        {/* Main content */}
        <ContextWrapper className="justify-center flex-col">
          <TitleWrapper className="sm:flex-row sm:text-[32px] text-center mx-auto">
            Register with us at
            <span className="text-primary-500">FUND.IO</span>
          </TitleWrapper>
          <span className="mb-8 block text-[13px] sm:text-sm text-zinc-500 max-w-[600px] text-center mt-3 leading-5 sm:leading-6">
            Fund.io is a web application dedicated to raising funds specifically
            for tech project ideas
          </span>

          {/* Action Button */}
          <Button className="text-sm font-normal bg-transparent bg-primary-500 px-8 text-white hover:bg-primary-500/80 border">
            Register
          </Button>
        </ContextWrapper>
      </section>

      {/* Client Feedbacks */}
      <section className="w-full flex-col flex py-16">
        {/* Main content */}
        <ContextWrapper className="justify-center flex-col">
		<TitleWrapper className="sm:flex-row sm:text-[32px] text-center mx-auto">
            Client
            <span className="text-primary-base">Feedbacks</span>
          </TitleWrapper>
          <span className="mb-8 block text-sm text-zinc-500 max-w-[600px] mt-3 text-center leading-5">
            See what some of our clients are saying about FUND.IO
          </span>
        </ContextWrapper>

        {/* Slider */}
        <Slider className="gap-6 w-full">
          {testimonial.map((testimony) => (
            <CardWrapperHorizontal
              className="[@media(min-width:553px)]:min-w-[500px] max-w-[500px] flex-col [@media(min-width:553px)]:flex-row min-w-full snap-center rounded-xl p-4 bg-slate-50 min-h-[280px]"
              key={testimony.name}
              headerContent={
                <Image
                  className="rounded-full min-h-[54px] min-w-[54px] max-h-[96px] pl-6  [@media(min-width:553px)]:pl-0 [@media(min-width:553px)]:rounded-tr-none [@media(min-width:553px)]:min-h-[180px] [@media(min-width:553px)]:max-h-[200px] [@media(min-width:553px)]:min-w-[150px] object-cover object-top"
                  quality={100}
                  src={testimony.image}
                  alt={testimony.name}
                  width={181}
                  height={181}
                />
              }
              bodyContent={
                <div className="flex flex-col gap-6 h-full">
                  <span className="text-left text-zinc-500 leading-6">
                    {testimony.text}
                  </span>
                  <div className="mt-auto">
                    <span className="font-semibold block">
                      {testimony.name}
                    </span>
                    <span className="">{testimony.profession}</span>
                  </div>
                </div>
              }
            />
          ))}
        </Slider>
      </section>
    </main>
  );
}
