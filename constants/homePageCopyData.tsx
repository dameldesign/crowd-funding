/* The code you provided is importing icons from the `react-icons` library and images from the
`./assets/images` directory. These icons and images are then used in the `services` and
`testimonial` arrays. */
import { MdOutlineLanguage } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { VscServerProcess } from 'react-icons/vsc';
import { GiOffshorePlatform } from 'react-icons/gi';

import TestimoniaOne from '../public/assets/images/testimonial_01.webp';
import TestimoniaTwo from '../public/assets/images/testimonial_02.webp';
import TestimoniaThree from '../public/assets/images/testimonial_03.webp';
import TestimoniaFour from '../public/assets/images/testimonial_04.webp';

export const services = [
	{
		text: 'We provide elocution and language to anyone wanting to speak better, bringing a boost in confidence for public speaking.',
		icon: <MdOutlineLanguage color="white" />,
	},
	{
		text: 'We give Actors the language tools to adapt to their roles. Teaches speech and mannerisms of any language you need for roles.',
		icon: <FaTools color="white" />,
	},
	{
		text: 'We create a process that converts existing education and professions of refugees to reusuable skills that makes them a credit to their host countries.',
		icon: <VscServerProcess color="white" />,
	},
	{
		text: 'We equip investors with essential tools for strategic investments in their target countries, fostering informed and successful financial decisions.',
		icon: <FaTools color="white" />,
	},
	{
		text: 'IELTS platform tailored for aspiring students and professionals seeking migration opportunities, facilitating success through expertise and resources.',
		icon: <GiOffshorePlatform color="white" />,
	},
];

export const testimonial = [
	{
		text: 'I am currently learning English language with Lektore and the experience has been wonderful, the tutors are amazing and they make learning a thrilling fun experience.',
		name: 'Alohi Akua',
		profession: 'Engineer',
		image: TestimoniaThree,
	},
	{
		text: 'My name is Xiu, i have been having issues settling into a new country because of my phonetics, i registered with Lektore and i improved greatly, the tutors are amazing and i recommend them for eveyone.',
		name: 'Xiu Muchen',
		profession: 'Student',
		image: TestimoniaFour,
	},
	{
		text: 'Lektore has been a life changer for me, they helped improved my English language and i can now communicate better without fears of language barrier.',
		name: 'Amir Esrafil',
		profession: 'Software Developer',
		image: TestimoniaOne,
	},
	{
		text: 'I joined Lektore and my public speaking and overall knowledge in English improved, thanks to Lektore.',
		name: 'Kim Ryder',
		profession: 'Dentist',
		image: TestimoniaTwo,
	},
];
