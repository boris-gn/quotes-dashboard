import { FC } from 'react';

export type StatusType =
	| 'Pending'
	| 'Approved'
	| 'Rejected'
	| 'Expired'
	| 'Active'
	| string;

interface InsuranceTypeBadgeProps {
	status?: StatusType;
	isFilled?: boolean;
}

const bgColors = {
	Pending: {
		bg: 'bg-brand-50',
		opacity: 'bg-brand-50/50',
	},
	Approved: {
		bg: 'bg-success-600',
		opacity: 'bg-success-600/50',
	},
	Rejected: {
		bg: 'bg-error-600',
		opacity: 'bg-error-600/50',
	},
	Active: {
		bg: 'bg-success-600/50',
		opacity: 'bg-success-600/50',
	},
	Expired: {
		bg: 'bg-warning-800',
		opacity: 'bg-warning-800/50',
	},
};

const StatusBadge: FC<InsuranceTypeBadgeProps> = ({ status, isFilled }) => {
	const bgColor = bgColors[status as keyof typeof bgColors];

	return (
		<div
			className={`flex mx-2 items-center justify-start gap-1 px-2 py-0.5 rounded-100 w-20 ${
				bgColor[isFilled ? 'opacity' : 'bg']
			}`}
		>
			<div
				className={`w-3 h-3 rounded-full ${
					isFilled ? bgColor.bg : 'bg-white '
				}`}
			/>
			<span className="text-10 text-white font-bold leading-116">
				{status}
			</span>
		</div>
	);
};

export default StatusBadge;
