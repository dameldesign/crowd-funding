/* The code you provided is importing icons from the `react-icons` library and images from the
`./assets/images` directory. These icons and images are then used in the `services` and
`testimonial` arrays. */
import { MdOutlineLanguage } from 'react-icons/md';
import { FaMoneyCheck, FaTools } from 'react-icons/fa';
import { VscServerProcess } from 'react-icons/vsc';
import { GiOffshorePlatform } from 'react-icons/gi';

import TestimoniaOne from '../public/assets/images/testimonial_01.webp';
import TestimoniaTwo from '../public/assets/images/testimonial_02.webp';
import TestimoniaThree from '../public/assets/images/testimonial_03.webp';
import TestimoniaFour from '../public/assets/images/testimonial_04.webp';
import { List, Users } from 'lucide-react';

export const services = [
	{
		text: 'We provide elocution and language to anyone wanting to speak better, bringing a boost in confidence for public speaking.',
		icon: <MdOutlineLanguage color="white" />,
	},
	{
		text: 'Users can connect with like-minded individuals within the tech community.',
		icon: <Users color="white" />,
	},
	{
		text: 'We provide access to resources essential for project development and growth',
		icon: <VscServerProcess color="white" />,
	},
	{
		text: 'Our platform enables users to showcase their tech-related projects',
		icon: <List color="white" />,
	},
	{
		text: 'We serve as a central hub for tech enthusiasts, innovators, and entrepreneurs',
		icon: <GiOffshorePlatform color="white" />,
	},
	{
		text: 'We facilitate attracting financial support from donors and investors',
		icon: <FaMoneyCheck  color="white" />,
	},
];

export const testimonial = [
	{
		text: 'Fund.io has been instrumental in helping me secure funding for my tech startup. Their platform provided valuable resources and connections that I couldnt find elsewhere.',
		name: 'Alohi Akua',
		profession: 'Engineer',
		image: TestimoniaThree,
	},
	{
		text: 'My name is Xiu, i have  been a member of Fund.io for over a year now, and I cant recommend it enough. The community is incredibly supportive, and the team behind the platform is always innovating to provide better opportunities for tech enthusiasts like me.',
		name: 'Xiu Muchen',
		profession: 'Student',
		image: TestimoniaFour,
	},
	{
		text: 'Fund.io helped me turn my tech idea into a reality. From connecting me with the right mentors to providing valuable feedback, their platform guided me through every step of the startup journey. Im grateful for their support!',
		name: 'Amir Esrafil',
		profession: 'Software Developer',
		image: TestimoniaOne,
	},
	{
		text: 'As an investor, Ive had an amazing experience with fund.io. Their platform makes it easy to discover promising tech projects and connect with passionate founders. Ive made several successful investments through their platform.',
		name: 'Kim Ryder',
		profession: 'Dentist',
		image: TestimoniaTwo,
	},
];
