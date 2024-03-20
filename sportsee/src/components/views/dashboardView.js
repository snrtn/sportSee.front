import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './dashboardView.styles.css';

// components
import SideMenu from '../common/sideNavigation/dashboard.js';
import BarChart from '../dashboards/barCharts.js';
import ComposedChart from '../dashboards/composedChart.js';
import RadialBarCharts from '../dashboards/radialBarCharts.js';
import RadarCharts from '../dashboards/radarCharts.js';
import Nutrients from '../dashboards/nutrients.js';
import NotFoundData from '../common/errors/notFoundData.js';

// hooks
import { useData } from '../common/hooks/hookData.js';

// mock
// import { useData } from '../common/hooks/mockHook.js';

const DashboardView = () => {
	// Extrait le paramètre userId de l'URL.
	const { userId } = useParams();
	// Utilise le hook useData pour récupérer les données et la fonction de récupération des données.
	const {
		state: { userData, userActivity, userAverageSessions, userPerformance, loading, error },
		fetchData,
	} = useData();

	// Appelle la fonction fetchData pour récupérer les données lorsque le composant est monté.
	useEffect(() => {
		fetchData(userId);
		// Réexécute cet effet chaque fois que la fonction fetchData ou le userId change.
	}, [fetchData, userId]);

	// Si les données sont en cours de chargement, affiche un indicateur de chargement.
	if (loading) return <div className='isSet'>Chargement...</div>;
	// Si une erreur survient, affiche le composant NotFoundData.
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
							{userActivity.sessions ? <BarChart data={userActivity} /> : <div>data not found</div>}
						</div>
						<div className='dashboard_box_left_bottom'>
							{userAverageSessions.sessions ? <ComposedChart data={userAverageSessions} /> : <div>data not found</div>}
							{userPerformance.data ? <RadarCharts data={userPerformance} /> : <div>data not found</div>}
							{userData.score ? <RadialBarCharts data={userData} /> : <div>data not found</div>}
						</div>
					</div>
					<div className='dashboard_box_right'>
						{userData.keyData ? <Nutrients data={userData} /> : <div>data not found</div>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardView;
