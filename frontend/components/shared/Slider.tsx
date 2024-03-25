'use client';

import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { cn } from '../../lib/utils';

export default function Slider({
	children,
	className,
	mainContainerStyle,
}: {
	children: React.ReactNode;
	className?: string;
	mainContainerStyle?: string;
}) {
	const sliderRef = useRef<HTMLDivElement>(null);

	function handleScrollContainer(direction: 'left' | 'right') {
		if (sliderRef === null) return;
		const scrollSize = sliderRef.current?.children[0].clientWidth as number;

		sliderRef.current?.scrollBy({
			left:
				direction === 'left'
					? -scrollSize
					: direction === 'right'
					? scrollSize
					: 0,
			behavior: 'smooth',
			top: 0,
		});
	}

	return (
		<div className={cn(mainContainerStyle)}>
			<div
				ref={sliderRef}
				className={cn(
					'flex snap-x items-start w-screen px-[8%] overflow-x-hidden',
					className
				)}
			>
				{children}
			</div>

			{/* Action buttons */}
			<div className="w-full flex items-center px-[8%] justify-between mt-6">
				<Button
					onClick={() => handleScrollContainer('left')}
					className="rounded-full bg-primary-base"
				>
					<BsArrowLeftShort className="text-xl text-white " />
				</Button>
				<Button
					onClick={() => handleScrollContainer('right')}
					className="rounded-full bg-primary-base"
				>
					<BsArrowRightShort className="text-xl text-white " />
				</Button>
			</div>
		</div>
	);
}
