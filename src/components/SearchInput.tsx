import SearchIcon from '../assets/icons/search.svg?react';

const SearchInput: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`w-full flex items-center gap-2 border border-gray-200 rounded-8 px-2 py-4 ${className}`}>
			<SearchIcon />
			<input
				type="text"
				className="w-full bg-transparent outline-none text-neutral-50 text-12 leading-133 font-normal"
				placeholder="Search"
			/>
		</div>
	);
};

export default SearchInput;
