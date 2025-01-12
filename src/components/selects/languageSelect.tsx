import * as React from 'react';

import {
	MenuItem,
	Select,
	SelectChangeEvent,
	SelectProps,
	useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { LanguageEnum } from '~enums';

const LanguageSelect = (props: SelectProps) => {
	const theme = useTheme();
	const { i18n } = useTranslation('general');

	/**
	 * Handle the change of language
	 */
	const handleLanguageChange = (event: SelectChangeEvent) => {
		i18n.changeLanguage(event.target.value);
	};

	return (
		<Select
			{...props}
			value={i18n.resolvedLanguage}
			onChange={handleLanguageChange}
			sx={{
				'& .MuiSvgIcon-root ': {
					fill: theme.palette.text.primary,
				},
			}}
		>
			{Object.keys(LanguageEnum).map(
				(lng: keyof typeof LanguageEnum, i: number) => (
					<MenuItem key={i} value={lng}>
						{LanguageEnum[lng]}
					</MenuItem>
				),
			)}
		</Select>
	);
};

export default LanguageSelect;
