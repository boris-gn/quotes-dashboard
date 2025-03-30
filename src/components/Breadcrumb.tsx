import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
	pathName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pathName }) => {
	const pathSegments = pathName.split('/').filter((segment) => segment);

	if (pathSegments.length === 0) {
		return (
			<div className="text-gray-500 text-base font-normal">
				<Link to="/" className="text-gray-500 hover:underline">
					Home
				</Link>
			</div>
		);
	}

	if (pathSegments[0] === 'Quotes' && pathSegments.length === 2) {
		const quoteId = pathSegments[1];
		return (
			<div className="text-gray-500 text-base font-normal">
				<Link to="/" className="text-gray-500 hover:underline">
					X Insurance
				</Link>{' '}
				{'>'}{' '}
				<Link to="/quotes" className="text-gray-500 hover:underline">
					Quotes
				</Link>{' '}
				{'>'}{' '}
				<span className="text-gray-500">
					Detailed View (# {quoteId})
				</span>
			</div>
		);
	}

	const breadcrumbLinks = pathSegments.map((segment, index) => {
		const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
		const displayName =
			segment.charAt(0).toUpperCase() +
			segment.slice(1).replace(/-/g, ' ');

		return (
			<span key={path}>
				X Insurance {' > '}
				{index > 0 && ' > '}
				<Link to={path} className="text-gray-500 hover:underline">
					{displayName}
				</Link>
			</span>
		);
	});

	return (
		<div className="text-gray-500 text-base font-normal">
			{breadcrumbLinks}
		</div>
	);
};

export default Breadcrumb;
