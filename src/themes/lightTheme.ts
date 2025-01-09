import { ThemeOptions } from '@mui/material';

const lightTheme: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#1976d2',
			light: '#42a5f5',
			dark: '#0b4c8c',
		},
		secondary: {
			main: '#a11a32',
			light: '#ba68c8',
			dark: '#7b1fa2',
		},
		text: {
			primary: 'rgba(0,0,0,0.87)',
			secondary: 'rgba(0,0,0,0.6)'
		},
		background: {
			default: '#F5F5F5'
		}
	}
};

export default lightTheme;
