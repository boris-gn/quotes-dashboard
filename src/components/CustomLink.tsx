import { useLocation } from 'react-router-dom';

interface CustomLinkProps {
	url: string;
	label: string;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const CustomLink: React.FC<CustomLinkProps> = ({ url, label, Icon }) => {
	const location = useLocation();
	const isActive = location.pathname === url || location.hash === url;

	return (
		<a
			href={url}
			className={`flex items-center gap-2 min-w-[140px] p-3 border border-gray-200 rounded-8 ${
				isActive ? 'bg-brand-primary text-white' : 'text-gray-500'
			}`}
		>
			<Icon className={isActive ? 'fill-white' : 'fill-brand-primary'} />
			<span
				className={`text-12 ${
					isActive ? 'text-white' : 'text-brand-primary'
				}`}
			>
				{label}
			</span>
		</a>
	);
};

export default CustomLink;
