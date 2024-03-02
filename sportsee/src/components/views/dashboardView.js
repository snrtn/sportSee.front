import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './dashboardView.styles.css';
import SideMenu from '../common/sideNavigation/dashboard.js';
import BarChart from '../dashboards/barCharts.js';
import ComposedChart from '../dashboards/composedChart.js';
import RadialBarCharts from '../dashboards/radialBarCharts.js';
import RadarCharts from '../dashboards/radarCharts.js';
import Nutrients from '../dashboards/nutrients.js';
import NotFoundData from '../common/errors/notFoundData.js';
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
							<BarChart data={userActivity} />
						</div>
						<div className='dashboard_box_left_bottom'>
							<ComposedChart data={userAverageSessions} />
							<RadarCharts data={userPerformance} />
							<RadialBarCharts data={userData} />
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
