import * as React from 'react';

import { createTheme } from '@mui/material';
import { useRecoilValue } from 'recoil';

import baseTheme from './baseTheme';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import ThemeEnum from '../enums/themeEnum';
import themeAtom from '../atoms/themeAtom';

const AppTheme = () => {
	const theme = useRecoilValue(themeAtom);
	
	return React.useMemo(() => createTheme(
		baseTheme,
		theme === ThemeEnum.Light ? lightTheme : darkTheme
	), [theme]);
};

export default AppTheme;