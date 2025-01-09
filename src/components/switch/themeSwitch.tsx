import * as React from 'react';

import {
	LightMode as LightModeIcon,
	ModeNight as ModeNightIcon,
} from '@mui/icons-material';
import { Switch } from '@mui/material';
import { useAtom } from 'jotai';

import { themeAtom } from '~atoms';
import { ThemeEnum } from '~enums';

const ThemeSwitch = () => {
	const [theme, setTheme] = useAtom(themeAtom);

	/**
	 * Handle the change of language
	 */
	const handleThemeChange = () => {
		if (theme === ThemeEnum.Light) {
			setTheme(ThemeEnum.Dark);
		} else {
			setTheme(ThemeEnum.Light);
		}
	};

	return (
		<Switch
			icon={<ModeNightIcon fontSize='small' />}
			checkedIcon={<LightModeIcon fontSize='small' />}
			checked={theme === ThemeEnum.Light}
			onChange={handleThemeChange}
			sx={{
				'& .MuiSwitch-switchBase': {
					color: 'white',
					bgcolor: theme === ThemeEnum.Dark ? '#003892' : '#1C7FDC',
					padding: '5px',
					margin: '4px',
					':hover': {
						bgcolor: '#003892',
					},
					'&.Mui-checked': {
						color: 'white',
						bgcolor: '#1C7FDC',
						':hover': {
							bgcolor: '#1C7FDC',
						},
					},
				},
			}}
		/>
	);
};

export default ThemeSwitch;
