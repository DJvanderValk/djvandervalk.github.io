const personalInformation = {
	profile: {
		name: 'Dennis van der Valk',
		tagline: 'Full Stack Developer',
		dateOfBirth: '1993-04-25T15:30:00Z',
		address: {
			city: 'Den Haag'
		},
		citizenship: 'dutch',
		gender: 'male',
		// driversLicense: 'B',
		phoneNumber: '+31 6 30926100',
		mail: 'dennisvdvalk@hotmail.com',
		github: 'djvandervalk'
	},
	languages: [
		{
			key: 'dutch',
			level: 'native'
		},
		{
			key: 'english',
			level: 'fluent'
		},
		{
			key: 'german',
			level: 'intermediate'
		},
		{
			key: 'spanish',
			level: 'basic'
		}
	],
	interests: [
		'waveSurfing',
		'kiteSurfing',
		'snowboarding',
		'football',
		'boardGames'
	],
	skills: {
		info: [
			{
				key: 'Javascript',
				level: 0.9,
				keywords: [
					'react',
					'webpack',
					'pwa',
					'typescript'
				]
			},
			{
				key: 'HTML',
				level: 0.7
			},
			{
				key: 'CSS',
				level: 0.7
			},
			{
				key: 'C#',
				level: 0.6,
				keywords: [
					'wpf',
					'xaml'
				]
			},
			{
				key: 'SQL',
				level: 0.5
			},
			{
				key: 'C',
				level: 0.5
			},
			{
				key: 'Python',
				level: 0.4
			},
			{
				key: 'C++',
				level: 0.3
			}
		]
	},
	careerProfile: {
		details: 'bla bla'
	},
	workingExperience: {
		info: [
			{
				role: 'softwareDeveloper',
				company: 'SPIE Nederland',
				location: {
					city: 'Schiedam'
				},
				dateStart: '2021-01',
				dateEnd: 'presentDay',
				details: 'Bla'
			},
			{
				role: 'systemEngineer',
				company: 'SPIE Nederland',
				location: {
					city: 'Schiedam'
				},
				dateStart: '2019-06',
				dateEnd: '2021-01',
				details: 'systemEngineerDetails'
			},
			{
				role: 'waiter',
				company: 'Strandpaviljoen Zuid',
				location: {
					city: 'Den Haag'
				},
				dateStart: '2014-08',
				dateEnd: '2018-10',
				details: 'waiterDetails'
			},
			{
				role: 'snowboardTeacher',
				company: 'Freaks on Snow',
				location: {
					country: 'austria',
					city: 'Ellmau'
				},
				dateStart: '2016-12',
				dateEnd: '2017-03',
				details: 'snowboardTeacherDetails'
			}
		]
	},
	education: {
		info: [
			{
				degree: 'electricalEngineering',
				university: 'Hogeschool Rotterdam',
				location: {
					city: 'Rotterdam'
				},
				dateStart: '2010',
				dateEnd: '2016',
				details: 'Bla'
			}
		]
	},
	courses: [
		'filler'
	],
	otherExperiences: [
		'filler'
	]
};

export default personalInformation;