import React, { useState, useEffect } from 'react';

const Forecast = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const callbackendAPI = async (query) => {
		const response = await fetch(query);
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};

	useEffect(() => {
		callbackendAPI('/api/weather/forecast')
			.then((res) => {
				setLoading(true);
				setData(res.list);
			})
			.catch((err) => console.log(err));
		return () => {
			setLoading(true);
		};
	});

	return (
		<div className='antialiased bg-gray-100'>
			<div className='grid grid-cols-4 gap-4'>
				{data.map((day, idx) => {
					return loading ? (
						<div key={idx} className='mx-auto w-full max-w-sm'>
							<div className='p-5 w-full bg-white dark:bg-gray-800 rounded-lg shadow'>
								<h2 className='text-lg font-bold text-gray-800 dark:text-gray-400'>
									{new Date(day.dt).toLocaleDateString()}
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

									{/* <div className='flex justify-between space-x-2 h-32 border-t dark:border-gray-500'>
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
									</div> */}
								</div>
							</div>
						</div>
					) : (
						<div key={idx} className='mx-auto w-full max-w-sm'>
							<div className='p-5 w-full bg-white dark:bg-gray-800 rounded-lg shadow'>
								<div className="animate-pulse">
									<div className="flex mt-4 mb-5">
										<div className="flex-1">
											<div className="mb-1.5 w-1/2 h-2 bg-gray-200 rounded"></div>
											<div className="h-4 bg-gray-200 rounded"></div>
											<div className="mt-1.5 w-1/2 h-2 bg-gray-200 rounded"></div>
										</div>
										<div className="w-24">
											<div className="mx-auto w-12 h-12 bg-gray-100 rounded-full"></div>
										</div>
									</div>

									{/* <div className="flex justify-between space-x-2 h-32 border-t dark:border-gray-500">
										<div className="flex-1 px-5 pt-4 text-center border-r dark:border-gray-500">
											<div className="mx-auto mb-2 w-1/2 h-2 bg-gray-200 rounded"></div>
											<div className="mx-auto mb-2 w-12 h-12 bg-gray-100 rounded-full"></div>
											<div className="mx-auto mt-1 h-3 bg-gray-200 rounded"></div>
											<div className="mx-auto mt-1 w-1/2 h-2 bg-gray-200 rounded"></div>

										</div>
										<div className="flex-1 px-5 pt-4 text-center">
											<div className="mx-auto mb-2 w-1/2 h-2 bg-gray-200 rounded"></div>
											<div className="mx-auto mb-2 w-12 h-12 bg-gray-100 rounded-full"></div>
											<div className="mx-auto mt-1 h-3 bg-gray-200 rounded"></div>
											<div className="mx-auto mt-1 w-1/2 h-2 bg-gray-200 rounded"></div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					);
				})}

			</div>
		</div>
	);
};

export default Forecast;
