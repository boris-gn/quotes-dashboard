interface IconButtonProps {
	icon: React.ReactNode;
	onClick: () => void;
	label?: string;
	className?: string;
	labelClass?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
	icon,
	onClick,
	label,
	className,
	labelClass,
}) => {
	return (
		<button
			onClick={onClick}
			className={`flex items-center justify-center min-w-[30px] border border-gray-100 px-2 py-1.5 rounded-lg hover:cursor-pointer ${className}`}
		>
			{icon}
			{label && <span className={`ml-2 ${labelClass}`}>{label}</span>}{' '}
		</button>
	);
};

export default IconButton;
