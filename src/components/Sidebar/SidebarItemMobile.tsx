import { Link } from 'react-router-dom';

interface SidebarItemProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	label: string;
	to: string;
	active?: boolean;
	className?: string;
}

const SidebarItemMobile: React.FC<SidebarItemProps> = ({
	Icon,
	label,
	to,
	active = false,
	className = '',
}) => {
	return (
		<div className="list-none relative min-w-11">
			<Link
				to={to}
				className={`${active ? 'absolute left-1/2 transform -translate-x-1/2 -top-3' : ''} ${className} flex flex-col items-center gap-2.5 p-2 justify-center`}
			>
				<Icon className={`${active ? className : ''} w-7.5 h-7.5`} />
				<span className={'text-10 font-medium'}>
					{label}
					{active && <div className='-bottom-3 absolute left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded'></div>}
				</span>
			</Link>
		</div>
	);
};

export default SidebarItemMobile;
