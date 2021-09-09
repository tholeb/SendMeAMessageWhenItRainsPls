import React from 'react';

const Home = React.lazy(() => import('../views/Home'));
const Test = React.lazy(() => import('../views/Test'));


export const routes = [

	{ path: '/', exact: true, name: 'Home', component: Home },
	{ path: '/test', exact: true, name: 'Test', component: Test },
];


export default routes;