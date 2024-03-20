import React from 'react';
import { cn } from '../../lib/utils';

export default function TitleWrapper({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<h1
			className={cn(
				'sm:text-6xl text-2xl leading-5 flex flex-col gap-3 text-zinc-800  text-center font-bold',
				className
			)}
		>
			{children}
		</h1>
	);
}
