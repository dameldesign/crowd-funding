import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import FundLogo from '../public/Fund.io-000.png';
import { Button } from './ui/button';
import Image from 'next/image';
import ContextWrapper from './shared/ContextWrapper';

export default function Footer() {
	return (
		<footer className="min-h-[200px] flex flex-col  w-full pt-16">
			<ContextWrapper className="pb-16 flex-col flex items-center gap-12 justify-between">
				<div className="w-full flex flex-col [@media(min-width:553px)]:items-center">
					<span className="max-w-[300px] [@media(min-width:553px)]:text-center text-sm block text-zinc-800 font-normal">
						Register your email and subscribe to our news to get the
						latest update!
					</span>
					<div className="flex gap-4 w-full max-w-[400px]">
						<input className="mt-3 h-[41px] px-4 w-full outline-none border-2 border-primary-300 !rounded-lg" />
						<Button className="mt-3 bg-primary-300 text-white px-6">
							Subscribe
						</Button>
					</div>
				</div>

				<div className="flex gap-8 [@media(min-width:553px)]:flex-row flex-col self-start [@media(min-width:553px)]:self-center font-normal text-zinc-800 text-sm">
					{[
						{ label: 'Home', link: '/' },
						{ label: 'Our Services', link: '/services' },
						{
							label: 'Who We Service',
							link: '/who-we-service',
						},
						{
							label: 'Pathways',
							link: '/pathways',
						},
						{
							label: 'Contact',
							link: '/contact',
						},
					].map((route) => (
						<Link
							className="hover:text-blue-800 flex items-center gap-1 hover:font-semibold transition-all"
							key={route.label}
							href={route.link}
						>
							<span className="hidden h-1 w-1 [@media(min-width:553px)]:block bg-zinc-800 rounded-full" />
							{route.label}
						</Link>
					))}
				</div>
			</ContextWrapper>

			<div className="py-4 border-t">
				<ContextWrapper className="flex justify-between">
					<div>
						<Link
							className="font-bold flex items-center gap-2"
							href="/"
						>
							<Image
								width={120}
								height={120}
								// className="max-h-[16.5px]"
								src={FundLogo}
								// src="/images/Fund.io.jpg
								alt="fund.io_logo"
							/>
					
						</Link>
					</div>

					{/* Socials */}
					<div className="flex gap-3 items-center">
						<Link
							className="hover:text-blue-800 transition-all"
							href="/facebook.com"
						>
							<FaFacebook />
						</Link>
						<Link
							className="hover:text-blue-800 transition-all"
							href="/facebook.com"
						>
							<FaTwitter />
						</Link>
						<Link
							className="hover:text-blue-800 transition-all"
							href="/facebook.com"
						>
							<FaLinkedinIn />
						</Link>
					</div>
				</ContextWrapper>
			</div>
		</footer>
	);
}
