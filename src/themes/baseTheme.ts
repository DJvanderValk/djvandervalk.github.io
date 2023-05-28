import { ThemeOptions } from '@mui/material';

const baseTheme: ThemeOptions = {
	typography: {
		h1: {
			fontSize: '2rem'
		},
		h2: {
			fontSize: '1.4rem',
			textTransform: 'uppercase',
			// marginTop: '40px',
			// marginBottom: '10px'
		},
		h3: {
			fontSize: '1.15rem',
			// marginTop: '15px',
			// marginBottom: '10px'
		},
		body1: {
			fontSize: '15px'
		}
	}
};

export default baseTheme;