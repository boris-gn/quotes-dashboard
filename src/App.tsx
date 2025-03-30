import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useFetchQuotes } from './hooks/useFetch';
import { setQuotesList } from './store/slices/quoteSlice';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from './hooks/useRedux';
import Header from './components/Header';
import EnhancedSidebar from './components/Sidebar/Sidebar';
import MobileSidebarContainer from './components/Sidebar/MobileSidebar';
import SearchInput from './components/SearchInput';
import Breadcrumb from './components/Breadcrumb';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const App = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const { data, isLoading } = useFetchQuotes();
	const path =
		location.pathname.slice(1).charAt(0).toUpperCase() +
		location.pathname.slice(2);
	const pageName =
		location.pathname.split('/')[1]?.charAt(0).toUpperCase() +
			location.pathname.split('/')[1]?.slice(1) || 'Home';

	useEffect(() => {
		if (data) {
			dispatch(setQuotesList(data));
		}
	}, [data, dispatch]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<>
			<div className="flex gap-4 h-screen w-full overflow-hidden pb-25 md:pb-0">
				<EnhancedSidebar className="hidden md:block w-fit !p-4" />
				<div className="flex gap-4 flex-col overflow-hidden w-full">
					<div className="md:flex md:overflow-hidden md:justify-between md:relative fixed top-0 left-0 right-0 bg-white px-5 md:px-0 pt-5 md:pt-0 pb-4 md:pb-0">
						<Header pageName={pageName} path={path} />
					</div>
					<SearchInput className="md:mt-0 mt-14 md:hidden" />
					<div className="md:hidden block">
						<h1 className="text-24 text-brand-primary font-bold racking-minus-1 leading-117 mb-0.5">
							{pageName}
						</h1>
						<Breadcrumb pathName={path} />
						<p className="leading-115 text-12 text-gray-500 text-base font-normal tracking-normal">
							Gallagher Insurance as Quotes
						</p>
					</div>
					<div className="flex overflow-hidden">
						<Outlet />
					</div>
				</div>
			</div>

			<MobileSidebarContainer className="!max-w-full flex w-full md:hidden fixed bottom-0 !p-3 left-0" />
		</>
	);
};

export default App;
