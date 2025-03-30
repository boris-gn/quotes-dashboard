import IconButton from './IconButton';
import Dropdown from '@/components/Dropdown';
import BellIcon from '../assets/icons/bell.svg?react';
import Breadcrumb from './Breadcrumb';

const Header: React.FC<{ pageName: string; path: string }> = ({
	pageName,
	path,
}) => {
	return (
		<>
			<div className="hidden md:block">
				<h1 className="text-48 text-brand-primary font-bold racking-minus-1 leading-117">
					{!pageName ? 'Home' : pageName}
				</h1>
				<div className="leading-115 text-gray-500 text-base font-normal tracking-normal mb-3">
					<Breadcrumb pathName={path} />
				</div>
			</div>
			<div className="w-full md:w-auto flex flex-row-reverse md:flex-row md:justify-end justify-between gap-3 ">
				<IconButton
					className="md:w-12 md:h-12 w-10 h-10 !rounded-full !md:rounded-lg"
					icon={<BellIcon className="w-6 h-6" />}
					onClick={() => {}}
				/>
				<Dropdown />
			</div>
		</>
	);
};

export default Header;
