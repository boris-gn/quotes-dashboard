import PersonalDetailsCard from './QuoteDetails/PersonalDetailsCard';
import ContactInformationCard from './QuoteDetails/ContactInformationCard';
import PolicyInformationCard from './QuoteDetails/PolicyInformationCard';
import CustomerHistoryCard from './QuoteDetails/CustomerHistoryCard';
import QuoteStatusCard from './QuoteDetails/QuoteStatusCard';
import QuoteBreakdownCard from './QuoteDetails/QuoteBreakdownCard';
import ExpirationDatesCard from './QuoteDetails/ExpirationDatesCard';
import SupportingDocumentsCard from './QuoteDetails/SupportingDocumentsCard';
import ActivityLogCard from './QuoteDetails/ActivityLogCard';
import withContainer from './Container';
import ActionButtons from './QuoteDetails/ActionButtons';
import { ActivityLog } from 'db/QuoteTypes';
import { IQuotesData } from 'db/QuoteTypes';
import { useQuoteDataSelector } from '@/selectors/quoteSelector';

import Edit from '@/assets/icons/edit.svg?react';
import Follow from '@/assets/icons/node-add.svg?react';
import Email from '@/assets/icons/mail.svg?react';
import Reminder from '@/assets/icons/reminder.svg?react';
import Download from '@/assets/icons/Download.svg?react';

const actions = [
	{
		icon: <Edit />,
		text: 'Update Details',
	},
	{
		icon: <Follow />,
		text: 'Add Follow-up',
	},
	{
		icon: <Email />,
		text: 'Send Mail',
	},
	{
		icon: <Reminder />,
		text: 'Send Remainder',
	},
	{
		icon: <Download />,
		text: 'Add Follow-up',
	},
];

const Account = withContainer((props: { data: IQuotesData }) => (
	<div className="pr-10 w-full md:w-[360px] flex flex-col gap-4">
		<PersonalDetailsCard details={props.data.personalDetails} />
		<ContactInformationCard
			contactInfo={props.data.personalDetails.contactInformation}
		/>
		<PolicyInformationCard policyInfo={props.data.policyInformation} />
		<CustomerHistoryCard history={props.data.customerHistory} />
	</div>
));

const QuarterDetails = withContainer((props: { data: IQuotesData }) => (
	<div className="border-none md:border-x border-gray-200 px-[48px] w-full md:max-w-[350px] flex flex-col gap-4">
		<QuoteStatusCard status={props.data.quoteStatus} />
		<QuoteBreakdownCard breakdown={props.data.quoteBreakdown} />
		<ExpirationDatesCard dates={props.data.expirationDates} />
		<SupportingDocumentsCard docs={props.data.supportingDocuments} />
	</div>
));

const Actions = withContainer((props: { logs: ActivityLog[] }) => (
	<div className="w-full md:w-[315px] px-12 flex flex-col">
		<ActivityLogCard activityLog={props.logs} />
	</div>
));

const InsuranceQuoteDetailsMobile: React.FC = () => {
	const quotes = useQuoteDataSelector();
	if (!quotes) {
		return null;
	}

	return (
		<>
			<div className="flex flex-col md:flex-row items-stretch min-h-[656px] max-w-[975px] gap-2.5">
				<Account data={quotes} />

				<QuarterDetails data={quotes} />

				<Actions logs={quotes.activityLog} />
			</div>

			<div className="mt-8 md:block hidden">
				<ActionButtons actions={actions} />
			</div>
		</>
	);
};

const EnhancedInsuranceQuoteDetailsMobile = withContainer(
	InsuranceQuoteDetailsMobile
);
export default EnhancedInsuranceQuoteDetailsMobile;
