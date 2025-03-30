import { Link } from 'react-router-dom';

interface SidebarItemProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	label: string;
	to: string;
	active?: boolean;
	className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	Icon,
	label,
	to,
	active = false,
	className = '',
}) => {
	return (
		<li className="list-none">
			<Link
				to={to}
				className={`
          flex items-center gap-3 p-3 rounded-lg transition-colors duration-200
          ${
				active
					? 'bg-brand-primary text-white'
					: 'hover:bg-neutral-100 text-default-font'
			}
          ${className}
        `}
				aria-current={active ? 'page' : undefined}
			>
				<Icon className={active ? className : ''} />
				<span
					className={`text-sm font-medium ${
						active ? 'text-white' : 'text-default-font'
					}`}
				>
					{label}
				</span>
			</Link>
		</li>
	);
};

export default SidebarItem;
