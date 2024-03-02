import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import App from './App';
import Home from './components/views/homeView.js';
import Dashboard from './components/views/dashboardView.js';
import NotFound from './components/common/errors/notFound.js';

// hooks
import { DataProvider } from './components/common/hooks/hookData.js';

// mock
// import { DataProvider } from './components/common/hooks/mockHook.js';

// Active le mode strict de React pour identifier les problèmes potentiels dans l'application.
// <React.StrictMode></React.StrictMode>

// Englobe l'application dans le composant DataProvider pour fournir les données à tous les composants enfants.
// <DataProvider></DataProvider>

// Définit un chemin pour capturer toutes les URL non reconnues et rendre le composant NotFound.
// <Route path='*' element={<NotFound />} />

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
