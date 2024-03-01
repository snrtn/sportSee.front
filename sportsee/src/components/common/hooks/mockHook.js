import React, { createContext, useReducer, useContext, useCallback } from 'react';

const mockData = {
	USER_MAIN_DATA: [
		{
			id: 12,
			userInfos: {
				firstName: 'Karl',
				lastName: 'Dovineau',
				age: 31,
			},
			todayScore: 0.12,
			keyData: {
				calorieCount: 1930,
				proteinCount: 155,
				carbohydrateCount: 290,
				lipidCount: 50,
			},
		},
		{
			id: 18,
			userInfos: {
				firstName: 'Cecilia',
				lastName: 'Ratorez',
				age: 34,
			},
			score: 0.3,
			keyData: {
				calorieCount: 2500,
				proteinCount: 90,
				carbohydrateCount: 150,
				lipidCount: 120,
			},
		},
	],
	USER_ACTIVITY: [
		{
			userId: 12,
			sessions: [
				{
					day: '2020-07-01',
					kilogram: 80,
					calories: 240,
				},
				{
					day: '2020-07-02',
					kilogram: 80,
					calories: 220,
				},
				{
					day: '2020-07-03',
					kilogram: 81,
					calories: 280,
				},
				{
					day: '2020-07-04',
					kilogram: 81,
					calories: 290,
				},
				{
					day: '2020-07-05',
					kilogram: 80,
					calories: 160,
				},
				{
					day: '2020-07-06',
					kilogram: 78,
					calories: 162,
				},
				{
					day: '2020-07-07',
					kilogram: 76,
					calories: 390,
				},
			],
		},
		{
			userId: 18,
			sessions: [
				{
					day: '2020-07-01',
					kilogram: 70,
					calories: 240,
				},
				{
					day: '2020-07-02',
					kilogram: 69,
					calories: 220,
				},
				{
					day: '2020-07-03',
					kilogram: 70,
					calories: 280,
				},
				{
					day: '2020-07-04',
					kilogram: 70,
					calories: 500,
				},
				{
					day: '2020-07-05',
					kilogram: 69,
					calories: 160,
				},
				{
					day: '2020-07-06',
					kilogram: 69,
					calories: 162,
				},
				{
					day: '2020-07-07',
					kilogram: 69,
					calories: 390,
				},
			],
		},
	],
	USER_AVERAGE_SESSIONS: [
		{
			userId: 12,
			sessions: [
				{
					day: 1,
					sessionLength: 30,
				},
				{
					day: 2,
					sessionLength: 23,
				},
				{
					day: 3,
					sessionLength: 45,
				},
				{
					day: 4,
					sessionLength: 50,
				},
				{
					day: 5,
					sessionLength: 0,
				},
				{
					day: 6,
					sessionLength: 0,
				},
				{
					day: 7,
					sessionLength: 60,
				},
			],
		},
		{
			userId: 18,
			sessions: [
				{
					day: 1,
					sessionLength: 30,
				},
				{
					day: 2,
					sessionLength: 40,
				},
				{
					day: 3,
					sessionLength: 50,
				},
				{
					day: 4,
					sessionLength: 30,
				},
				{
					day: 5,
					sessionLength: 30,
				},
				{
					day: 6,
					sessionLength: 50,
				},
				{
					day: 7,
					sessionLength: 50,
				},
			],
		},
	],
	USER_PERFORMANCE: [
		{
			userId: 12,
			kind: {
				1: 'cardio',
				2: 'energy',
				3: 'endurance',
				4: 'strength',
				5: 'speed',
				6: 'intensity',
			},
			data: [
				{
					value: 80,
					kind: 1,
				},
				{
					value: 120,
					kind: 2,
				},
				{
					value: 140,
					kind: 3,
				},
				{
					value: 50,
					kind: 4,
				},
				{
					value: 200,
					kind: 5,
				},
				{
					value: 90,
					kind: 6,
				},
			],
		},
		{
			userId: 18,
			kind: {
				1: 'cardio',
				2: 'energy',
				3: 'endurance',
				4: 'strength',
				5: 'speed',
				6: 'intensity',
			},
			data: [
				{
					value: 200,
					kind: 1,
				},
				{
					value: 240,
					kind: 2,
				},
				{
					value: 80,
					kind: 3,
				},
				{
					value: 80,
					kind: 4,
				},
				{
					value: 220,
					kind: 5,
				},
				{
					value: 110,
					kind: 6,
				},
			],
		},
	],
};

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
