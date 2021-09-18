import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
	MoonIcon,
	SunIcon,

} from '@heroicons/react/outline';

import SunriseIcon from '../assets/images/sunrise.svg';
import SunsetIcon from '../assets/images/sunset.svg';

const Forecast = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();

	useEffect(() => {
		axios.get('/api/weather/onecall')
			.then(res => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='antialiased bg-gray-100'>
			{loading && <Skeleton/>}
			{!loading && data && <TodayWeather data={data} />}
			{!loading && data && <WeekWeather data={data} />}
		</div>
	);
};

const TodayWeather = ({ data }) => {
	const day = data.daily[0];
	return day && (
		<div className="grid grid-cols-2 sm:grid-cols-1 gap-4 place-items-center p-10">
			<div className='p-5 w-9/12 bg-white dark:bg-gray-800 rounded-lg shadow '>
				<h2 className='text-lg font-bold text-gray-800 dark:text-gray-400'>
					{new Date(day.dt * 1000).toLocaleString('fr-FR', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
				</h2>
				<div>
					<div className='flex mt-4 mb-2'>
						<div className='flex-1'>
							<div className='text-sm text-red-600 dark:text-gray-400'>
								{data.ip.city}, {data.ip.regionName}
							</div>
							<div className='text-3xl font-bold text-gray-800 dark:text-gray-300'>
								{day.temp.min} &deg;C - {day.temp.max} &deg;C
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
					<div className="flex-1 pt-3 text-center">
						<div className='text-xs text-gray-500 dark:text-gray-400'>
							Matin
						</div>
						<img
							src={SunriseIcon}
							aria-hidden="true"
							alt='Temps'
							className='flex-shrink-0 mx-auto w-10 h-10 text-gray-500'
						/>

						<div className='mt-1.5 font-semibold text-gray-800 dark:text-gray-300'>
							{day.temp.morn} &deg;C
						</div>
						<div className='text-xs text-gray-600 dark:text-gray-400'>
							{day.feels_like.morn} &deg;C <br /> ressentie
						</div>
					</div>
					<div className="flex-1 pt-3 text-center">
						<div className='text-xs text-gray-500 dark:text-gray-400'>
							Midi
						</div>
						<SunIcon
							aria-hidden="true"
							alt='Temps'
							className='flex-shrink-0 mx-auto w-10 h-10 text-yellow-400'
						/>
						<div className='mt-1.5 font-semibold text-gray-800 dark:text-gray-300'>
							{day.temp.day} &deg;C
						</div>
						<div className='text-xs text-gray-600 dark:text-gray-400'>
							{day.feels_like.day} &deg;C <br /> ressentie
						</div>
					</div>
					<div className="flex-1 pt-3 text-center">
						<div className='text-xs text-gray-500 dark:text-gray-400'>
							Soir
						</div>
						<img
							src={SunsetIcon}
							aria-hidden="true"
							alt='Temps'
							className='flex-shrink-0 mx-auto w-10 h-10 text-gray-500'
						/>
						<div className='mt-1.5 font-semibold text-gray-800 dark:text-gray-300'>
							{day.temp.eve} &deg;C
						</div>
						<div className='text-xs text-gray-600 dark:text-gray-400'>
							{day.feels_like.eve} &deg;C <br /> ressentie
						</div>
					</div>
					<div className="flex-1 pt-3 text-center">
						<div className='text-xs text-gray-500 dark:text-gray-400'>
							Nuit
						</div>
						<MoonIcon
							aria-hidden="true"
							alt='Temps'
							className='flex-shrink-0 mx-auto w-10 h-10 text-yellow-400'
						/>
						<div className='mt-1.5 font-semibold text-gray-800 dark:text-gray-300'>
							{day.temp.night} &deg;C
						</div>
						<div className='text-xs text-gray-600 dark:text-gray-400'>
							{day.feels_like.night} &deg;C <br /> ressentie
						</div>
					</div>
				</div>
			</div>
			<div className="w-2/3 ">
				<img src={`https://cache.ip-api.com/${data.ip.lon},${data.ip.lat},10`} alt="map" className="w-auto" />
			</div>
		</div>
	);
};


TodayWeather.propTypes = {
	data: PropTypes.object.isRequired,
};

const WeekWeather = ({ data }) => {
	const day = data.daily;
	return day && (
		<div className='p-5 w-9/12 bg-white dark:bg-gray-800 rounded-lg shadow '>
			<div className='flex justify-between space-x-2 h-32'>
				{day.map((actual, id) => {
					return (
						<div key={ id } className="flex-1 pt-3 text-center">
							<div className='text-xs text-gray-500 dark:text-gray-400'>
								{new Date(actual.dt * 1000).toLocaleString('fr-FR', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
							</div>
							<img
								src={`http://openweathermap.org/img/wn/${actual.weather[0].icon}@2x.png`}
								aria-hidden="true"
								alt='Temps'
								className='flex-shrink-0 mx-auto w-14 h-14 text-gray-500'
							/>

							<div className='mt-1.5 font-semibold text-gray-800 dark:text-gray-300'>
								{actual.temp.max} &deg;C
							</div>
							{/* <div className='text-xs text-gray-600 dark:text-gray-400'>
								{day.feels_like.morn} &deg;C <br /> ressentie
							</div> */}
						</div>
					);
				})}
			</div>
		</div>
	);
};


WeekWeather.propTypes = {
	data: PropTypes.object.isRequired,
};

const Skeleton = () => {
	return (
		<>
			<div className='p-5 w-1/2'>
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
			</div>
		</>
	);
};

export default Forecast;