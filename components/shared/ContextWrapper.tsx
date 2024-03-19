'use client';

import { cn } from '../../lib/utils';
import React from 'react';

export default function ContextWrapper({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				'max-w-[1556px] px-[4%] mx-auto flex items-center w-full',
				className
			)}
		>
			{children}
		</div>
	);
}
