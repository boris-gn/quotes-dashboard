import { useState } from 'react';
import withContainer from './Container';
import QuotesChart from './Chart/QuotesChart';
import ArrowIcon from '@/assets/icons/Vector.svg?react';

const charts = [
	{ id: '1', color: '#16A34A' },
	{ id: '2', color: '#DC2626' },
	{ id: '3', color: '#D9882F' },
	{ id: '4', color: '#033B5F' },
];

const ChartContainer: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="w-full">
			<div className="relative block xl:hidden overflow-hidden w-full">
				<div
					className="flex transition-transform duration-300 ease-in-out"
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>
					{charts.map((chart) => (
						<div
							key={chart.id}
							className="flex-shrink-0 w-full flex justify-center p-3 md:p-6 border rounded-12 border-gray-200"
						>
							<div className="flex gap-4 min-w-80">
								<div
									id="chart"
									className="w-40 min-w-40 max-w-40 h-24 min-h-24 max-h-24"
								>
									<QuotesChart
										chartColor={chart.color}
										id={chart.id}
									/>
								</div>

								<div className="flex flex-col gap-0.5 min-w-40">
									<div className="text-[14px] leading-[28px]">
										Approved Quotes
									</div>
									<div className="text-[32px] font-bold leading-[40px]">
										12
									</div>
									<div className="flex gap-2 items-center">
										<div className="rounded-full w-4 h-4 bg-success-600/40 flex items-center justify-center">
											<ArrowIcon className="w-1.5" />
										</div>
										<span className="leading-[24px]">
											10.24 %
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="hidden xl:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
				{charts.map((chart) => (
					<div key={chart.id} className="flex gap-4 min-w-80">
						<div
							id="chart"
							className="w-40 min-w-40 max-w-40 h-24 min-h-24 max-h-24"
						>
							<QuotesChart
								chartColor={chart.color}
								id={chart.id}
							/>
						</div>
						<div className="flex flex-col gap-0.5 min-w-40">
							<div className="text-[14px] leading-[28px]">
								Approved Quotes
							</div>
							<div className="text-[32px] font-bold leading-[40px]">
								12
							</div>
							<div className="flex gap-2 items-center">
								<div className="rounded-full w-4 h-4 bg-success-600/40 flex items-center justify-center">
									<ArrowIcon className="w-1.5" />
								</div>
								<span className="leading-[24px]">10.24 %</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="xl:hidden flex gap-0.5 justify-center items-center cursor-pointer mt-6 asdf">
				{charts.map((_, index) => (
					<button
						key={index}
						className={`rounded-full transition-all ${
							activeIndex === index
								? '!bg-brand-primary w-1.5 h-1.5'
								: 'w-1 h-1 !bg-brand-primary/50'
						}`}
						onClick={() => setActiveIndex(index)}
					/>
				))}
			</div>
		</div>
	);
};

const QuotesChartContainer = withContainer(ChartContainer);
export default QuotesChartContainer;
