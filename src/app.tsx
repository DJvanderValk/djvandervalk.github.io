import * as React from 'react';

import { Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
	Route,
	Routes
} from 'react-router-dom';

import HomePage from './pages/home/homePage';
import AppTheme from './themes/theme';

import './app.css';

/**
 * Setup the app and its routing
 */
const App = () => {
	return (
		<ThemeProvider theme={AppTheme()}>
			<div className='app'>
				<HomePage />
			</div>
		</ThemeProvider>
	);
};

export default App;