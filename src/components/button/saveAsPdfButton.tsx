import * as React from 'react';

import {
	Download as DownloadIcon
} from '@mui/icons-material';
import {
	Box,
	Button,
	ButtonProps
} from '@mui/material';
import jsPDF from 'jspdf';
import { createRoot } from 'react-dom/client';
import { useTranslation } from 'react-i18next';

import { ResumePdf } from '~features';

interface SaveAsPdfButtonProps extends ButtonProps {
	visible: boolean
}

const SaveAsPdfButton = (props: SaveAsPdfButtonProps) => {
	const { t } = useTranslation('general');
	
	const saveAsPdfClick = () => {
		const doc = new jsPDF('portrait', 'px', 'a4');
		
		const pdfEl = document.getElementById('pdf');
		const pdfRoot = createRoot(pdfEl);
		pdfRoot.render(
			<Box style={{ width: '1060px' }}>
				<ResumePdf />
			</Box>
		);
		
		doc.html(pdfEl, {
			callback: () => {
				doc.save('resume-dennisvdvalk.pdf');
			},
			html2canvas: { width: 1060, scale: 0.43 },
			margin: [10, 10, 10, 10],
			autoPaging: 'text',
			x: 0,
			y: 0,
			width: 1060,
			windowWidth: 1060
		});
	};
	
	if(!props.visible) {
		return <Box></Box>;
	}

	return (
		<Button
			onClick={saveAsPdfClick}
			startIcon={<DownloadIcon />}
		>
			{t('saveAsPdf')}
		</Button>
	);
};

SaveAsPdfButton.defaultProps = {
	visible: true
};

export default SaveAsPdfButton;