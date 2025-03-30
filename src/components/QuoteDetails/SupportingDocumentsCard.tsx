import React from 'react';
import DownloadIcon from '@/assets/icons/download.svg?react';
import CardTitle from './CartTitle';
import { SupportingDocuments } from 'db/QuoteTypes';

interface ISupportingDocumentsCard {
	docs?: SupportingDocuments[];
}

const SupportingDocumentsCard: React.FC<ISupportingDocumentsCard> = ({
	docs,
}) => {
	return (
		<div className="bg-white ">
			<CardTitle title="Supporting Documents" />
			{docs?.map((doc, i) => (
				<div key={i} className="space-y-2 pl-3">
					{doc.terms && (
						<div className="flex items-center">
							<span className="text-brand-primary text-xs underline">
								{doc.terms}
							</span>
							<DownloadIcon className="text-brand-primary pl-1" />
						</div>
					)}
					{doc.proof && (
						<div className="flex items-center">
							<span className="text-brand-primary text-xs underline">
								{doc.proof}
							</span>
							<DownloadIcon className="text-brand-primary pl-1" />
						</div>
					)}
					{doc.reg && (
						<div className="flex items-center">
							<span className="text-brand-primary text-xs underline">
								{doc.reg}
							</span>
							<DownloadIcon className="text-brand-primary pl-1" />
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default SupportingDocumentsCard;
