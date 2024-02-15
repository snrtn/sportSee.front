import React from 'react';
import SideMenu from '../components/navigation/sideNavigation/dashboard';
import './dashboardView.styles.css';
import BarChart from '../components/dashboard/barChart';
import ComposedChart from '../components/dashboard/composedChart';
import PieChart from '../components/dashboard/pieChart';
import RadarChart from '../components/dashboard/radarChart';
import Nutrients from '../components/dashboard/nutrients';

const DashboardView = () => {
	return (
		<div className='dashboard_wrapper'>
			<div className='dashboard_left'>
				<SideMenu />
			</div>
			<div className='dashboard_right'>
				<div className='dashboard_right_header'>
					<h1>dashboard_right_header</h1>
					<p>dashboard_right_header</p>
				</div>
				<div className='dashboard_box'>
					<div className='dashboard_box_left'>
						<div className='dashboard_box_left_top'>
							<BarChart />
						</div>
						<div className='dashboard_box_left_bottom'>
							<ComposedChart />
							<RadarChart />
							<PieChart />
						</div>
					</div>
					<div className='dashboard_box_right'>
						<Nutrients />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardView;
