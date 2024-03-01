import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './dashboardView.styles.css';
import SideMenu from '../common/sideNavigation/dashboard.js';
import BarChart from '../dashboards/barCharts.js';
import ComposedChart from '../dashboards/composedChart.js';
import PieChart from '../dashboards/pieChart.js';
import RadarChart from '../dashboards/radarChart.js';
import Nutrients from '../dashboards/nutrients.js';
import NotFoundData from '../common/errors/notFoundData.js';
import { useData } from '../common/hooks/hookData.js';

// mock
// import { useData } from '../common/hooks/mockHook.js';

const DashboardView = () => {
	const { userId } = useParams();
	const {
		state: { userData, userActivity, userAverageSessions, userPerformance, loading, error },
		fetchData,
	} = useData();

	useEffect(() => {
		fetchData(userId);
	}, [fetchData, userId]);

	if (loading) return <div className='isSet'>Loading...</div>;
	if (error) return <NotFoundData error={error.message} />;

	return (
		<div className='dashboard_wrapper'>
			<div className='dashboard_left'>
				<SideMenu />
			</div>

			<div className='dashboard_right'>
				<div className='dashboard_right_header'>
					<h1>
						Bonjour
						<span>
							{userData.userInfos?.firstName} {userData.userInfos?.lastName}
						</span>
					</h1>
					<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				</div>
				<div className='dashboard_box'>
					<div className='dashboard_box_left'>
						<div className='dashboard_box_left_top'>
							<BarChart data={userActivity} />
						</div>
						<div className='dashboard_box_left_bottom'>
							<ComposedChart data={userAverageSessions} />
							<RadarChart data={userAverageSessions} />
							<PieChart data={userPerformance} />
						</div>
					</div>
					<div className='dashboard_box_right'>
						<Nutrients data={userData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardView;
