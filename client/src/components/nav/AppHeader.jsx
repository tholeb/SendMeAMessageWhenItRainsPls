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
];
const AppHeader = () => {
	return (
		<Popover className="relative bg-dark">
			<div className="px-4 mx-auto max-w-12xl sm:px-6">
				<div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<a href="#!">
							<span className="sr-only">Workflow</span>
							<img
								className="w-auto h-8 sm:h-10"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
								alt=""
							/>
						</a>
					</div>
					<div className="-my-2 -mr-2 md:hidden">
						<Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
