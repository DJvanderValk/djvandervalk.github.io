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
			main: '#FF6666',
			light: '#f3e5f5',
			dark: '#ab47bc',
		},
		background: {
			default: '#121212',
			paper: '#121212',
		},
		text: {
			primary: '#ffffff',
			secondary: 'rgba(255, 255, 255, 0.7)'
		},
	}
};

export default darkTheme;