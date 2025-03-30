import { useState } from 'react';
import PersonalDetailsCard from './QuoteDetails/PersonalDetailsCard';
import ContactInformationCard from './QuoteDetails/ContactInformationCard';
import PolicyInformationCard from './QuoteDetails/PolicyInformationCard';
import CustomerHistoryCard from './QuoteDetails/CustomerHistoryCard';
import withContainer from './Container';
import ActionButtons from './QuoteDetails/ActionButtons';
import ExpirationDatesCard from './QuoteDetails/ExpirationDatesCard';
import QuoteBreakdownCard from './QuoteDetails/QuoteBreakdownCard';
import QuoteStatusCard from './QuoteDetails/QuoteStatusCard';
import SupportingDocumentsCard from './QuoteDetails/SupportingDocumentsCard';
import { useNavigate } from 'react-router-dom';
import Dropdown from '@/components/Dropdown';
import CustomLink from './CustomLink';
import { useQuoteListSelector } from '@/selectors/quoteSelector';

import Edit from '../assets/icons/edit.svg?react';
import Follow from '../assets/icons/node-add.svg?react';
import Email from '../assets/icons/mail.svg?react';
import Reminder from '../assets/icons/reminder.svg?react';
import Download from '../assets/icons/Download.svg?react';
import ActivityLogCard from './QuoteDetails/ActivityLogCard';
import ArrowLeftIcon from '../assets/icons/arrow-left.svg?react';
import CopyIcon from '../assets/icons/copy.svg?react';
import MoreIcon from '../assets/icons/more-vertical.svg?react';
import UserIcon from '../assets/icons/user.svg?react';
import QuotesIcon from '../assets/icons/policy.svg?react';
import LogIcon from '../assets/icons/node-add.svg?react';

const links = [
	{
		url: '#personalDetails',
		label: 'Personal Details',
		Icon: UserIcon,
	},
	{
		url: '#quoteDetails',
		label: 'Quote Details',
		Icon: QuotesIcon,
	},
	{
		url: '#activityLog',
		label: 'Activity Log',
		Icon: LogIcon,
	},
];

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

const InsuranceQuoteDetails: React.FC<{ id: string }> = ({ id }) => {
	const quotes = useQuoteListSelector();
	const [copied, setCopied] = useState(false);
	const navigate = useNavigate();

	const onHandleClick = () => {
		navigate('/quotes');
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(`#${id}`).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 1000);
		});
	};

	return (
		<>
			{quotes?.map(
				(quote) =>
					quote.quoteId === id && (
						<div
							key={quote.quoteId}
							className="overflow-x-auto flex flex-col md:flex-row items-stretch min-h-[656px] p-t-3"
						>
							<div className="relative flex md:hidden flex-1 items-center justify-between pb-[14px] before:content-[''] before:absolute before:left-3 before:bottom-0 before:w-full before:h-[1px] before:bg-gray-200">
								<ArrowLeftIcon
									className="w-6 h-6"
									onClick={onHandleClick}
								/>
								<div className="text-gray-500 text-base flex gap-3 items-center relative">
									Quote Details - #{quote.quoteId}{' '}
									<CopyIcon
										className="w-6 h-6 cursor-pointer"
										onClick={handleCopy}
									/>
									{copied && (
										<div className="absolute bottom-full -top-[2px] -right-[45px] bg-gray-200 text-brand-primary text-xs rounded-md">
											Copied!
										</div>
									)}
								</div>
								<div>
									<Dropdown
										Icon={<MoreIcon className="w-6 h-6" />}
									/>
								</div>
							</div>

							<div className="md:hidden flex overflow-x-auto gap-3 no-scrollbar mt-1 mb-3">
								{links.map((link) => (
									<CustomLink
										key={link.label}
										url={link.url}
										label={link.label}
										Icon={link.Icon}
									/>
								))}
							</div>

							<div
								id="personalDetails"
								className="pr-10 w-full md:w-[380px] flex flex-col gap-4"
							>
								<PersonalDetailsCard
									details={quote.personalDetails}
								/>
								<ContactInformationCard
									contactInfo={
										quote.personalDetails.contactInformation
									}
								/>
								<PolicyInformationCard
									policyInfo={quote.policyInformation}
								/>
								<CustomerHistoryCard
									history={quote.customerHistory}
								/>
							</div>
							<div
								id="quoteDetails"
								className="border-none md:border-x border-gray-200 px-[48px] w-full md:max-w-[350px] flex flex-col gap-4"
							>
								<QuoteStatusCard status={quote.quoteStatus} />
								<QuoteBreakdownCard
									breakdown={quote.quoteBreakdown}
								/>
								<ExpirationDatesCard
									dates={quote.expirationDates}
								/>
								<SupportingDocumentsCard
									docs={quote.supportingDocuments}
								/>
							</div>
							<div
								id="activityLog"
								className="w-full md:w-[315px] px-12 flex flex-col"
							>
								<ActivityLogCard
									activityLog={quote.activityLog}
								/>
							</div>
						</div>
					)
			)}
			<div className="mt-8 md:block hidden">
				<ActionButtons actions={actions} />
			</div>
		</>
	);
};

const EnhancedInsuranceQuoteDetails = withContainer(InsuranceQuoteDetails);
export default EnhancedInsuranceQuoteDetails;
