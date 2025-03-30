import IconButton from './IconButton';
import MailIcon from '../assets/icons/mail.svg?react';
import EditIcon from '../assets/icons/edit.svg?react';
import ViewIcon from '../assets/icons/view.svg?react';

export type QuoteAction = 'send' | 'edit' | 'view';
interface QuoteActionsProps {
	actions?: QuoteAction[];
	onActionClick?: (action: QuoteAction) => void;
}

const actionIcons = {
	send: <MailIcon />,
	edit: <EditIcon />,
	view: <ViewIcon />,
};

export const QuoteActions: React.FC<QuoteActionsProps> = ({
	actions = ['send', 'edit', 'view'],
	onActionClick,
}) => {
	return (
		<div className="flex items-center space-x-2">
			{actions.map((action) => (
				<div
					key={action}
					className="cursor-pointer hover:bg-gray-100 rounded-md p-1"
					onClick={() => onActionClick && onActionClick(action)}
				>
					<IconButton icon={actionIcons[action]} onClick={() => {}} />
				</div>
			))}
		</div>
	);
};
