import React from 'react';
import Home from '../../components/Home/Home';
import style from "./Redux.module.css";
import Login from './reduxComponents/Login';
import Profile from './reduxComponents/Profile';


import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import userReducer from "./reduxFeatures/user"




const store = configureStore({
	reducer: {

		user: userReducer,

	},
})





const Redux = () => {
	return (
		<Provider store={store} >

			<div>

				<Home />
				<Profile />
				<Login />

			</div>

		</Provider>
	);
};

export default Redux;