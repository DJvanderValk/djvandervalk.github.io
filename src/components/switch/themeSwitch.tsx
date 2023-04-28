import * as React from 'react';

import {
	LightMode as LightModeIcon,
	ModeNight as ModeNightIcon
} from '@mui/icons-material';
import {
	SelectProps,
	Switch
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRecoilState } from 'recoil';

import themeAtom from '../../atoms/themeAtom';
import ThemeEnum from '../../enums/themeEnum';

const ThemeSwitch = (props: SelectProps) => {
	const [theme, setTheme] = useRecoilState(themeAtom);

	/**
	 * Handle the change of language
	 */
	const handleThemeChange = (event: React.ChangeEvent<HTMLElement>) => {
		if (theme === ThemeEnum.Light) {
			setTheme(ThemeEnum.Dark);
		} else {
			setTheme(ThemeEnum.Light)
		}
	};

	return (
		<>
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
							bgcolor: '#003892'
						},
						'&.Mui-checked': {
							color: 'white',
							bgcolor: '#1C7FDC',
							':hover': {
								bgcolor: '#1C7FDC'
							}
						}
					}
				}}
			/>
		</>
	);
};

export default ThemeSwitch;