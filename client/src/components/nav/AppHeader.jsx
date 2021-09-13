import React from 'react';

import AppMobileNav from './AppMobileNav';

import { Popover } from '@headlessui/react';
import {
	HomeIcon,
	MenuIcon,
} from '@heroicons/react/outline';

const navLinks = [
	{
		name: 'Home',
		description: 'Home page of the website',
		href: '#',
		icon: HomeIcon,
	},
	{
		name: 'Home',
		description: 'Home page of the website',
		href: '#',
		icon: HomeIcon,
	},
];
const AppHeader = () => {
	return (
		<Popover className="relative">
			<div className="px-4 sm:px-6 mx-auto">
				<div className="flex justify-between md:justify-start items-center py-6 md:space-x-10 border-b-2 border-gray-100">
					<div className="flex lg:flex-1 justify-start lg:w-0">
						<a href="#!">
							<span className="sr-only">Workflow</span>
							<img
								className="w-auto h-8 sm:h-10"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
								alt=""
							/>
						</a>
					</div>
					<div className="md:hidden -my-2 -mr-2">
						<Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="w-6 h-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group as="nav" className="hidden md:flex space-x-10">
						{navLinks.map((item) => (
							<a key={item.name} href={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
              				{item.name}
							</a>
						))}
					</Popover.Group>
				</div>
			</div>

			{/* Mobile Nav */}
			<AppMobileNav/>
		</Popover>
	);
};

export default AppHeader;

export { navLinks };
