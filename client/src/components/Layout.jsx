import React from 'react';
import PropTypes from 'prop-types';

import { AppHeader, AppFooter } from './nav';

const Layout = ({ children }) => {
	return (
		<>
			<AppHeader/>
			{ children }
			<AppFooter/>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default Layout;