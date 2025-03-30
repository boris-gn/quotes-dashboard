import { EventsData } from './eventTypes';

export const initialEvents: EventsData = {
	meetings: [
		{
			id: 1,
			occasion: 'Project Kickoff Meeting',
			for_date: '2025-04-01',
			event_name: 'meetings',
			is_restricted: false,
		},
		{
			id: 2,
			occasion: 'Sprint Review',
			for_date: '2025-04-10',
			event_name: 'meetings',
			is_restricted: true,
		},
	],
	deadlines: [
		{
			id: 3,
			occasion: 'Final Report Submission',
			for_date: '2025-04-05',
			event_name: 'deadlines',
			is_restricted: false,
		},
		{
			id: 4,
			occasion: 'Code Freeze',
			for_date: '2025-04-12',
			event_name: 'deadlines',
			is_restricted: true,
		},
	],
	renewals: [
		{
			id: 5,
			occasion: 'Domain Renewal',
			for_date: '2025-04-07',
			event_name: 'renewals',
			is_restricted: false,
		},
		{
			id: 6,
			occasion: 'SSL Certificate Renewal',
			for_date: '2025-04-15',
			event_name: 'renewals',
			is_restricted: true,
		},
	],
};
