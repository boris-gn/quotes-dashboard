import LeftIcon from '../../assets/icons/arrow-left.svg?react';
import RightIcon from '../../assets/icons/arrow-right.svg?react';

interface QuotePaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	className?: string;
}

export const QuotePagination: React.FC<QuotePaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
	className,
}) => {
	return (
		<div
			className={`flex items-center justify-center space-x-2 mt-4 ${className}`}
		>
			{/* Previous Arrow */}
			<button
				className="arrow-left-01-sharp cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				<LeftIcon />
			</button>

			{/* Page Numbers */}
			{[...Array(totalPages)].map((_, index) => {
				const page = index + 1;
				return (
					<button
						key={page}
						onClick={() => onPageChange(page)}
						className={`
              flex items-center justify-center w-6 h-6
              rounded-full text-gray-600 leading-133
              ${
					currentPage === page
						? '!bg-brand-primary text-white'
						: 'text-[#596774] bg-transparent cursor-pointer'
				}
            `}
					>
						{page}
					</button>
				);
			})}

			{/* Next Arrow */}
			<button
				className="arrow-right-01-sharp cursor-pointer disabled:opacity-50"
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				<RightIcon />
			</button>
		</div>
	);
};
