import * as path from 'path';

import ViteYaml from '@modyfi/vite-plugin-yaml';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig((config) => {
	process.env = { ...process.env, ...loadEnv('', process.cwd(), '') };

	return {
		assetsInclude: ['**/*.md'],
		plugins: [react(), ViteYaml()],
		resolve: {
			alias: {
				'~assets': path.resolve(__dirname, 'src', 'assets'),
				'~atoms': path.resolve(__dirname, 'src', 'atoms'),
				'~components': path.resolve(__dirname, 'src', 'components'),
				'~constants': path.resolve(__dirname, 'src', 'constants'),
				'~docs': path.resolve(__dirname, 'docs'),
				'~enums': path.resolve(__dirname, 'src', 'enums'),
				'~features': path.resolve(__dirname, 'src', 'features'),
				'~hooks': path.resolve(__dirname, 'src', 'hooks'),
				'~layouts': path.resolve(__dirname, 'src', 'layouts'),
				'~pages': path.resolve(__dirname, 'src', 'pages'),
				'~services': path.resolve(__dirname, 'src', 'services'),
				'~themes': path.resolve(__dirname, 'src', 'themes'),
			},
		},
		server: {
			port: parseInt(process.env.PORT),
		},
	};
});
