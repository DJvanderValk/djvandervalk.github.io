import * as React from 'react';

import { Paper, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
	Route,
	Routes
} from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import themeAtom from './atoms/themeAtom';
import HomePage from './pages/home/homePage';
import AppTheme from './themes/theme';

import './app.css';
import { ResumePdf } from '~features';

/**
 * Setup the app and its routing
 */
const App = () => {
	const theme = useRecoilValue(themeAtom);
	
	return (
		<>
			<ThemeProvider theme={AppTheme(useRecoilValue(themeAtom))}>
				<div className='app'>
					<HomePage />
				</div>
			</ThemeProvider>
		</>
	);
};

export default App;