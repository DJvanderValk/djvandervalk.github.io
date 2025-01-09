import * as React from 'react';

import { Typography } from '@mui/material';
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	timelineOppositeContentClasses,
	TimelineSeparator,
} from '@mui/lab';
import {
	Code as CodeIcon,
	PrecisionManufacturing as PrecisionManufacturingIcon,
	Restaurant as RestaurantIcon,
	Snowboarding as SnowboardingIcon,
	Work as WorkIcon,
} from '@mui/icons-material';

import experiences from '~docs/experiences.yaml';

interface Period {
	start: string;
	end: string;
}

interface Experience {
	icon: JSX.Element;
	// type: string;
	label: string;
	period: Period;
	role: string;
	city: string;
	description: string;
	tasks?: string[];
}

const ResumeTimeline = () => {
	return (
		<Timeline>
			{experiences.education.map((experience, i) => (
				<TimelineItem
					key={i}
					sx={{
						[`& .${timelineOppositeContentClasses.root}`]: {
							flex: 0.3,
						},
					}}
				>
					<TimelineOppositeContent
						align='right'
						variant='body2'
						sx={{ m: 'auto 0' }}
					>
						<Typography color='secondary'>{experience.period.end}</Typography>
						<Typography noWrap>{experience.city}</Typography>
					</TimelineOppositeContent>

					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot>
							{experience.icon}
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>

					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Typography variant='h6'>{experience.role}</Typography>
						<Typography>{experience.description}</Typography>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};

export default ResumeTimeline;
