import * as React from 'react';

import {
	Flag as FlagIcon,
	Home as HomeIcon,
	Mail as MailIcon,
	Phone as PhoneIcon,
	Wc as WcIcon,
} from '@mui/icons-material';
import {
	Box,
	Chip,
	Divider,
	Grid,
	LinearProgress,
	Stack,
	ThemeProvider,
	Typography,
} from '@mui/material';
import i18next from 'i18next';
import Markdown from 'markdown-to-jsx';
import { useTranslation } from 'react-i18next';

import personalInformation from '~docs/personalInfo.yaml';
import { AppTheme } from '~themes';

const ResumePdf = () => {
	const { t } = useTranslation('general');

	const [resumeFile, setResumeFile] = React.useState(null);

	React.useEffect(() => {
		loadFile();
	}, [i18next.language]);

	const loadFile = async () => {
		try {
			const file = await import(
				`~docs/resume_experience_${i18next.language}.md?raw`
			);
			setResumeFile(file.default);
		} catch (error) {
			console.error(error);
		}
	};

	const profile = [
		{
			key: new Date(personalInformation.profile.dateOfBirth).toLocaleDateString(
				'nl-NL',
				{ year: 'numeric', month: 'long', day: 'numeric' },
			),
		},
		{ key: personalInformation.profile.address.city },
		{ key: t(personalInformation.profile.citizenship) },
		{ key: t(personalInformation.profile.gender) },
		{ key: t(personalInformation.profile.phoneNumber) },
		{ key: t(personalInformation.profile.mail) },
		// { key: t(personalInformation.profile.github) }
	];

	const headerPanel = (
		<Box width={1} display='flex' flexDirection='column' alignItems='center'>
			<Stack
				direction={{ xs: 'row', sm: 'column' }}
				alignItems='center'
				justifyContent='center'
				width={1}
			>
				<Typography variant='h1' fontSize='1.5rem'>
					{`${personalInformation.profile.firstName} ${personalInformation.profile.lastName}`}
				</Typography>
			</Stack>
			<Typography variant='subtitle1' color='textSecondary' pt='8px'>
				{personalInformation.profile.tagline}
			</Typography>
		</Box>
	);

	const sidePanel = (
		<Stack spacing={3}>
			<Box>
				{profile.map((el, i) => (
					<Typography key={i} variant='body1'>
						{el.key}
					</Typography>
				))}
			</Box>

			<Box>
				<Typography variant='h3' textTransform='uppercase' pb={1}>
					{t('languages')}
				</Typography>
				{personalInformation.languages.map((el, i) => (
					<Stack key={i} direction='row' spacing={1}>
						<Typography variant='body1'>{t(el.key)}</Typography>
						<Typography variant='body1' color='textSecondary'>
							({t(el.level)})
						</Typography>
					</Stack>
				))}
			</Box>

			<Box>
				<Typography variant='h3' textTransform='uppercase' pb={1}>
					{t('skills')}
				</Typography>
				<Stack spacing={1} pt={1}>
					{personalInformation.skills.info.map((el, i) => (
						<Stack key={i} direction='column' width='auto'>
							<Typography variant='body1'>{el.key}</Typography>
							<LinearProgress
								color='secondary'
								variant='determinate'
								value={el.level * 100}
								sx={{ width: 1 }}
							/>
						</Stack>
					))}
				</Stack>
			</Box>

			<Box mt={1}>
				{personalInformation.skills.keywords.map((keyword, i) => {
					if (typeof keyword === 'string') {
						return (
							<Chip
								key={i}
								label={keyword}
								variant='outlined'
								size='medium'
								sx={{ m: '1px' }}
							/>
						);
					}

					return (
						<>
							<Typography sx={{ pt: 2, pb: 1 }}>{keyword.key}</Typography>
							{keyword.keywords.map((el, j) => (
								<Chip
									key={j}
									label={el}
									variant='outlined'
									size='medium'
									sx={{ m: '1px' }}
								/>
							))}
						</>
					);
				})}
			</Box>

			<Box>
				<Typography variant='h3' textTransform='uppercase' pb={1}>
					{t('interests')}
				</Typography>
				{personalInformation.interests.map((el, i) => (
					<Typography key={i} variant='body1'>
						{t(el)}
					</Typography>
				))}
			</Box>
		</Stack>
	);

	const mainPanel = resumeFile && (
		<Markdown
			options={{
				createElement(tag: string, props: any, children: any) {
					if (tag === 'h1' || tag === 'Collapse') {
						return;
					} else if (tag === 'h2') {
						return (
							<Typography
								variant={tag}
								color='primary'
								pt={3}
								pb={props.id === 'career-profile' ? 1 : 0}
							>
								{children}
							</Typography>
						);
					} else if (tag === 'h3') {
						return (
							<Typography
								{...props}
								variant={tag}
								color='secondary'
								pt={2}
								pb={1}
							>
								{children}
							</Typography>
						);
					} else if (tag === 'p') {
						return (
							<Typography {...props} variant='body1'>
								{children}
							</Typography>
						);
					} else if (tag === 'ul' && Array.isArray(children)) {
						return (
							<Box component='ul' pl={2} sx={{ marginBlockEnd: 0 }}>
								{children.map((el, i) => (
									<Typography key={i} {...el.props} component='li'>
										{el.props.children[0]}
									</Typography>
								))}
							</Box>
						);
					} else if (tag === 'blockquote') {
						const info = children[0].props.children[0].split(' | ');

						return (
							<Box
								display='flex'
								justifyContent='space-between'
								sx={{ py: 1}}
							>
								<Typography variant='body1' color='textSecondary' flex={1}>
									{info[0]}
								</Typography>
								{info.length > 1 && (
									<Typography variant='body1' color='textSecondary' pl={0.5}>
										{info[1]}
									</Typography>
								)}
							</Box>
						);
					}

					return React.createElement(tag, props, children);
				},
			}}
		>
			{resumeFile}
		</Markdown>
	);

	return (
		<ThemeProvider theme={AppTheme('light')}>
			<Grid container direction='row' border='1px'>
				<Grid
					container
					item
					direction='column'
					xs={4}
					maxWidth={{ sm: '300px' }}
				>
					<Grid item padding={4}>
						{headerPanel}
					</Grid>
					<Divider />
					<Grid item pl={1} pr={4} py={2} xs>
						{sidePanel}
					</Grid>
				</Grid>
				<Grid item>
					<Divider orientation='vertical' />
				</Grid>
				<Grid item p={2} xs={8}>
					{mainPanel}
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default ResumePdf;
