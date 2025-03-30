import React from 'react';
import CardTitle from './CartTitle';
import { ActivityLog } from 'db/QuoteTypes';

export interface IActivityLogCard {
	activityLog?: ActivityLog[];
}

const ActivityLogCard: React.FC<IActivityLogCard> = ({ activityLog }) => {
	return (
		<div className="bg-white relative">
			<CardTitle title="Activity Log" />
			<div className="relative pl-4 text-left max-w-[200px]">
				{activityLog?.map((log, index) => (
					<div
						key={index}
						className="relative pl-2 pb-3 border-l border-neutral-200"
					>
						<div className="absolute -left-[5px] top-0.5 w-2.5 h-2.5 bg-neutral-200 rounded-full"></div>
						<div className="text-brand-primary text-[10px]">
							{log.date}
						</div>
						<div className="text-brand-primary text-[10px] mt-0.5">
							{log.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ActivityLogCard;
