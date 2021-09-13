import React from 'react';

export default function Hero() {
	return (
		<div className="overflow-hidden relative bg-white">
			<div className="mx-auto max-w-7xl">
				<div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:w-full lg:max-w-2xl bg-white">
					<svg
						className="hidden lg:block absolute inset-y-0 right-0 w-48 h-full text-white transform translate-x-1/2"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>
					<main className="px-4 sm:px-6 lg:px-8 pt-10 mx-auto max-w-7xl">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
								<span className="block xl:inline">Data to enrich your</span>{' '}
								<span className="block xl:inline text-indigo-600">online business</span>
							</h1>
							<p className="sm:mx-auto lg:mx-0 mt-3 sm:mt-5 md:mt-5 sm:max-w-xl text-base sm:text-lg md:text-xl text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
							</p>
							<div className="sm:flex sm:justify-center lg:justify-start mt-5 sm:mt-8">
								<div className="rounded-md shadow">
									<a
										href="#!"
										className="flex justify-center items-center py-3 md:py-4 px-8 md:px-10 w-full text-base md:text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent"
									>
                    Get started
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#!"
										className="flex justify-center items-center py-3 md:py-4 px-8 md:px-10 w-full text-base md:text-lg font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 rounded-md border border-transparent"
									>
                    Live demo
									</a>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img
					className="object-cover w-full lg:w-full h-56 sm:h-72 md:h-96 lg:h-full"
					src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Godfroy.jpg"
					alt=""
				/>
			</div>
		</div>
	);
}