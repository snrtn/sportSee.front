import React from 'react';
import Layout from './components/layout/layout';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<React.Suspense fallback={<>...</>}>
			<Layout>
				<Outlet />
			</Layout>
		</React.Suspense>
	);
};

export default App;
