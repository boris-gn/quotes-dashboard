import withContainer from '../Container';
import IconButton from '../IconButton';
import InsuranceTypeBadge from '../InsuranceTypeBadge';
import MailIcon from '@/assets/icons/mail.svg?react';
import EditIcon from '@/assets/icons/edit.svg?react';
import EyeIcon from '@/assets/icons/view.svg?react';
import { useNavigate } from 'react-router-dom';
import { IQuotesData } from 'db/QuoteTypes';
import { InsuranceType } from '../InsuranceTypeBadge';

interface TableSingleItemProps {
	quote: IQuotesData;
	index: number;
	loading?: boolean;
}

const TableSingleItem: React.FC<TableSingleItemProps> = ({
	quote,
	loading,
}) => {
	const navigate = useNavigate();

	const handleRowClick = () => {
		navigate(`/quotes/${quote.quoteId}`);
	};

	if (loading) {
		return (
			<div className="flex flex-col gap-2 animate-pulse">
				<div className="flex gap-x-8 gap-y-2 flex-wrap">
					<div className="h-4 w-24 bg-gray-200 rounded"></div>
					<div className="h-4 w-16 bg-gray-200 rounded"></div>
				</div>
				<div className="h-4 w-32 bg-gray-200 rounded"></div>
				<div className="h-4 w-20 bg-gray-200 rounded"></div>
				<div className="h-4 w-28 bg-gray-200 rounded"></div>
				<div className="h-4 w-24 bg-gray-200 rounded"></div>
				<div className="h-4 w-20 bg-gray-200 rounded"></div>
				<div className="flex gap-2">
					<div className="h-10 w-1/2 bg-gray-200 rounded"></div>
					<div className="h-10 w-1/2 bg-gray-200 rounded"></div>
				</div>
				<div className="h-10 w-full bg-gray-200 rounded mt-2"></div>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-x-8 gap-y-2 flex-wrap">
				<div className="flex gap-1">
					<span className="font-bold leading-6">Quote ID:</span>
					<span className="font-normal leading-6">
						{quote.quoteId}
					</span>
				</div>
				<div className="flex gap-1">
					<span className="font-bold leading-6">Status</span>
					<span className="font-normal leading-6">
						{quote.quoteStatus}
					</span>
				</div>
			</div>
			<div className="flex gap-1">
				<span className="font-bold leading-6">Client Name:</span>
				<span className="font-normal leading-6">
					{quote.personalDetails.fullName}
				</span>
			</div>
			<div className="flex gap-1">
				<span className="font-bold leading-6">Type:</span>
				<span className="font-normal leading-6">
					<InsuranceTypeBadge type={quote.type as InsuranceType} />
				</span>
			</div>
			<div className="flex gap-1">
				<span className="font-bold leading-6">Premium Amount:</span>
				<span className="font-normal leading-6">
					{quote.quoteBreakdown.premiumAmount}
				</span>
			</div>
			<div className="flex gap-1">
				<span className="font-bold leading-6">Expiry Date:</span>
				<span className="font-normal leading-6">
					{quote.expirationDates.expirationDate}
				</span>
			</div>
			<div className="flex gap-1">
				<span className="font-bold leading-6">Last Updated:</span>
				<span className="font-normal leading-6">
					{quote.expirationDates.effectiveDate}
				</span>
			</div>
			<div className="flex gap-2">
				<IconButton
					className="w-1/2"
					icon={<MailIcon />}
					label="Email"
					onClick={() => {}}
				/>
				<IconButton
					className="w-1/2"
					icon={<EditIcon />}
					label="Edit"
					onClick={() => {}}
				/>
			</div>
			<IconButton
				className="w-full mt-2"
				icon={<EyeIcon />}
				label="View"
				onClick={handleRowClick}
			/>
		</div>
	);
};

const TableSingleItemContainer = withContainer(TableSingleItem);
export default TableSingleItemContainer;
