import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({ type }) => {
	const content = {
		404: {
			name: 'Error 404',
			title: 'Oups, mauvais chemin',
			description: 'Le contenu que vous recherché n\'existe pas ou il a été supprimé...',
		},
		500: {
			name: 'Error 500',
			title: 'Oups, il y a un soucis :/',
			description: 'Vous pouvez toujours le signaler à tholeb#6077',
		},
	};
	return (
		<div className="bg-gray-100">
			<div className="flex justify-center items-center py-16 m-auto w-9/12 min-h-screen">
				<div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow">
					<div className="pt-8 text-center">
						<h1 className="text-9xl font-bold text-indigo-800">{type && content[type].name}</h1>
						<h5 className="py-8 text-6xl font-medium">{type && content[type].title}</h5>
						<p className="px-12 pb-8 font-medium">{type && content[type].description}</p>
						<button className="py-3 px-6 font-semibold text-white bg-gradient-to-r from-purple-800 hover:from-indigo-600 to-indigo-800 hover:to-purple-600 rounded-md">
					Contact Us
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Errors.propTypes = {
	type: PropTypes.number.isRequired,
};


export default Errors;
