import React from 'react';

import Forecast from '../../components/Forecast';
import Alert from '../../components/Alert';
import Hero from '../../components/Hero';

const Home = () => {
	return (
		<>
			<Hero/>
			<Forecast/>
			<Alert/>
		</>
	);
};

export default Home;
