import * as React from 'react';

import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Button, ButtonProps, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ExpandMoreButtonProps extends ButtonProps {
	expanded?: boolean;
	onExpand?: (value: boolean) => void;
}

const ExpandMoreButton = ({
	expanded = false,
	onExpand,
	...buttonProps
}: ExpandMoreButtonProps) => {
	const { t } = useTranslation('general');
	const theme = useTheme();

	return (
		<Button
			{...buttonProps}
			onClick={() => onExpand(!expanded)}
			sx={{
				textTransform: 'capitalize',
				width: '100%',
				mt: '15px',
			}}
			endIcon={
				<ExpandMoreIcon
					sx={{
						color: 'textSecondary',
						transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
						transition: theme.transitions.create('transform', {
							duration: theme.transitions.duration.shortest,
						}),
					}}
				/>
			}
		>
			<Typography width='100%' color='primary'>
				{t(!expanded ? 'seeMore' : 'seeLess')}
			</Typography>
		</Button>
	);
};

export default ExpandMoreButton;
