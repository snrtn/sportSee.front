import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './barCharts.styles.css';

export default function BarCharts({ data }) {
	const sessionsData = data.sessions;

	function CustomTooltip({ active, payload }) {
		if (active && payload && payload.length) {
			return (
				<div className='tooltip_activity'>
					<p>{`${payload[0].value}kg`}</p>
					<p>{`${payload[1].value}kCal`}</p>
				</div>
			);
		}
		return null;
	}

	return (
		<div className='containerBarchart'>
			<article className='barchart'>
				<p>Activité quotidienne</p>
				<div className='barchart_container'>
					<div className='barchart_wrapper'>
						<div className='circle_kilogram'></div>
						<p>Poids (kg)</p>
					</div>
					<div className='barchart_wrapper'>
						<div className='circle_calories'></div>
						<p>Calories brûlées (kCal)</p>
					</div>
				</div>
			</article>
			<ResponsiveContainer width={'100%'} height={300}>
				<BarChart data={sessionsData} barGap={8} margin={{ top: 60, right: 10, left: 10, bottom: 10 }}>
					<CartesianGrid strokeDasharray='5 5' vertical={false} />
					<XAxis
						XAxis
						tickLine={false}
						axisLine={{ stroke: '#DEDEDE' }}
						tickFormatter={(index) => index + 1}
						tick={{ fontSize: 14 }}
						tickMargin={15}
					/>
					<YAxis
						dataKey='kilogram'
						domain={['dataMin-1', 'dataMax+2']}
						orientation='right'
						yAxisId='right'
						tickCount={3}
						tickLine={false}
						dx={40}
						axisLine={false}
						tick={{ fontSize: 14 }}
					/>
					<YAxis dataKey='calories' domain={[0, 'dataMax+20']} yAxisId='left' hide={true} axisLine={false} />
					<Tooltip content={<CustomTooltip />} />
					<Bar
						dataKey='kilogram'
						fill='#282D30'
						barSize={10}
						radius={[10, 10, 0, 0]}
						tickLine={false}
						yAxisId='right'
					/>
					<Bar dataKey='calories' fill='#E60000' barSize={10} radius={[10, 10, 0, 0]} tickLine={false} yAxisId='left' />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
