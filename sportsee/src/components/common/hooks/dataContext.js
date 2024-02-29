import { createContext, useReducer, useContext, useCallback } from 'react';
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

	const fetchData = useCallback(async (userId) => {
		try {
			const userResponse = await axios.get(`http://localhost:3000/user/${userId}`);
			dispatch({ type: 'FETCH_USER_DATA', payload: userResponse.data });

			const activityResponse = await axios.get(`http://localhost:3000/user/${userId}/activity`);
			dispatch({ type: 'FETCH_USER_ACTIVITY', payload: activityResponse.data });

			const sessionsResponse = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
			dispatch({ type: 'FETCH_USER_AVERAGE_SESSIONS', payload: sessionsResponse.data });

			const performanceResponse = await axios.get(`http://localhost:3000/user/${userId}/performance`);
			dispatch({ type: 'FETCH_USER_PERFORMANCE', payload: performanceResponse.data });
		} catch (error) {
			dispatch({ type: 'FETCH_ERROR', payload: error });
		}
	}, []);

	return <DataContext.Provider value={{ state, fetchData }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
