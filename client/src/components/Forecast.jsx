import React from 'react';

const Forecast = () => {
	return (
		<div className='antialiased bg-gray-100'>
			<div className='grid grid-cols-4 gap-4'>
				<div className='mx-auto w-full max-w-sm'>
					<div className='p-5 w-full bg-white dark:bg-gray-800 rounded-lg shadow'>
						<h2 className='text-lg font-bold text-gray-800 dark:text-gray-400'>
              Vendredi, 10/09/2021
						</h2>
						<div>
							<div className='flex mt-4 mb-2'>
								<div className='flex-1'>
									<div className='text-sm text-gray-600 dark:text-gray-400'>
                    Lieu
									</div>
									<div className='text-3xl font-bold text-gray-800 dark:text-gray-300'>
                    10 &deg;C
									</div>
									<div className='text-xs text-gray-600 dark:text-gray-400'>
                    Pluie
									</div>
								</div>
								<div className='w-24'>
									<img
										src='https://cdn.weatherapi.com/weather/64x64/day/143.png'
										alt='weatherData.current.condition.text'
										loading='lazy'
									/>
								</div>
							</div>

							<div className='flex justify-between space-x-2 h-32 border-t dark:border-gray-500'>
								<div className="flex-1 text-center pt-3 {'border-r dark:border-gray-500': key==0}">
									<div className='text-xs text-gray-500 dark:text-gray-400'>
                    Lendemain
									</div>
									<img
										src='https://cdn.weatherapi.com/weather/64x64/day/143.png'
										alt='forecast.day.condition.text'
										loading='lazy'
										className='mx-auto'
									/>
									<div className='mt-1.5 font-semibold text-gray-800 dark:text-gray-300'>
                    Maxtemp &deg;C
									</div>
									<div className='text-xs text-gray-600 dark:text-gray-400'>
                    soleil
									</div>
								</div>
								<div className="flex-1 text-center pt-3 {'border-r dark:border-gray-500': key==0}">
									<div className='text-xs text-gray-500 dark:text-gray-400'>
                    Lendemain
									</div>
									<img
										src='https://cdn.weatherapi.com/weather/64x64/day/143.png'
										alt='forecast.day.condition.text'
										loading='lazy'
										className='mx-auto'
									/>
									<div className='mt-1.5 font-semibold text-gray-800 dark:text-gray-300'>
                    Maxtemp &deg;C
									</div>
									<div className='text-xs text-gray-600 dark:text-gray-400'>
                    soleil
									</div>
								</div>
							</div>
						</div>
						{/* <div className="animate-pulse">
			<div className="flex mt-4 mb-5">
				<div className="flex-1">
					<div className="rounded h-2 mb-1.5 bg-gray-200 w-1/2"></div>
					<div className="bg-gray-200 rounded h-4"></div>
					<div className="rounded h-2 mt-1.5 bg-gray-200 w-1/2"></div>
				</div>
				<div className="w-24">
					<div className="w-12 h-12 rounded-full bg-gray-100 mx-auto"></div>
				</div>
			</div>

			<div className="flex space-x-2 justify-between border-t h-32 dark:border-gray-500">
				<div className="flex-1 text-center pt-4 border-r px-5 dark:border-gray-500">
					<div className="rounded h-2 mb-2 bg-gray-200 w-1/2 mx-auto"></div>
					<div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-2"></div>
					<div className="rounded h-3 mt-1 bg-gray-200 mx-auto"></div>
					<div className="rounded h-2 mt-1 bg-gray-200 w-1/2 mx-auto"></div>

				</div>
				<div className="flex-1 text-center pt-4 px-5">
					<div className="rounded h-2 mb-2 bg-gray-200 w-1/2 mx-auto"></div>
					<div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-2"></div>
					<div className="rounded h-3 mt-1 bg-gray-200 mx-auto"></div>
					<div className="rounded h-2 mt-1 bg-gray-200 w-1/2 mx-auto"></div>
				</div>
			</div>
		</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forecast;
