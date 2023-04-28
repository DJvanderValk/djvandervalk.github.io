import * as React from 'react';

import {
	Cake as CakeIcon,
	Construction as ConstructionIcon,
	Fingerprint as FingerprintIcon,
	GitHub as GitHubIcon,
	Home as HomeIcon,
	Mail as MailIcon,
	Person as PersonIcon,
	Phone as PhoneIcon,
	School as SchoolIcon,
	Wc as WcIcon,
	Work as WorkIcon
} from '@mui/icons-material';
import {
	Box,
	Container,
	Grid,
	Icon,
	LinearProgress,
	Link,
	Paper,
	Stack,
	SvgIcon,
	Typography,
	useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import LanguageSelect from '../../components/select/languageSelect';
import ThemeSwitch from '../../components/switch/themeSwitch';
import personalInformation from '../../constants/personalInformation';

const contentInSidePanel = [
	'profile',
	'languages',
	'interests',
	'skills'
];

const contentInMainPanel = [
	'careerProfile',
	'workingExperience',
	'education',
	'courses',
	'otherExperiences'
];

const HomePage = () => {
	const { t } = useTranslation('general');
	
	const theme = useTheme();

	const profile = [
		{
			key: (new Date(personalInformation.profile.dateOfBirth)).toLocaleDateString('nl-NL'),
			icon: <CakeIcon fontSize='small' />
		},
		{ key: personalInformation.profile.address.city, icon: <HomeIcon fontSize='small' /> },
		{ key: t(personalInformation.profile.citizenship), icon: <FingerprintIcon fontSize='small' /> },
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
	]

	const mainPanelHeader = (title: string, icon: any) => {
		return (
			<Stack direction='row' alignItems='center' spacing={1}>
				{icon}
				<Typography variant='h2'>{title}</Typography>
			</Stack>
		);
	};

	const mainPanel = (
		<Stack spacing={4}>
			{personalInformation.careerProfile &&
				<Box>
					{mainPanelHeader(t('careerProfile'), <PersonIcon />)}
					<Typography variant='body1'>
						{t(personalInformation.careerProfile.details)}
					</Typography>
				</Box>
			}

			{personalInformation.workingExperience &&
				<Box>
					{mainPanelHeader(t('workingExperience'), <WorkIcon />)}
					<Stack spacing={5}>
						{personalInformation.workingExperience.info.map((el, i) =>
							<Box key={i}>
								<Box display='flex' justifyContent='space-between'>
									<Typography variant='body1'>{t(el.role)}</Typography>
									<Typography variant='body1' color='lightgray'>
										{`${t(el.dateStart)} - ${t(el.dateEnd)}`}
									</Typography>
								</Box>
								<Typography variant='body1'>
									{`${el.company}, ${el.location.city}${el.location.country ? ` (${t(el.location.country)})` : ''}`}
								</Typography>
								<Typography variant='body1'>{t(el.details)}</Typography>
							</Box>
						)}
					</Stack>
				</Box>
			}

			{personalInformation.education &&
				<Box>
					{mainPanelHeader(t('education'), <SchoolIcon />)}
					<Stack spacing={2}>
						{personalInformation.education.info.map((el, i) =>
							<Box key={i}>
								<Box display='flex' justifyContent='space-between'>
									<Typography variant='body1'>{t(el.degree)}</Typography>
									<Typography variant='body1'>
										{`${t(el.dateStart)} - ${t(el.dateEnd)}`}
									</Typography>
								</Box>
								<Typography variant='body1'>
									{`${el.university}, ${el.location.city}`}
								</Typography>
								<Typography variant='body1'>{t(el.details)}</Typography>
							</Box>
						)}
					</Stack>
				</Box>
			}

			{personalInformation.skills &&
				<Box>
					{mainPanelHeader(t('skills'), <ConstructionIcon />)}
					<Stack>
						{personalInformation.skills.info.map(el =>
							<Box
								display='flex'
								flexDirection='row'
								alignItems='center'
							>
								<Typography flexGrow={1} variant='body1'>
									{el.key}
								</Typography>
								<LinearProgress
									variant='determinate'
									value={el.level * 100}
									sx={{ width: '200px' }}
								/>
							</Box>
						)}
					</Stack>
				</Box>
			}
		</Stack>
	);

	const headerPanel = (
		<Box
			width='100%'
			display='flex'
			flexDirection='column'
			alignItems='center'
			color='white'
		>
			<Typography variant='h1'>
				{personalInformation.profile.name}
			</Typography>
			<Typography variant='subtitle2' color='lightgray'>
				{personalInformation.profile.tagline}
			</Typography>
		</Box>
	);

	const sidePanel = (
		<Stack spacing={4} color='white'>
			<Box>
				{profile.map((el, i) =>
					<Stack spacing={2} direction='row'>
						{el.icon}
						{el.href ?
							<Link 
								color='inherit'
								variant='body1'
								underline='hover'
								href={el.href}
							>
								{el.key}
							</Link> :
							<Typography variant='body1'>{el.key}</Typography>
						}
					</Stack>
				)}
			</Box>

			{personalInformation.interests &&
				<Box>
					<Typography variant='h2'>{t('interests')}</Typography>
					{personalInformation.interests.map(el =>
						<Typography variant='body1'>{t(el)}</Typography>
					)}
				</Box>
			}

			{personalInformation.languages &&
				<Box>
					<Typography variant='h2'>{t('languages')}</Typography>
					{personalInformation.languages.map(el =>
						<Stack key={el.key} direction='row' spacing={1}>
							<Typography variant='body1'>{t(el.key)}</Typography>
							<Typography variant='body1' color='lightgray'>({t(el.level)})</Typography>
						</Stack>
					)}
				</Box>
			}
		</Stack>
	);

	const panels = (
		<Grid container direction='row-reverse'>
			<Grid
				container item
				direction='column'
				xs={12} sm='auto'
			>
				<Grid
					item
					bgcolor='#2596be'
					padding='30px'
				>
					{headerPanel}
				</Grid>
				<Grid
					item
					bgcolor='#42a8c0'
					padding='30px'
					xs
				>
					{sidePanel}
				</Grid>
			</Grid>
			<Grid
				item
				xs={12} sm
				// bgcolor='white'
				padding={{ xs: '18px', sm: '30px', md: '60px' }}
			>
				{mainPanel}
			</Grid>
		</Grid>
	)

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			// bgcolor='black'
			// bgcolor='whitesmoke'
			bgcolor={theme.palette.background.default}
			minHeight='100vh'
			width='100vw'
			boxSizing='border-box'
			padding={{ xs: 0, sm: 0, md: '30px' }}
		>
			<Paper
				sx={{
					maxWidth: '1100px',
					width: '100%',
					height: '100%'
				}}
			>
				{panels}
			</Paper>
			<Stack
				display='flex'
				justifyContent='flex-end'
				maxWidth='1100px'
				width='100%'
				padding='18px'
				spacing={2}
				direction='row'
				boxSizing='border-box'
			>
				<ThemeSwitch />
				<LanguageSelect variant='standard' />
			</Stack>
		</Box>
	);
};

export default HomePage;