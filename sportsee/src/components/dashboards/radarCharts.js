import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './radarCharts.styles.css';

const convertData = (data) => {
	function matching(str) {
		if (str === 'intensity') return 'Intensité';
		if (str === 'speed') return 'Vitesse';
		if (str === 'strength') return 'Force';
		if (str === 'endurance') return 'Endurance';
		if (str === 'energy') return 'Energie';
		if (str === 'cardio') return 'Cardio';
	}

	if (!data || !data.data) {
		return [];
	}

	const dataUser = data.data.map((item) => ({
		subject: matching(data.kind[item.kind]),
		A: item.value,
		fullMark: 150,
	}));

	return dataUser;
};

const RadarCharts = ({ data }) => {
	const dataUser = convertData(data);

	return (
		<div className='radarCharts_container'>
			<ResponsiveContainer width={'100%'} height={250} padding='0px' className='in_radarCharts_container'>
				<RadarChart cx='50%' cy='50%' outerRadius={90} data={dataUser}>
					<PolarAngleAxis tick={{ fill: 'white', fontSize: 13, angle: 0 }} axisLine={false} dataKey='subject' />
					<PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 10, 30, 50, 70, 90]} />
					<Radar name='User' dataKey='A' fill='#ff0000' fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RadarCharts;
