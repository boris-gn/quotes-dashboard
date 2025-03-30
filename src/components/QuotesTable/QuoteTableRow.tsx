import InsuranceTypeBadge from '../InsuranceTypeBadge';
import StatusBadge from '../StatusBadge';
import { QuoteActions } from '../QuoteActions';
import { useNavigate } from 'react-router-dom';
import { IQuotesData, InsuranceType } from 'db/QuoteTypes';

interface QuoteRowProps {
	quote: IQuotesData;
	index: number;
	loading?: boolean;
}

export const QuoteRow: React.FC<QuoteRowProps> = ({ quote, loading }) => {
	const navigate = useNavigate();

	const onHandleClick = () => {
		navigate(`/quotes/${quote.quoteId}`);
	};

	return (
		<tr
			className={`${
				!loading && 'hover:bg-gray-10'
			} bg-white items-center h-[40px]`}
		>
			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
				) : (
					<div>#{quote?.quoteId}</div>
				)}
			</td>
			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
				) : (
					<div>{quote?.personalDetails.fullName}</div>
				)}
			</td>
			<td>
				{loading ? (
					<div className="h-6 w-12 bg-gray-200 animate-pulse rounded-full"></div>
				) : (
					<InsuranceTypeBadge type={quote.type as InsuranceType} />
				)}
			</td>
			<td>
				{loading ? (
					<div className="h-6 w-12 bg-gray-200 animate-pulse rounded-full"></div>
				) : (
					<StatusBadge status={quote.quoteStatus} />
				)}
			</td>
			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
				) : (
					`${quote?.quoteBreakdown.premiumAmount}`
				)}
			</td>
			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
				) : (
					quote?.expirationDates.expirationDate
				)}
			</td>
			<td className="text-14 px-2 text-gray-500 leading-[1.43] text-left font-normal">
				{loading ? (
					<div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
				) : (
					quote?.expirationDates.effectiveDate
				)}
			</td>
			<td>
				{loading ? (
					<div className="h-6 w-16 bg-gray-200 animate-pulse rounded"></div>
				) : (
					<QuoteActions onActionClick={onHandleClick} />
				)}
			</td>
		</tr>
	);
};
