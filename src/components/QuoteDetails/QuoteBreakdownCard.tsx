import React from 'react';
import CardTitle from './CartTitle';
import { QuoteBreakdown } from 'db/QuoteTypes';

interface IQuoteBreakdownCard {
	breakdown?: QuoteBreakdown;
}

const QuoteBreakdownCard: React.FC<IQuoteBreakdownCard> = ({ breakdown }) => {
	if (!breakdown) {
		return null;
	}

	return (
		<div className="bg-white min-w-auto md:min-w-[280px]">
			<CardTitle title="Quote Breakdown" />

			<div className="space-y-2 text-left pl-3">
				<div className="flex flex-col">
					<div className="flex gap-1 pl-1">
						<span className="text-brand-primary font-bold text-12">
							Premium Amount:
						</span>
						<span className="text-brand-primary text-12 ">
							{breakdown.premiumAmount}
						</span>
						<span className="text-gray-500 text-12 ">
							per mount
						</span>
					</div>
					<div className="flex gap-1 pl-1">
						<span className="text-brand-primary font-bold text-12">
							Annual Premium:
						</span>
						<span className="text-brand-primary text-12 pl-1">
							{breakdown.annualPremium}
						</span>
					</div>
					<div className="space-y-1">
						<span className="text-brand-primary font-bold text-12">
							Discounts Applied:
						</span>

						{breakdown?.discounts.map((discount, i) => (
							<div
								key={i + discount.amount}
								className="flex pl-3"
							>
								<span className="text-brand-primary text-10">
									{discount.type}:
								</span>
								<span className="text-red-600 text-10 pl-2.5">
									{discount.amount}
								</span>
							</div>
						))}
					</div>
					<div className="flex">
						<span className="text-brand-primary font-bold text-12">
							Total Charges:
						</span>
						<div className="flex gap-1 pl-1">
							<span className="text-brand-primary text-12 font-bold">
								{breakdown.totalCharges}
							</span>
							<span className="text-gray-500 text-12">
								(after discounts)
							</span>
						</div>
					</div>
					<div className="flex ">
						<span className="text-brand-primary font-bold text-12">
							Tax:
						</span>
						<span className="text-brand-primary text-12 pl-1">
							$20
						</span>
					</div>
					<div className="flex pb-3">
						<span className="text-brand-primary font-bold text-12">
							Final Premium:
						</span>
						<span className="text-brand-primary text-12 font-bold  pl-1">
							{breakdown.finalPremium}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuoteBreakdownCard;
