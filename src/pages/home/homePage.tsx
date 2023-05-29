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

import {
	SaveAsPdfButton,
	LanguageSelect,
	ThemeSwitch
} from '~components';

import personalInformation from '../../constants/personalInformation';
import { ResumePdf } from '~features';

const HomePage = () => {
	const { t } = useTranslation('general');
	const theme = useTheme();

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
			),
			icon: <CakeIcon fontSize='small' />
		},
		{ key: personalInformation.profile.address.city, icon: <HomeIcon fontSize='small' /> },
		{ key: t(personalInformation.profile.citizenship), icon: <FlagIcon fontSize='small' /> },
		{ key: t(personalInformation.profile.gender), icon: <WcIcon fontSize='small' /> },
		{
			key: t(personalInformation.profile.phoneNumber),
			icon: <PhoneIcon fontSize='small' />,
			href: `tel:${personalInformation.profile.phoneNumber.replace(/[ ]/g, '')}`
		},
		{
			key: t(personalInformation.profile.mail),
			icon: <MailIcon fontSize='small' />,
			href: `mailto:${personalInformation.profile.mail}`
		},
		// {
		// 	key: t(personalInformation.profile.github),
		// 	icon: <GitHubIcon fontSize='small' />,
		// 	href: `https://github.com/${personalInformation.profile.github}`
		// }
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

	const [expanded, setExpanded] = React.useState<{ [id: number]: boolean }>({});

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
				color='white'
			>
				<Typography variant='h1' pr={{ xs: '10px', sm: 0 }}>
					{personalInformation.profile.firstName}
				</Typography>
				<Typography variant='h1'>
					{personalInformation.profile.lastName}
				</Typography>
			</Stack>
			<Typography variant='subtitle1' color='textSecondary' pt='8px'>
				{personalInformation.profile.tagline}
			</Typography>
		</Box>
	);

	const sidePanel = (
		<Stack spacing={4} color='white'>
			<Box>
				{profile.map((el, i) =>
					<Stack key={i} spacing={2} direction='row' alignItems='center'>
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
							{/* <Box mt='5px'>
								{el.keywords && el.keywords.map((keyword, i) =>
									<Chip label={keyword} variant='filled' sx={{ m: '1px'}} />
								)}
							</Box> */}
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
							variant='filled'
							size='medium'
							sx={{ color: 'white', m: '1px' }}
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
							if (tag === 'h1') {
								return;
							} else if (tag === 'h2') {
								// console.log(tag, props, children)
								return (
									<Stack
										spacing={1} direction='row' pt='40px'
										pb={props.id === 'career-profile' ? '10px' : 0}
									>
										{headerMapping[props.id as keyof typeof headerMapping].icon}
										<Typography variant={tag} color='primary'>
											{children}
										</Typography>
									</Stack>
								);
							} else if (tag === 'h3') {
								return (
									<Typography {...props} variant={tag} color='secondary' pt='30px' pb='10px'>
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
							} else if (tag === 'Collapse') {
								const bla: { [key: number]: boolean } = {};
								// bla[props.key] = expanded[props.key] == null ? false : !expanded[props.key];
								bla[props.key] = !expanded[props.key];
								return (
									<>
										<Button
											onClick={() => setExpanded({ ...expanded, ...bla })}
											sx={{ textTransform: 'capitalize', width: '100%', mt: '15px' }}
											endIcon={
												<ExpandMoreIcon
													sx={{
														color: 'textSecondary',
														transform: !expanded[props.key] ? 'rotate(0deg)' : 'rotate(180deg)',
														transition: theme.transitions.create('transform', {
															duration: theme.transitions.duration.shortest,
														})
													}}
												/>
											}
										>
											<Typography width='100%' color='primary'>
												{t(!expanded[props.key] ? 'seeMore' : 'seeLess')}
											</Typography>
										</Button>
										<Collapse in={expanded[props.key]}>{React.createElement(tag, props, children)}</Collapse>
									</>
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
							xs={12} sm='auto'
							maxWidth={{ sm: '300px' }}
						>
							<Grid item bgcolor='#0e786d' /* */ padding='30px'>
								{headerPanel}
							</Grid>
							<Grid item bgcolor='#1fad9f' /*'#177e4b'*/ padding='30px' xs>
								{sidePanel}
							</Grid>
						</Grid>
						<Grid
							item
							xs={12} sm
							paddingX={{ xs: '18px', sm: '30px', md: '60px' }}
							paddingY={{ xs: '25px' }}
							// padding={{ sm: '30px', md: '60px' }}
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
					<SaveAsPdfButton visible={true} />
					<Stack
						spacing='inherit'
						direction='row'
					>
						<LanguageSelect color='primary' variant='standard' />
						<ThemeSwitch />
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
};

export default HomePage;