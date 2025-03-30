import withContainer from '../Container';
import { useLocation } from 'react-router-dom';

import { sidebar } from '../../features/sidebar/dummySidebar';
import SidebarItemMobile from './SidebarItemMobile';

const MobileSidebar: React.FC = () => {
	const location = useLocation();

	return (
		<div className="w-full bg-white rounded-t-lg flex gap-3 justify-center">
			{sidebar.map((item) => (
				<SidebarItemMobile
					key={item.id}
					Icon={item.icon}
					label={item.label}
					active={location.pathname === item.url}
					className={item.mobileClassName}
					to={item.url}
				/>
			))}
		</div>
	);
};

const MobileSidebarContainer = withContainer(MobileSidebar);
export default MobileSidebarContainer;
