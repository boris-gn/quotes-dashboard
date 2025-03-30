import React from 'react';
import CardTitle from './CartTitle';
import { ContactInformation } from 'db/QuoteTypes';

type ContactInformationCardProps = {
	contactInfo?: ContactInformation;
};

const ContactInformationCard: React.FC<ContactInformationCardProps> = ({
	contactInfo,
}) => {
	return (
		<div className="bg-white text-left">
			<CardTitle title="Contact Information" />
			<div className="space-y-2">
				<div className="px-[14px]">
					<span className="mr-1 text-brand-primary font-bold text-xs w-24">
						Mobile Phone:
					</span>
					<span className="text-brand-primary text-xs">
						{contactInfo?.mobilePhone}
					</span>
				</div>
				<div className="px-[14px]">
					<span className="mr-1 text-brand-primary font-bold text-xs w-24">
						Home Phone:
					</span>
					<span className="text-brand-primary text-xs">
						{contactInfo?.homePhone}
					</span>
				</div>
				<div className="px-[14px]">
					<span className="mr-1 text-brand-primary font-bold text-xs w-24">
						Email:
					</span>
					<span className="text-brand-primary text-xs">
						{contactInfo?.email}
					</span>
				</div>
				<div className="px-[14px] mb-[24px]">
					<span className="mr-1 text-brand-primary font-bold text-xs w-24">
						Address:
					</span>
					<span className="text-brand-primary text-xs">
						{contactInfo?.address}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContactInformationCard;
