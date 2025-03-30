import React from 'react';
import CardTitle from './CartTitle';
import { PolicyInformation } from 'db/QuoteTypes';

type PolicyInformationCardProps = {
	policyInfo?: PolicyInformation;
};

const PolicyInformationCard: React.FC<PolicyInformationCardProps> = ({
	policyInfo,
}) => {
	return (
		<div className="bg-white text-left">
			<CardTitle title="Policy Information" />
			<div className="space-y-2">
				<div className="px-[14px]">
					<span className="mr-1 text-brand-primary font-bold text-xs w-36">
						Policy Type:
					</span>
					<span className="text-brand-primary text-xs">
						{policyInfo?.policyType}
					</span>
				</div>
				<div className="px-[14px]">
					<span className="mr-1 text-brand-primary font-bold text-xs w-36">
						Policy Description:
					</span>
					<span className="text-brand-primary text-xs">
						{policyInfo?.policyDescription}
					</span>
				</div>
				<div className="px-3">
					<span className="mr-1 text-brand-primary font-bold text-xs w-36">
						Coverage Amount:
					</span>
					<span className="text-brand-primary text-xs">
						{policyInfo?.coverageAmount}
					</span>
				</div>
				<div className="px-3  mb-[24px]">
					<span className="mr-1 text-brand-primary font-bold text-xs w-36">
						Deductible:
					</span>
					<span className="text-brand-primary text-xs">
						{policyInfo?.policyDescription}
					</span>
				</div>
			</div>
		</div>
	);
};

export default PolicyInformationCard;
