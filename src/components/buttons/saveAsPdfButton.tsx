import * as React from 'react';

import { Download as DownloadIcon } from '@mui/icons-material';
import { Box, Button, ButtonProps } from '@mui/material';
import jsPDF from 'jspdf';
import { createRoot, Root } from 'react-dom/client';
import { useTranslation } from 'react-i18next';

import { ResumePdf } from '~features';

interface SaveAsPdfButtonProps extends ButtonProps {
	filename?: string;
}

const SaveAsPdfButton = ({
	filename = 'resume-dennisvdvalk.pdf',
	...buttonProps
}: SaveAsPdfButtonProps) => {
	const { t } = useTranslation('general');

	const handleClick = () => {
		const domNode = document.createElement('div');
		const pdfRoot = createRoot(domNode);
		pdfRoot.render(
			<Box style={{ width: '1060px' }}>
				<ResumePdf />
			</Box>,
		);
		document.body.appendChild(domNode);

		// This should be called once the root is rendered
		requestIdleCallback(() => renderPdf(domNode, pdfRoot));
	};

	const renderPdf = (domNode: HTMLDivElement, root: Root) => {
		const doc = new jsPDF('portrait', 'px', 'a4');
		doc.html(domNode, {
			callback: () => {
				doc.save(filename);
				root.unmount();
			},
			html2canvas: { width: 1060, scale: 0.35 },
			margin: [12, 50, 12, 50],
			autoPaging: 'text',
			x: 0,
			y: 0,
			width: 1060,
			windowWidth: 1060,
		});
	};

	return (
		<Button {...buttonProps} onClick={handleClick} startIcon={<DownloadIcon />}>
			{t('saveAsPdf')}
		</Button>
	);
};

export default SaveAsPdfButton;
