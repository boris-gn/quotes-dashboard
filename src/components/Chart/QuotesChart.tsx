import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'Jan', value: 28 },
	{ name: 'Feb', value: 12 },
	{ name: 'Mar', value: 25 },
	{ name: 'Apr', value: 40 },
	{ name: 'May', value: 38 },
	{ name: 'Jun', value: 60 },
	{ name: 'Jul', value: 76 },
	{ name: 'Aug', value: 70 },
	{ name: 'Sep', value: 50 },
	{ name: 'Oct', value: 77 },
	{ name: 'Nov', value: 30 },
	{ name: 'Dec', value: 80 },
];

interface QuotesChartProps {
	chartColor: string;
	id: string;
}

const QuotesChart: React.FC<QuotesChartProps> = ({ chartColor, id }) => {
	const gradientId = `colorUv-${id}`;

	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart data={data}>
				<defs>
					<linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="5%"
							stopColor={chartColor}
							stopOpacity={0.8}
						/>
						<stop
							offset="95%"
							stopColor="#8884d8"
							stopOpacity={0}
						/>
					</linearGradient>
				</defs>
				<Area
					type="linear"
					dataKey="value"
					stroke={chartColor}
					strokeWidth={2}
					fillOpacity={1}
					fill={`url(#${gradientId})`}
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default QuotesChart;
