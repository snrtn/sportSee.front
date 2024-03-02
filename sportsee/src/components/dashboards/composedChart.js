import { LineChart, Line, XAxis, Tooltip, ReferenceArea } from 'recharts';
import './composedChart.styles.css';

const ComposedChart = ({ data }) => {
	const days = (day) => {
		const week = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'];
		return week[day];
	};

	function CustomTooltip({ active, payload, label }) {
		if (active && payload && payload.length) {
			return (
				<div className='customTooltip'>
					<p>{`${payload[0].value} min`}</p>
				</div>
			);
		}

		return null;
	}

	const chartStyle = { background: 'transparent' };

	return (
		<div className='composedChart_container'>
			<div className='line'></div>
			<div className='composedChart_title'>
				<p>Durée moyenne des sessions</p>
			</div>
			<LineChart
				width={300}
				height={300}
				data={data.sessions}
				margin={{ top: 80, right: 15, left: 15, bottom: 30 }}
				style={chartStyle}
				className='in_composedChart_container'
			>
				<XAxis
					axisLine={false}
					tickLine={false}
					dataKey='day'
					tickFormatter={days}
					tick={{ fill: '#FFFFFF80', fontSize: 15 }}
					dy={10}
				/>
				<Tooltip content={<CustomTooltip />} />
				<ReferenceArea x1={'S'} x2={'D'} y1={60} y2={60} stroke='green' strokeOpacity={1} />
				<Line type='natural' dataKey='sessionLength' dot={false} stroke='url(#gradient)' />
				<defs>
					<linearGradient id='gradient' x1='1' y1='0' x2='0' y2='0'>
						<stop offset='10%' stopColor='#FFFFFF' stopOpacity={1} />
						<stop offset='20%' stopColor='#FFFFFF' stopOpacity={0.7} />
					</linearGradient>
				</defs>
			</LineChart>
		</div>
	);
};

export default ComposedChart;
