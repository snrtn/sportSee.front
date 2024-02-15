import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './views/dashboardView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				{/* This is our layout, most pages will use this layout  */}
				<Route path='/' element={<App />}>
					<Route index element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
