// Importe React et les hooks nécessaires depuis la bibliothèque React. Cela permet d'utiliser des composants, de créer un contexte, de gérer l'état, d'utiliser le contexte et des callbacks mémorisés.
import React, { createContext, useReducer, useContext, useCallback } from 'react';
// Importe la bibliothèque axios pour effectuer des requêtes HTTP.
import axios from 'axios';

// Crée un contexte pour gérer les données à travers l'application de manière globale.
const DataContext = createContext();
// Le composant DataProvider est conçu pour gérer l'état global des données utilisées dans l'application. Ce composant a pour rôle de fournir des données à tous les composants enfants.

// Définit l'état initial du composant, incluant des informations sur l'utilisateur, son activité, ses sessions moyennes, sa performance, ainsi que le statut de chargement et les erreurs.
const initialState = {
	userData: {},
	userActivity: {},
	userAverageSessions: {},
	userPerformance: {},
	loading: true,
	error: null,
};

// Fonction réducteur pour gérer les changements d'état. Elle met à jour l'état en fonction du type d'action.
const dataReducer = (state, action) => {
	switch (action.type) {
		// Traite le cas où les données utilisateur sont récupérées avec succès.
		case 'FETCH_USER_DATA':
			return { ...state, userData: action.payload, loading: false };
		// Traite le cas où les données d'activité utilisateur sont récupérées avec succès.
		case 'FETCH_USER_ACTIVITY':
			return { ...state, userActivity: action.payload, loading: false };
		// Traite le cas où les données de sessions moyennes utilisateur sont récupérées avec succès.
		case 'FETCH_USER_AVERAGE_SESSIONS':
			return { ...state, userAverageSessions: action.payload, loading: false };
		// Traite le cas où les données de performance utilisateur sont récupérées avec succès.
		case 'FETCH_USER_PERFORMANCE':
			return { ...state, userPerformance: action.payload, loading: false };
		// Traite le cas où une erreur survient lors de la récupération des données.
		case 'FETCH_ERROR':
			return { ...state, error: action.payload, loading: false };
		// Dans le cas par défaut, retourne l'état actuel sans changement.
		default:
			return state;
	}
};
// Le hook useReducer est utilisé pour gérer l'état de l'application et mettre à jour cet état via la fonction dispatch. Selon le type d'action, la fonction dataReducer met à jour l'état de manière appropriée.

// Composant fournisseur de données, gérant et distribuant l'état global aux composants enfants.
export const DataProvider = ({ children }) => {
	// Utilise le hook useReducer pour gérer l'état et la fonction de dispatch.
	const [state, dispatch] = useReducer(dataReducer, initialState);
	// Récupère l'URL de l'API depuis les variables d'environnement.
	const apiUrl = process.env.REACT_APP_API_URL;

	// Fonction pour récupérer les données depuis l'API en fonction de l'identifiant utilisateur. Cette fonction est mémorisée pour éviter des recalculs inutiles.
	const fetchData = useCallback(
		async (userId) => {
			// Initialise l'état d'erreur.
			dispatch({ type: 'FETCH_ERROR', payload: null });
			// Appelle l'API pour récupérer les données nécessaires de manière asynchrone.
			try {
				const userData = await axios.get(`${apiUrl}/user/${userId}`);
				const userActivity = await axios.get(`${apiUrl}/user/${userId}/activity`);
				const userAverageSessions = await axios.get(`${apiUrl}/user/${userId}/average-sessions`);
				const userPerformance = await axios.get(`${apiUrl}/user/${userId}/performance`);

				// Met à jour l'état avec les données récupérées.
				dispatch({ type: 'FETCH_USER_DATA', payload: userData.data.data });
				dispatch({ type: 'FETCH_USER_ACTIVITY', payload: userActivity.data.data });
				dispatch({ type: 'FETCH_USER_AVERAGE_SESSIONS', payload: userAverageSessions.data.data });
				dispatch({ type: 'FETCH_USER_PERFORMANCE', payload: userPerformance.data.data });
			} catch (error) {
				dispatch({ type: 'FETCH_ERROR', payload: error }); // Met à jour l'état d'erreur en cas d'échec de récupération des données.
			}
		},
		// Recrée la fonction fetchData si l'URL de l'API change.
		[apiUrl],
	);
	// La fonction fetchData récupère de manière asynchrone les données utilisateur depuis l'API. Si les données sont récupérées avec succès, l'état est mis à jour, en cas d'échec, l'état d'erreur est mis à jour. Cette fonction est optimisée avec le hook useCallback et n'est pas recréée tant que apiUrl ne change pas.

	// Utilise DataContext.Provider pour passer l'état et la fonction fetchData aux composants enfants.
	return <DataContext.Provider value={{ state, fetchData }}>{children}</DataContext.Provider>;
	// DataContext.Provider est utilisé pour passer l'état state et la fonction fetchData aux composants enfants. Cela permet aux composants enfants d'accéder à ces données et de réaliser les appels API nécessaires.
};

// Définit un hook personnalisé pour faciliter l'utilisation du DataContext dans les composants. Cela permet d'accéder facilement à l'état des données et à la fonction fetchData.
export const useData = () => useContext(DataContext);
// Le hook personnalisé useData utilise le hook useContext pour faciliter l'accès aux valeurs de DataContext. Cela permet aux développeurs d'utiliser facilement l'état des données et la fonction fetchData dans les composants.
