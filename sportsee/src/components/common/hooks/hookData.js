import React, { createContext, useReducer, useContext, useCallback } from 'react';
import axios from 'axios';

const DataContext = createContext();

const initialState = {
	userData: {},
	userActivity: {},
	userAverageSessions: {},
	userPerformance: {},
	loading: true,
	error: null,
};

const dataReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_USER_DATA':
			return { ...state, userData: action.payload, loading: false };
		case 'FETCH_USER_ACTIVITY':
			return { ...state, userActivity: action.payload, loading: false };
		case 'FETCH_USER_AVERAGE_SESSIONS':
			return { ...state, userAverageSessions: action.payload, loading: false };
		case 'FETCH_USER_PERFORMANCE':
			return { ...state, userPerformance: action.payload, loading: false };
		case 'FETCH_ERROR':
			return { ...state, error: action.payload, loading: false };
		default:
			return state;
	}
};

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(dataReducer, initialState);
	const apiUrl = process.env.REACT_APP_API_URL;

	const fetchData = useCallback(async (userId) => {
		dispatch({ type: 'FETCH_ERROR', payload: null });
		try {
			const userData = await axios.get(`${apiUrl}/user/${userId}`);
			const userActivity = await axios.get(`${apiUrl}/user/${userId}/activity`);
			const userAverageSessions = await axios.get(`${apiUrl}/user/${userId}/average-sessions`);
			const userPerformance = await axios.get(`${apiUrl}/user/${userId}/performance`);

			dispatch({ type: 'FETCH_USER_DATA', payload: userData.data.data });
			dispatch({ type: 'FETCH_USER_ACTIVITY', payload: userActivity.data.data });
			dispatch({ type: 'FETCH_USER_AVERAGE_SESSIONS', payload: userAverageSessions.data.data });
			dispatch({ type: 'FETCH_USER_PERFORMANCE', payload: userPerformance.data.data });
		} catch (error) {
			dispatch({ type: 'FETCH_ERROR', payload: error });
		}
	}, []);

	return <DataContext.Provider value={{ state, fetchData }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
