import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Markdown from 'vite-plugin-react-markdown';

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: [
		'**/*.md'
	],
	resolve: {
		alias: {
			'~atoms': path.resolve(__dirname, 'src', 'atoms'),
			'~assets': path.resolve(__dirname, 'src', 'assets'),
			'~components': path.resolve(__dirname, 'src', 'components'),
			'~constants': path.resolve(__dirname, 'src', 'constants'),
			'~docs': path.resolve(__dirname, 'docs'),
			'~enums': path.resolve(__dirname, 'src', 'enums'),
			'~features': path.resolve(__dirname, 'src', 'features'),
			'~pages': path.resolve(__dirname, 'src', 'pages'),
			'~themes': path.resolve(__dirname, 'src', 'themes'),
		}
	},
	plugins: [
		Markdown({
			wrapperComponent: true,
		}),
		react({
			include: [/\.tsx$/, /\.md$/], // <-- add .md 
		})
	],
});