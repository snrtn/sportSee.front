import Layout from './components/layout/layout';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};

export default App;
