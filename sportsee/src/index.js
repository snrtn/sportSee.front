import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import App from './App';
import Home from './components/views/homeView.js';
import Dashboard from './components/views/dashboardView.js';

// hooks
import { DataProvider } from './components/common/hooks/dataContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DataProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route path='user/:userId' element={<Dashboard />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</DataProvider>
	</React.StrictMode>,
);
