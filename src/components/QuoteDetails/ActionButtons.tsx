import IconButton from '../IconButton';

interface ActionButtonsProps {
	actions?: {
		icon?: React.ReactNode;
		text: string;
	}[];
	onActionClick?: (text: string) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
	actions,
	onActionClick,
}) => {
	return (
		<div className="flex flex-wrap justify-center gap-2">
			{actions?.map((action, index) => (
				<div
					key={index}
					className="flex-none basis-[170px] justify-center flex items-center cursor-pointer border border-gray-100 hover:bg-neutral-100 rounded-md py-1 my-1 px-2"
					onClick={() => onActionClick && onActionClick(action.text)}
				>
					<IconButton
						className="border-none text-12"
						icon={action.icon}
						onClick={() => {}}
						label={action.text}
					/>
				</div>
			))}
		</div>
	);
};

export default ActionButtons;
