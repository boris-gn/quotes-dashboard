import { useParams } from 'react-router-dom';
import EnhancedInsuranceQuoteDetails from '../components/InsuranceQuoteDetails';

const QuotesDetails = () => {
	const { id } = useParams<{ id: string }>();

	if (!id) return null;

	return (
		<div className="overflow-x-auto w-full">
			<EnhancedInsuranceQuoteDetails id={id} />
		</div>
	);
};

export default QuotesDetails;
