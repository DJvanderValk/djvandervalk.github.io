import * as React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './app';
import './lib/i18n';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.Suspense fallback={<div>Loading...</div>}>
		<RecoilRoot>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</RecoilRoot>
	</React.Suspense>
);