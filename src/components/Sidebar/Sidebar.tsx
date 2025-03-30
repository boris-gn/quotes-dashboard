import SidebarItem from './SidebarItem';
import SearchInput from '../SearchInput';
import withContainer from '../Container';
import { useLocation } from 'react-router-dom';

import { sidebar } from '../../features/sidebar/dummySidebar';

const Sidebar: React.FC = () => {
	const location = useLocation();

	return (
		<aside className="w-56 bg-white flex flex-col gap-3">
			<div className="border-b border-b-gray-200 pb-3">
				<SearchInput />
			</div>
			<nav className="flex flex-col gap-2">
				<ul>
					{sidebar.map((item) => (
						<SidebarItem
							key={item.id}
							Icon={item.icon}
							label={item.label}
							active={location.pathname === item.url}
							className={item.className}
							to={item.url}
						/>
					))}
				</ul>
			</nav>
		</aside>
	);
};

const EnhancedSidebar = withContainer(Sidebar);
export default EnhancedSidebar;
