import { RadialBarChart, RadialBar } from 'recharts';
import './radialBarCharts.styles.css';

const RadialBarCharts = ({ data }) => {
	const score = isNaN(parseInt(data.score)) ? 0 : parseInt(data.score);

	return (
		<div className='pie_container'>
			<div className='pie_title'>
				<p>Score</p>
			</div>
			<div>
				<div className='pie_score'>
					<span className='percent'>{data.score}%</span>
					<span className='text'>de votre objectif</span>
				</div>
			</div>
			<RadialBarChart
				width={300}
				height={300}
				className='pie_wrapper'
				cx='50%'
				cy='50%'
				innerRadius={90}
				outerRadius={170}
				barSize={10}
				data={[{ name: 'Score', value: score }]}
				fill='#FF0000'
				startAngle={90}
				endAngle={90 + (360 * (isNaN(parseInt(data.score)) ? 0 : parseInt(data.score) % 100)) / 100}
			>
				<RadialBar minAngle={0} background dataKey='value' fill='#FF0000' cornerRadius={10} />
			</RadialBarChart>
		</div>
	);
};

export default RadialBarCharts;
