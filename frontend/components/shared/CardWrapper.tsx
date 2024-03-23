import React from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '../ui/card';
import { cn } from '../../lib/utils';


type CardType = {
	headerContent?: React.ReactNode;
	bodyContent?: React.ReactNode;
	footerContent?: React.ReactNode;
	className?: string;
};

export function CardWrapper({ ...props }: CardType) {
	return (
		<Card className={cn(props.className)}>
			<CardHeader>{props.headerContent}</CardHeader>
			<CardContent className="text-[13px] sm:text-sm text-zinc-700">
				{props.bodyContent}
			</CardContent>
			<CardFooter>{props.footerContent}</CardFooter>
		</Card>
	);
}

export function CardWrapperHorizontal({ ...props }: CardType) {
	return (
		<div className={cn('flex flex-row', props.className)}>
			<div>{props.headerContent}</div>
			<CardContent className="text-sm flex justify-start items-start pt-4 text-zinc-700">
				{props.bodyContent}
			</CardContent>
		</div>
	);
}
