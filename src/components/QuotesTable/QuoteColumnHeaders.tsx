import React from 'react';

export const QuoteColumnHeaders: React.FC = () => {
	const headers = [
		'Quote ID',
		'Client Name',
		'Type',
		'Status',
		'Premium Amount',
		'Expire Date',
		'Last Updated',
		'Actions',
	];

	return (
		<thead>
			<tr className="bg-gray-200">
				{headers.map((header, index) => (
					<th
						key={index}
						className={`min-w-[100px] p-2  text-left text-14 text-brand-primary font-medium truncate leading-20 ${
							index === headers.length - 1 && 'rounded-r-8'
						} ${!index && 'rounded-l-8'}`}
					>
						{header}
					</th>
				))}
			</tr>
		</thead>
	);
};
