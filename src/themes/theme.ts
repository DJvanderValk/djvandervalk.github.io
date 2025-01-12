import * as React from 'react';

import { createTheme } from '@mui/material';

import { ThemeEnum } from '~enums';

import baseTheme from './baseTheme';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

const AppTheme = (theme: string) => {
	return React.useMemo(
		() =>
			createTheme(
				baseTheme,
				theme === ThemeEnum.Light ? lightTheme : darkTheme,
			),
		[theme],
	);
};

export default AppTheme;
