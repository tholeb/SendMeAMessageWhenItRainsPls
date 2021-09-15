import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './config/routes';

const Layout = React.lazy(() => import('./components/Layout'));

const loading = (
	<svg className="mr-3 w-5 h-5 animate-spin" viewBox="0 0 24 24">
    Loading
	</svg>
);


function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={loading}>
				<Switch>
					{routes.map((route, idx) => {
						return route.component ? (
							<Route
								key={idx}
								path={route.path}
								exact={route.exact}
							>
								<Layout>
									<route.component {...route.props} />
								</Layout>
							</Route>
						) : (null);
					})}
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
