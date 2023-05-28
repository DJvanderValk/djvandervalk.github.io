import * as React from 'react';

import {
	Architecture as ArchitectureIcon,
	Cake as CakeIcon,
	Construction as ConstructionIcon,
	ExpandMore as ExpandMoreIcon,
	Flag as FlagIcon,
	GitHub as GitHubIcon,
	Home as HomeIcon,
	LocalLibrary as LocalLibraryIcon,
	Mail as MailIcon,
	Person as PersonIcon,
	Phone as PhoneIcon,
	Public as PublicIcon,
	School as SchoolIcon,
	Wc as WcIcon,
	Work as WorkIcon
} from '@mui/icons-material';
import {
	Box,
	Button,
	Chip,
	Collapse,
	Divider,
	Grid,
	LinearProgress,
	Link,
	Paper,
	Stack,
	ThemeProvider,
	Typography,
	useTheme
} from '@mui/material';
import i18next from 'i18next';
import Markdown from 'markdown-to-jsx';
import { useTranslation } from 'react-i18next';

import personalInformation from '../../constants/personalInformation';
import AppTheme from '../../themes/theme';

const ResumePdf = () => {
	const { t } = useTranslation('general');

	const [resumeFile, setResumeFile] = React.useState(null);

	React.useEffect(() => {
		loadFile();
	}, [i18next.language]);

	const loadFile = async () => {
		try {
			const file = await import(`~docs/resume_experience_${i18next.language}.md`);
			setResumeFile(file.default);
		} catch (error) {
			console.log(error);
		}
	};

	const profile = [
		{
			key: (new Date(personalInformation.profile.dateOfBirth)).toLocaleDateString(
				'nl-NL', { year: 'numeric', month: 'long', day: 'numeric' }
			)
		},
		{ key: personalInformation.profile.address.city, icon: <HomeIcon fontSize='small' /> },
		{ key: t(personalInformation.profile.citizenship), icon: <FlagIcon fontSize='small' /> },
		{ key: t(personalInformation.profile.gender), icon: <WcIcon fontSize='small' /> },
		{
			key: t(personalInformation.profile.phoneNumber),
			icon: <PhoneIcon fontSize='small' />,
			href: `tel:${personalInformation.profile.phoneNumber}`
		},
		{
			key: t(personalInformation.profile.mail),
			icon: <MailIcon fontSize='small' />,
			href: `mailto:${personalInformation.profile.mail}`
		},
		{
			key: t(personalInformation.profile.github),
			icon: <GitHubIcon fontSize='small' />,
			href: `https://github.com/${personalInformation.profile.github}`
		}
	];

	const headerMapping = {
		'career-profile': {
			key: 'careerProfile',
			icon: <PersonIcon />
		},
		'working-experience': {
			key: 'workingExperience',
			icon: <WorkIcon />
		},
		'education': {
			key: 'education',
			icon: <SchoolIcon />
		},
		'courses': {
			key: 'courses',
			icon: <LocalLibraryIcon />
		},
		'projects': {
			key: 'projects',
			icon: <ArchitectureIcon />
		},
		'other-experiences': {
			key: 'otherExperiences',
			icon: <PublicIcon />
		},
	};

	const headerPanel = (
		<Box
			width='100%'
			display='flex'
			flexDirection='column'
			alignItems='center'
		>
			<Stack
				direction={{ xs: 'row', sm: 'column' }}
				alignItems='center'
				justifyContent='center'
				width='100%'
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
				{profile.map((el, i) =>
					<Typography variant='body1'>{el.key}</Typography>
				)}
			</Box>

			<Box>
				<Typography variant='h3' textTransform='uppercase' pb='10px'>
					{t('languages')}
				</Typography>
				{personalInformation.languages.map((el, i) =>
					<Stack key={i} direction='row' spacing={1}>
						<Typography variant='body1'>{t(el.key)}</Typography>
						<Typography variant='body1' color='textSecondary'>({t(el.level)})</Typography>
					</Stack>
				)}
			</Box>

			<Box>
				<Typography variant='h3' textTransform='uppercase' pb='10px'>
					{t('skills')}
				</Typography>
				<Stack spacing={1} pt='8px'>
					{personalInformation.skills.info.map((el, i) =>
						<Stack key={i} direction='column' width='auto'>
							<Typography variant='body1'>
								{el.key}
							</Typography>
							<LinearProgress
								color='secondary'
								variant='determinate'
								value={el.level * 100}
								sx={{ width: '100%' }}
							/>
						</Stack>
					)}
				</Stack>
			</Box>
			
			<Box>
				<Box mt='10px'>
					{personalInformation.skills.keywords.map((keyword, i) =>
						<Chip
							key={i}
							label={keyword}
							variant='outlined'
							size='medium'
							sx={{ m: '1px'}}
						/>
					)}
				</Box>
			</Box>

			<Box>
				<Typography variant='h3' textTransform='uppercase' pb='10px'>
					{t('interests')}
				</Typography>
				{personalInformation.interests.map((el, i) =>
					<Typography key={i} variant='body1'>{t(el)}</Typography>
				)}
			</Box>
		</Stack>
	);

	const mainPanel = (
		<>
			{resumeFile &&
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
										pt='30px'
										pb={props.id === 'career-profile' ? '10px' : 0}
									>
										{children}
									</Typography>
								);
							} else if (tag === 'h3') {
								return (
									<Typography {...props} variant={tag} color='secondary' pt='15px' pb='8px'>
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
									<Box component='ul' pl='16px' sx={{ marginBlockEnd: 0 }}>
										{children.map((el, i) =>
											<Typography key={i} {...el.props} component='li'>
												{el.props.children[0]}
											</Typography>
										)}
									</Box>
								);
							} else if (tag === 'blockquote') {
								const info = children[0].props.children[0].split(' | ');

								return (
									<Box display='flex' justifyContent='space-between' pt='10px' pb='10px'>
										<Typography variant='body1' color='textSecondary' flex={1}>
											{info[0]}
										</Typography>
										{info.length > 1 &&
											<Typography variant='body1' color='textSecondary' pl='4px'>
												{info[1]}
											</Typography>
										}
									</Box>
								);
							}

							return React.createElement(tag, props, children);
						}
					}}
				>
					{resumeFile}
				</Markdown>
			}
		</>
	);

	return (
		<ThemeProvider theme={AppTheme('light')}>
			<Grid container direction='row' border='1px'>
				<Grid
					container item
					direction='column'
					sm={4}
					maxWidth={{ sm: '300px' }}
				>
					<Grid item padding='30px'>
						{headerPanel}
					</Grid>
					<Divider />
					<Grid item padding='30px' xs>
						{sidePanel}
					</Grid>
				</Grid>
				<Grid item>
					<Divider orientation='vertical'/>
				</Grid>
				<Grid item sm={8} p='18px'>
					{mainPanel}
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default ResumePdf;