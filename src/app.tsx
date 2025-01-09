import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { useAtomValue } from 'jotai';

import { themeAtom } from '~atoms';
import { HomePage } from '~pages';
import { AppTheme } from '~themes';

import './app.css';

/**
 * Setup the app and its routing
 */
const App = () => {
	const theme = useAtomValue(themeAtom);
	
	return (
		<ThemeProvider theme={AppTheme(theme)}>
			<div className='app'>
				<HomePage />
			</div>
		</ThemeProvider>
	);
};

export default App;
