import * as React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import './lib/i18n';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.Suspense fallback={<div>Loading...</div>}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.Suspense>
);
