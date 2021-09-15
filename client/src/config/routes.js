import React from 'react';

const Home = React.lazy(() => import('../views/Home'));
const License = React.lazy(() => import('../views/License'));
const Error404 = React.lazy(() => import('../views/Error'));


export const routes = [
	{ path: '/', exact: true, name: 'Home', component: Home },
	{ path: '/license', exact: true, name: 'License', component: License },

	{ path: '*', exact: true, name: 'ErrorPage', props: { type:404 }, component: Error404 },
];


export default routes;