import * as React from 'react';

import { Box, Paper, Stack, useTheme } from '@mui/material';

import { SaveAsPdfButton, LanguageSelect, ThemeSwitch } from '~components';
import { Resume } from '~features';

const HomePage = () => {
	const theme = useTheme();

	return (
		<Box
			display='flex'
			justifyContent='center'
			bgcolor={theme.palette.background.default}
			width={1}
			height={1}
			sx={{ overflowX: 'hidden' }}
			padding={{ xs: 0, sm: 0, md: '30px' }}
			boxSizing='border-box'
		>
			<Box maxWidth='1100px' height='fit-content' overflow='hidden'>
				<Paper
					id='resume-content'
					elevation={3}
					sx={{
						overflow: 'hidden',
						borderRadius: { xs: 0, sm: 0, md: '8px' },
					}}
				>
					<Resume />
				</Paper>
				<Stack
					display='flex'
					justifyContent='space-between'
					maxWidth='1100px'
					width='100%'
					padding='18px'
					spacing={2}
					direction='row'
					boxSizing='border-box'
				>
					<SaveAsPdfButton />
					<Stack spacing='inherit' direction='row'>
						<LanguageSelect color='primary' variant='standard' />
						<ThemeSwitch />
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
};

export default HomePage;
