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
			<Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition transform origin-top-right md:hidden">
				<div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
					<div className="px-5 pt-5 pb-6">
						<div className="flex items-center justify-between">
							<div>
								<img
									className="w-auto h-8"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									alt="Workflow"
								/>
							</div>
							<div className="-mr-2">
								<Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
										className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
									>
										<item.icon className="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
										<span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
									</a>
								))}
							</nav>
						</div>
					</div>
					<div className="px-5 py-6 space-y-6">
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
