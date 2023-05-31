import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

import { themeAtom } from '~atoms';
import { HomePage } from '~pages';
import { AppTheme } from '~themes';

import './app.css';

/**
 * Setup the app and its routing
 */
const App = () => {
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