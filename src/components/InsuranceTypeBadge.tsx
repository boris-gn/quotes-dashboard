import { FC } from 'react';
import LifeIcon from '../assets/icons/health.svg?react';
import BuildingIcon from '../assets/icons/building.svg?react';
import HouseIcon from '../assets/icons/house.svg?react';
import AirplaneIcon from '../assets/icons/airplane.svg?react';
import CarIcon from '../assets/icons/car.svg?react';

export type InsuranceType =
	| 'Life'
	| 'Business'
	| 'House'
	| 'Travel'
	| 'Vehicle';

interface InsuranceTypeBadgeProps {
	type: InsuranceType;
}

const icons: Record<InsuranceType, FC<React.SVGProps<SVGSVGElement>> | null> = {
	Life: LifeIcon,
	Business: BuildingIcon,
	House: HouseIcon,
	Travel: AirplaneIcon,
	Vehicle: CarIcon,
};

const bgColors = {
	Life: 'bg-blue-20 text-blue-60',
	Business: 'bg-teal-20 text-teal-60',
	House: 'bg-blue-20 text-blue-60',
	Travel: 'bg-pink-20 text-pink-60',
	Vehicle: 'bg-indigo-20 text-indigo-60',
};

const InsuranceTypeBadge: FC<InsuranceTypeBadgeProps> = ({ type }) => {
	const Icon = icons[type];

	return (
		<div
			className={`flex mx-2 items-center justify-start gap-1 px-2 py-0.5 rounded-100 w-18.5 ${bgColors[type]}`}
		>
			{Icon && <Icon width={12} height={12} />}
			<span className="text-10 font-bold leading-116">{type}</span>
		</div>
	);
};

export default InsuranceTypeBadge;
