import * as React from 'react';

import {
	MenuItem,
	Select,
	SelectChangeEvent,
	SelectProps
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import LanguageEnum from '../../enums/languageEnum';

const LanguageSelect = (props: SelectProps) => {
	const { i18n } = useTranslation('general');
	
	/**
	 * Get the list of supported languages in the application
	 * @returns List of supported languages
	 */
	const getSupportedLanguages = (): string[] => {
		const supportedLanguages = (i18n.options.supportedLngs as string[]).filter(lng => {
			return lng !== 'cimode';
		});
		return supportedLanguages;
	};
	
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
		>
			{getSupportedLanguages().map((lng: keyof typeof LanguageEnum, i: number) =>
				<MenuItem
					key={i}
					value={lng}
					color='primary'
				>
					{LanguageEnum[lng]}
				</MenuItem>
			)}
		</Select>
	);
};

export default LanguageSelect;