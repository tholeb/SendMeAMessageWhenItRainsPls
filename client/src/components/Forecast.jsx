import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Forecast = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();

	useEffect(() => {
		axios.get('/api/weather/forecast')
			.then(res => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='antialiased bg-gray-100'>
			<div className='grid grid-cols-4 gap-4 pt-10 pb-10'>
				{loading && <Skeleton/>}
				{!loading && <Content data={data} />}
			</div>
		</div>
	);
};

let subTempIndex = 0;

const Content = ({ data }) => {
	return (
		<>
			{data.list && data.list.slice(0, 8).map((day, id) => {
				subTempIndex++;
				const actualDay = new Date(day.dt).setHours(0, 0, 0, 0);
				const tomorrow = new Date(data.list[id + 1].dt).setHours(0, 0, 0, 0);

				console.log(actualDay.toLocaleString('fr-FR'), tomorrow.toLocaleString('fr-FR'));

				return (
					<div key={id} className='mx-auto w-full max-w-sm'>
						<div className='p-5 w-full bg-white dark:bg-gray-800 rounded-lg shadow'>
							<h2 className='text-lg font-bold text-gray-800 dark:text-gray-400'>
								{new Date(day.dt * 1000).toLocaleString('fr-FR', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour12: false, hour: '2-digit', minute:'2-digit' })}
							</h2>
							<div>
								<div className='flex mt-4 mb-2'>
									<div className='flex-1'>
										<div className='text-sm text-gray-600 dark:text-gray-400'>
											{data.city.name}
										</div>
										<div className='text-3xl font-bold text-gray-800 dark:text-gray-300'>
											{day.main.temp} &deg;C
										</div>
										<div className='text-xs text-gray-600 dark:text-gray-400'>
											{day.weather[0].description}
										</div>
									</div>
									<div className='w-24'>
										<img
											src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
											alt='Temps'
										/>
									</div>
								</div>
							</div>
							<div className='flex justify-between space-x-2 h-32 border-t dark:border-gray-500'>
								{data.list.slice(subTempIndex, subTempIndex + 4).map((hour, idx) => {
									const options = { hour12: false, hour: '2-digit', minute:'2-digit' };
									const actualDay = new Date(day.dt);
									const actualHour = new Date(hour.dt);

									return actualDay.setHours(0, 0, 0, 0) === actualHour.setHours(0, 0, 0, 0) ? (
										<div key={idx} className="flex-1 pt-3 text-center">
											<div className='text-xs text-gray-500 dark:text-gray-400'>
												{new Date(hour.dt * 1000).toLocaleString('fr-FR', options)}
											</div>
											<img
												src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
												alt='Temps'
												className='mx-auto'
											/>
											<div className='mt-1.5 font-semibold text-gray-800 dark:text-gray-300'>
												{hour.main.temp} &deg;C
											</div>
											<div className='text-xs text-gray-600 dark:text-gray-400'>
												{hour.weather[0].description}
											</div>
										</div>
									) : (null);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

Content.propTypes = {
	data: PropTypes.object.isRequired,
};

const Skeleton = () => {
	return (
		<>
			{[...Array(8)].map((x, i) =>
				<div key={i} className='mx-auto w-full max-w-sm'>
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

							<div className="flex justify-between space-x-2 h-32 border-t">
								<div className="flex-1 px-5 pt-4 text-center border-r dark:border-gray-500">
									<div className="mx-auto mb-2 w-1/2 h-2 bg-gray-200 rounded"></div>
									<div className="mx-auto mb-2 w-12 h-12 bg-gray-100 rounded-full"></div>
									<div className="mx-auto mt-1 h-3 bg-gray-200 rounded"></div>
									<div className="mx-auto mt-1 w-1/2 h-2 bg-gray-200 rounded"></div>
								</div>
								<div className="flex-1 px-5 pt-4 text-center border-r dark:border-gray-500">
									<div className="mx-auto mb-2 w-1/2 h-2 bg-gray-200 rounded"></div>
									<div className="mx-auto mb-2 w-12 h-12 bg-gray-100 rounded-full"></div>
									<div className="mx-auto mt-1 h-3 bg-gray-200 rounded"></div>
									<div className="mx-auto mt-1 w-1/2 h-2 bg-gray-200 rounded"></div>
								</div>
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
							</div>
						</div>
					</div>
				</div>,
			)}
		</>
	);
};

export default Forecast;


/*  */
