import { ThemeOptions } from '@mui/material';

const darkTheme: ThemeOptions = {
	palette: {
		mode: 'dark',
		primary: {
			main: '#90caf9',
			light: '#e3f2fd',
			dark: '#42a5f5',
		},
		secondary: {
			main: '#e65c75',
			light: '#d92e6c',
			dark: '#d63a64',
		},
		background: {
			default: '#121212',
			paper: '#121212',
		},
		text: {
			primary: '#ffffff',
			secondary: 'rgba(255, 255, 255, 0.7)',
		},
	},
};

export default darkTheme;
