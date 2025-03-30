import { useEffect, useState } from 'react';
import { QuoteHeader } from './QuoteTableHeader';
import { QuoteColumnHeaders } from './QuoteColumnHeaders';
import { QuoteRow } from './QuoteTableRow';
import { QuotePagination } from './QuotePagination';
import TableSingleItem from './TableSingleItem';
import withContainer from '@/components/Container';

import { IQuotesData } from 'db/QuoteTypes';

interface QuotesTableProps {
	quotes: IQuotesData[];
	loading?: boolean;
}

const QuotesTable: React.FC<QuotesTableProps> = ({ quotes, loading }) => {
	const [isLoading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 7;

	const paginatedQuotes = quotes?.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [loading]);

	return (
		<>
			<QuoteHeader title="Quotes" />
			<div className="block md:hidden border-b border-gray-100 absolute left-0 right-0" />
			{paginatedQuotes.map((quote, index) => (
				<TableSingleItem
					className="mt-8 md:hidden block"
					loading={isLoading}
					key={quote.quoteId}
					quote={quote}
					index={index}
				/>
			))}
			<div className="hidden md:block overflow-x-auto pb-1.5">
				<table className="w-full !border-separate !border-spacing-y-3">
					<QuoteColumnHeaders />
					<tbody>
						{paginatedQuotes?.map((quote, index) => (
							<QuoteRow
								loading={isLoading}
								key={quote.quoteId}
								quote={quote}
								index={index}
							/>
						))}
					</tbody>
				</table>
			</div>
			<QuotePagination
				className="hidden md:flex"
				currentPage={currentPage}
				totalPages={Math.ceil((quotes?.length || 0) / itemsPerPage)}
				onPageChange={setCurrentPage}
			/>
		</>
	);
};

const EnhancedQuotesTable = withContainer(QuotesTable);
export default EnhancedQuotesTable;
