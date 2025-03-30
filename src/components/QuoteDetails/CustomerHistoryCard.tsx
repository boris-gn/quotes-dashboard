import React from 'react';
import CardTitle from './CartTitle';
import StatusBadge from '@/components/StatusBadge';
import { CustomerHistory } from 'db/QuoteTypes';

type CustomerHistoryCardProps = {
	history?: CustomerHistory[];
};

const CustomerHistoryCard: React.FC<CustomerHistoryCardProps> = ({
	history,
}) => {
	return (
		<div className="bg-white">
			<CardTitle title="Customer History" />

			<div className="space-y-4 text-left">
				<div className="flex items-center">
					<span className="text-brand-primary font-bold text-xs">
						Previous Policies:
					</span>
				</div>
				{history?.map((historyItem) => {
					return (
						<div
							key={historyItem.policyId}
							className="flex flex-col gap-2"
						>
							<div className="flex-col md:flex-row flex md:items-center">
								<span className="text-brand-primary text-[10px]">
									Policy {historyItem.policyId}
									{historyItem.type}:
								</span>
								<StatusBadge isFilled status="Active" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CustomerHistoryCard;
