import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/views/homeView.js';
import Dashboard from './components/views/dashboardView.js';
import NotFound from './components/common/errors/notFound.js';
import { DataProvider } from './components/common/hooks/hookData.js';

// mock
// import { DataProvider } from './components/common/hooks/mockHook.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DataProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route path='user/:userId' element={<Dashboard />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</DataProvider>
	</React.StrictMode>,
);
