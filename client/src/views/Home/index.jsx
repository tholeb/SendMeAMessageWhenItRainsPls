import React from 'react';

import ErrorBoundary from '../../components/ErrorBoundary';

import Forecast from '../../components/Forecast';
import Alert from '../../components/Alert';
import Hero from '../../components/Hero';

const Home = () => {
	return (
		<>
			{/* <Hero /> */}
			{/* <Alert/> */}
			<ErrorBoundary>
				<Forecast/>
			</ErrorBoundary>
		</>
	);
};

export default Home;
