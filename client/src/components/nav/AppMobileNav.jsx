import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import {
	XIcon,
} from '@heroicons/react/outline';

import { navLinks } from './AppHeader';

const AppMobileNav = () => {
	return (
		<Transition
			as={Fragment}
			enter="duration-200 ease-out"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="duration-100 ease-in"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<Popover.Panel focus className="md:hidden absolute inset-x-0 top-0 p-2 transition transform origin-top-right">
				<div className="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5 shadow-lg">
					<div className="px-5 pt-5 pb-6">
						<div className="flex justify-between items-center">
							<div>
								<img
									className="w-auto h-8"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									alt="Workflow"
								/>
							</div>
							<div className="-mr-2">
								<Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
									<span className="sr-only">Close menu</span>
									<XIcon className="w-6 h-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="mt-6">
							<nav className="grid gap-y-8">
								{navLinks.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="flex items-center p-3 -m-3 hover:bg-gray-50 rounded-md"
									>
										<item.icon className="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
										<span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
									</a>
								))}
							</nav>
						</div>
					</div>
					<div className="py-6 px-5 space-y-6">
						<div>
							<p className="mt-6 text-base font-medium text-center text-gray-500">
                  Made by{' '}
								<a href="https://github.com/tholeb" className="text-indigo-600 hover:text-indigo-500">
                    tholeb
								</a>
							</p>
						</div>
					</div>
				</div>
			</Popover.Panel>
		</Transition>
	);
};

export default AppMobileNav;
