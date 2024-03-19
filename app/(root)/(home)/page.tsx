/* The above code is a TypeScript React component that represents a homepage layout. It includes
sections for a hero section with a title and subtext, an overlapping image, information about the
services offered, a registration section, and client feedbacks. It uses various components and
styles to create the desired layout and functionality. */
'use client';

import Image from 'next/image';

import TutorImage from '../../../public/assets/images/hero_image_2.webp';

import ContextWrapper from '../../../components/shared/ContextWrapper';
import TitleWrapper from '../../../components/shared/TitleWrapper';
import { Button } from '../../../components/ui/button';
import { CardWrapper, CardWrapperHorizontal } from '../../../components/shared/CardWrapper';
import { services, testimonial } from '../../../constants/homePageCopyData';
import Slider from '../../../components/shared/Slider';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center w-full">
			<section className="w-full bg-slate-100">
				{/* Hero section */}
				<ContextWrapper className="mt-32 min-h-max pb-48 flex flex-col">
					{/* Header title */}
					<TitleWrapper>
						<span className="flex flex-wrap gap-2 justify-center items-center">
							<span className="block">Chart Your Path to </span>
							<span className="text-blue-800 block">
								Success.
							</span>
						</span>
						<span>Speak, Write, Succeed</span>
					</TitleWrapper>

					{/* Hero subtext */}
					<p className="max-w-[600px] text-[13px] leading-6 sm:leading-6 sm:text-sm font-normal text-zinc-800 text-center mt-8 ">
						Lektore provides assimilation pathways for safe
						immigration to English speaking countries by using
						language and skill-conversion tools for migrating
						professionals, Refugees, Students, Business people and
						Actors.
					</p>

					<>
						<span className="mt-8 block text-zinc-800 font-semibold">
							What&apos;s next?
						</span>
						{/* Action buttons */}
						<div className="flex items-center mt-4 gap-6">
							<Button className="text-xs sm:text-sm font-normal bg-transparent bg-blue-800 px-6 text-white hover:bg-blue-800/80 border">
								Check courses
							</Button>
							<Button className="text-xs sm:text-sm font-normal bg-white px-6 text-zinc-800 shadow hover:bg-slate-200">
								Learn more
							</Button>
						</div>
					</>
				</ContextWrapper>
			</section>

			{/* Overlapping Image */}
			<div className="w-full relative border-white bg-slate-100 p-3 border-[12px] -translate-y-24 max-h-[500px] flex max-w-[1020px] overflow-hidden rounded-xl">
				<Image
					width={612}
					height={208}
					className="min-w-full object-cover rounded-xl"
					quality={100}
					src={TutorImage}
					alt="hero_image"
				/>
			</div>

			{/* What do we offer */}
			<section className="w-full flex-col flex py-16">
				{/* Main content */}
				<ContextWrapper className="justify-center flex-col">
					<TitleWrapper className="flex-row text-2xl sm:text-[32px] text-center mx-auto">
						What do we <span className="text-blue-800">offer?</span>
					</TitleWrapper>
					<span className="mb-8 block text-[13px] sm:text-sm text-zinc-500 max-w-[600px] mt-2 text-center leading-5">
						With the collaboration of seasoned educators and an
						extensive array of resources, we have the capacity to
						provide you with:
					</span>

					{/* Services */}
					<div className="grid [@media(min-width:996px)]:grid-cols-3 grid-cols-1 sm:grid-cols-2 items-center gap-6 justify-between">
						{services.map((service, index) => (
							<CardWrapper
								className="border-none"
								headerContent={
									<span className="bg-blue-800 p-2 text-[24px] rounded-full block w-max">
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
						Our array of knowledeable tutors globally are always at
						your service to help you take that big step and succeed.
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
					<TitleWrapper className="flex-row text-[32px] text-center mx-auto">
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
										<span className="">
											{testimony.profession}
										</span>
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
