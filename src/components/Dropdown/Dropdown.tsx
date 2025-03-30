import { useState, useRef, useEffect, isValidElement } from 'react';
import { PersonalDetails } from 'db/QuoteTypes';
import ArrowIcon from '@/assets/icons/arrow-left.svg?react';
import DropdownItem from './DropdownItem';
import { usePersonalDetailsSelector } from '@/selectors/quoteSelector';

type DropdownProps = {
	Icon?: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ Icon }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const data: PersonalDetails | undefined = usePersonalDetailsSelector();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="relative" ref={dropdownRef}>
			{isValidElement(Icon) ? (
				<div onClick={toggleDropdown}>{Icon}</div>
			) : (
				<button
					onClick={toggleDropdown}
					type="button"
					className="flex items-center w-fit rounded-8 md:border border-gray-200 px-0 md:px-4 md:py-3 bg-white text-12 font-medium text-gray-500 hover:bg-gray-50 leading-133"
					aria-expanded={isOpen}
					aria-haspopup="true"
				>
					<div className="mr-2 w-10 h-10 md:w-6 md:h-6 rounded-full bg-gray-200 overflow-hidden">
						<img alt={data?.fullName} src={data?.photo} />
					</div>
					<div className="mr-10 hidden md:block">
						Boris Gevorgyan{data?.fullName}
					</div>
					<ArrowIcon
						className={`w-4 h-4 !hidden md:!block ${
							isOpen ? 'rotate-90' : 'rotate-270'
						}`}
					/>
				</button>
			)}
			{isOpen && <DropdownItem setIsOpen={setIsOpen} />}
		</div>
	);
};

export default Dropdown;
