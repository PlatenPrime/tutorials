import React from 'react';
import Home from '../../components/Home/Home';

import Login from './reduxComponents/Login';
import Profile from './reduxComponents/Profile';
import ChangeColorComponent from './reduxComponents/ChangeColorComponent';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import userReducer from "./reduxFeatures/user";
import themeReducer from "./reduxFeatures/theme";



const store = configureStore({
	reducer: {
		user: userReducer,
		theme: themeReducer,
	},
})


const Redux = () => {
	return (
		<Provider store={store} >

			<div>
				<Home />
				<Profile />
				<Login />
				<ChangeColorComponent />
			</div>

		</Provider>
	);
};

export default Redux;