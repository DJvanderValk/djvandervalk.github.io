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
import { createRoot } from 'react-dom/client';

interface DownloadAsPdfButtonProps extends ButtonProps {
	visible: boolean
}

const DownloadAsPdfButton = (props: DownloadAsPdfButtonProps) => {
	const { t } = useTranslation('general');
	
	const downloadPdfClick = () => {
		const doc = new jsPDF(
			'portrait', 'px', 'a4'
		);
		
		const pdfEl = document.getElementById('pdf');
		const pdfRoot = createRoot(pdfEl);
		pdfRoot.render(
			<Box style={{ width: '1080px' }}>
				<ResumePdf />
			</Box>
		);
		
		doc.html(pdfEl, {
			callback: () => {
				doc.save('resume-dennisvdvalk.pdf');
			},
			html2canvas: { width: 1080, scale: 0.43 },
			// margin: [10, 10, 10, 10],
			autoPaging: 'text',
			x: 0,
			y: 0,
			width: 1080,
			windowWidth: 1080
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