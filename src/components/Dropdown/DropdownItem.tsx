import EditIcon from '@/assets/icons/edit.svg?react';
import MailIcon from '@/assets/icons/mail.svg?react';
import AddIcon from '@/assets/icons/node-add.svg?react';
import ReminderIcon from '@/assets/icons/reminder.svg?react';
import DownloadIcon from '@/assets/icons/download.svg?react';

const DropdownItem = ({
	setIsOpen,
}: {
	setIsOpen: (value: boolean) => void;
}) => {
	const dropdownItems = [
		{ icon: EditIcon, label: 'Update details' },
		{ icon: AddIcon, label: 'Add Follow-Up' },
		{ icon: MailIcon, label: 'Send Mail' },
		{ icon: ReminderIcon, label: 'Send Reminder' },
		{ icon: DownloadIcon, label: 'Download Quote' },
	];

	return (
		<div className="fixed right-[18px] mt-2 border border-gray-200 rounded-8 bg-white p-3">
			{dropdownItems.map((item, index) => (
				<div
					className="origin-top-right bg-white ring-1z-10 hover:bg-neutral-100"
					tabIndex={-1}
					key={index}
				>
					<button
						type="button"
						className="cursor-pointer flex items-center gap-2 w-full p-3 text-sm text-brand-primary text-12 border-b border-gray-200"
						role="menuitem"
						onClick={() => {
							alert('Send Remainder clicked');
							setIsOpen(false);
						}}
					>
						{<item.icon />}
						{item.label}
					</button>
				</div>
			))}
		</div>
	);
};

export default DropdownItem;
