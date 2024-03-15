import React, { createContext, useReducer, useContext, useCallback } from 'react';
import { mockData } from './mockData.js';

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

	const fetchData = useCallback(async (userId) => {
		try {
			const userData = mockData.USER_MAIN_DATA.find((user) => user.id === userId);
			const userActivity = mockData.USER_ACTIVITY.find((activity) => activity.userId === userId);
			const userAverageSessions = mockData.USER_AVERAGE_SESSIONS.find((session) => session.userId === userId);
			const userPerformance = mockData.USER_PERFORMANCE.find((performance) => performance.userId === userId);

			if (userData) dispatch({ type: 'FETCH_USER_DATA', payload: userData });
			if (userActivity) dispatch({ type: 'FETCH_USER_ACTIVITY', payload: userActivity });
			if (userAverageSessions) dispatch({ type: 'FETCH_USER_AVERAGE_SESSIONS', payload: userAverageSessions });
			if (userPerformance) dispatch({ type: 'FETCH_USER_PERFORMANCE', payload: userPerformance });
		} catch (error) {
			dispatch({ type: 'FETCH_ERROR', payload: error.toString() });
		}
	}, []);

	return <DataContext.Provider value={{ state, fetchData }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
