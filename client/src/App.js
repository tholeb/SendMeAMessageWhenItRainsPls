import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './config/routes';

const Layout = React.lazy(() => import('./components/Layout'));

const loading = (
	<svg className="w-5 h-5 mr-3 animate-spin " viewBox="0 0 24 24">
    Loading
	</svg>
);


function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={loading}>
				<Switch>
					<Layout>
						{routes.map((route, idx) => {
							return route.component ? (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									render={(props) => (
										<route.component {...props} />
									)}
								/>
							) : (null);
						})}
					</Layout>
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
