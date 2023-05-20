import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
	Download as DownloadIcon
} from '@mui/icons-material';
import {
	Button,
	MenuItem,
	Select,
	SelectChangeEvent,
	SelectProps
} from '@mui/material';
import {
	Document,
	Page,
	pdf,
	Text,
	View
} from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';

const DownloadAsPdfButton = (props: SelectProps) => {


	const myDocument = (
		<Document>
			<Page size='A4'>
				<View>
					<Text>Alloo!</Text>
				</View>
			</Page>
		</Document>
	);

	const downloadPdfClick = () => {
		ReactDOM.render(myDocument, document.getElementById('root'))
	};

	const downloadPdfClick2 = async () => {
		const asPdf = pdf();
		asPdf.updateContainer(myDocument);

		const pdfBlob = await asPdf.toBlob();

		const a = document.createElement('a');
		const url = URL.createObjectURL(pdfBlob);
		a.href = url;
		a.download = 'test.pdf';

		document.body.appendChild(a);
		a.click();

		setTimeout(function () {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 0);
	};
	
	const downloadPdfClick3 = () => {
		const doc = new jsPDF(
			'portrait', 'px', 'a4'
		);
		// const doc = new jsPDF({
		// 	unit: 'pt',
		// 	format: 'a4'
		// });
		doc.setFont("courier", "normal");
		doc.setTextColor('#ffffff')
		
		const pdfContainer = document.createElement('div');
		pdfContainer.id = 'pdf-container';
		// pdfContainer.innerHTML = 'html';
		pdfContainer.style.width = '1080px';
		// pdfContainer.style.width = '100px';
		
		// const content = document.getElementById('resume-content');
		// const content = document.getElementById('resume-main-content');
		const content = document.getElementById('henk');
		const clone = content.cloneNode(true);
		
		pdfContainer.appendChild(clone);
		
		doc.html(pdfContainer, {
			callback: () => {
				doc.save('test.pdf');
			},
			html2canvas: { width: 1080, height: 1920, scale: 0.43, backgroundColor: '#cdcdcd' },
			margin: [10, 10, 10, 10],
			autoPaging: 'text'
		})
	};

	return (
		<Button
			onClick={downloadPdfClick3}
			startIcon={<DownloadIcon />}
		>
			Download as pdf
		</Button>
	);
};

export default DownloadAsPdfButton;