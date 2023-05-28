import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

import {
	Download as DownloadIcon
} from '@mui/icons-material';
import {
	Box,
	Button,
	ButtonProps,
	MenuItem,
	SelectProps,
	ThemeProvider
} from '@mui/material';
import {
	Document,
	Page,
	pdf,
	Text,
	View
} from '@react-pdf/renderer';
import jsPDF from 'jspdf';
import { useTranslation } from 'react-i18next';

import { ResumePdf } from '~features';

import AppTheme from '../../themes/theme';

interface DownloadAsPdfButtonProps extends ButtonProps {
	visible: boolean
}

const DownloadAsPdfButton = (props: DownloadAsPdfButtonProps) => {
	const { t } = useTranslation('general');
	
	const downloadPdfClick = () => {
		const doc = new jsPDF(
			'portrait', 'px', 'a4'
		);
		console.log(doc.internal)
		// doc.setFont("courier", "normal");
		// doc.setTextColor('#ffffff')
		
		// const bla = (
		// 	<ThemeProvider theme={AppTheme('light')}>
		// 		<ResumePdf />
		// 	</ThemeProvider>
		// );
		const bla = (
			<Box style={{ width: '1920px' }}>
				<ResumePdf />
			</Box>
		);
		
		// const bla2 = renderToStaticMarkup(bla);
		const bla2 = renderToString(bla);
		
		const root = document.getElementById('root');
		root.innerHTML = bla2;
		return;
		
		// const content = document.getElementById('resume-content');
		
		// const buttons = content.getElementsByTagName('button');
		// console.log(buttons)
		// for(let i=0; i < buttons.length; i++) {
		// 	buttons[i].parentNode.removeChild(buttons[i]);
		// }
		
		doc.html(bla2, {
			callback: () => {
				doc.save('test.pdf');
			},
			// html2canvas: { width: 1080, height: 1920, scale: 0.43, backgroundColor: '#cdcdcd' },
			// margin: [10, 10, 10, 10],
			autoPaging: 'text',
			x: 0,
			y: 0,
			width: 400,
			windowWidth: 400
		})
	};
	
	if(!props.visible) {
		return <Box></Box>;
	}

	return (
		<Button
			onClick={downloadPdfClick}
			startIcon={<DownloadIcon />}
		>
			{t('downloadAsPdf')}
		</Button>
	);
};

DownloadAsPdfButton.defaultProps = {
	visible: true
}

export default DownloadAsPdfButton;