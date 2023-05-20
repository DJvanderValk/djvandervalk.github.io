import * as React from 'react';

import {
	Cake as CakeIcon,
	Construction as ConstructionIcon,
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
	Grid,
	LinearProgress,
	Link,
	Paper,
	Stack,
	Typography,
	useTheme
} from '@mui/material';
import i18next from 'i18next';
import Markdown from 'markdown-to-jsx';
import { useTranslation } from 'react-i18next';

import personalInformation from '../../constants/personalInformation';
import {
	DownloadAsPdfButton,
	LanguageSelect,
	ThemeSwitch
} from '~components';

interface PropsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	id: string
}

const HomePage = () => {
	const { t } = useTranslation('general');
	const theme = useTheme();

	const [resumeFile, setResumeFile] = React.useState(null);

	React.useEffect(() => {
		loadFile();
	}, []);

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
			key: (new Date(personalInformation.profile.dateOfBirth)).toLocaleDateString('nl-NL'),
			icon: <CakeIcon fontSize='small' />
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
		'other-experiences': {
			key: 'otherExperiences',
			icon: <PublicIcon />
		},
	}

	const mainPanel = (
		<>
			{resumeFile &&
				<Markdown
					options={{
						createElement(tag: string, props: any, children) {
							console.log(tag, props, children)
							if(tag === 'h1') {
								return;
							} else if(tag === 'h2') {
								return (
									<Stack spacing={1} direction='row' pt='30px' pb='10px'>
										{headerMapping[props.id as keyof typeof headerMapping].icon}
										<Typography variant={tag} color='primary'>
											{children}
										</Typography>
									</Stack>
								);
							} else if(tag === 'h3') {
								return (
									<Typography {...props} variant={tag} color='secondary' pt='20px' pb='10px'>
										{children}
									</Typography>
								);
							} else if(tag === 'p') {
								return (
									<Typography {...props} variant='body1'>
										{children}
									</Typography>
								);
							} else if(tag === 'ul' && Array.isArray(children)) {
								return (
									<Box component='ul' pl='16px'>
										{children.map(el => 
											<Typography {...el.props} component='li'>
												{el.props.children[0]}
											</Typography>
										)}
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

	const mainPanel2 = (
		<Stack id='resume-main-content' spacing={3}>
			{personalInformation.skills &&
				<Box>
					<Typography variant='h2' display='flex' alignItems='center'>
						<ConstructionIcon sx={{ mr: '16px' }} /> {t('skills')}
					</Typography>
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
			color='textPrimary'
		>
			<Typography variant='h1' display={{ xs: 'block', sm: 'block', md: 'none' }}>
				{`${personalInformation.profile.firstName} ${personalInformation.profile.lastName}`}
			</Typography>
			<Stack display={{ xs: 'none', sm: 'none', md: 'block' }}>
				<Typography variant='h1' display='flex' justifyContent='center'>
					{personalInformation.profile.firstName}
				</Typography>
				<Typography variant='h1' display='flex' justifyContent='center'>
					{personalInformation.profile.lastName}
				</Typography>
			</Stack>
			<Typography variant='subtitle1' color='textSecondary'>
				{personalInformation.profile.tagline}
			</Typography>
		</Box>
	);

	const sidePanel = (
		<Stack spacing={3} color='white'>
			<Box>
				{profile.map((el, i) =>
					<Stack spacing={2} direction='row' alignItems='center'>
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
							<Typography variant='body1' color='textSecondary'>({t(el.level)})</Typography>
						</Stack>
					)}
				</Box>
			}
		</Stack>
	);

	return (
		<Box
			display='flex'
			justifyContent='center'
			bgcolor={theme.palette.background.default}
			width='100%' height='100%'
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
						borderRadius: { xs: 0, sm: 0, md: '8px' }
					}}
				>
					<Grid container direction='row-reverse' >
						<Grid
							container item
							direction='column'
							xs sm md='auto'
						>
							<Grid item bgcolor='#096537' padding='30px'>
								{headerPanel}
							</Grid>
							<Grid item bgcolor='#177e4b' padding='30px' xs>
								{sidePanel}
							</Grid>
						</Grid>
						<Grid
							item
							xs sm
							paddingX={{ xs: '18px' }}
							paddingY={{ xs: '40px' }}
							padding={{ sm: '30px', md: '60px' }}
						>
							{mainPanel}
						</Grid>
					</Grid>
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
					<DownloadAsPdfButton />
					<Stack
						spacing='inherit'
						direction='row'
					>
						<LanguageSelect variant='standard' />
						<ThemeSwitch />
					</Stack>
					{/* <div id='henk'>
						<h2>Testings</h2>
						<p>
							Henk dsf falkf jksdfj lkafjksajf lkasjflkasjf lkajdflk jafkja lkfjkls afjlkas jfkajfajlska
							jafkl jflajflkjakjflka jfalkj fkajflkajfklajfkj alkfdjd dfaljf klajdfkajlkfaj lkdjjf la
							kjflakjflak jf lkajflk ajklfj adklaj fkla jfklajdkf jaljflakjfalkd jflkjfkljalkfjalkjfl
							kajdfj alkjflk ajd kfljalkdfjlkajlkajkfljakjflkdajflkj fsf
						</p>
					</div> */}
				</Stack>
			</Box>
		</Box>
	);
};

export default HomePage;