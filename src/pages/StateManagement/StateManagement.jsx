import React from 'react';
import Home from '../../components/Home/Home';
import SMContext from './SMContext/SMContext';
import SMReducer from './SMReducer/SMReducer';
import style from "./StateManagement.module.css";

const StateManegement = () => {
	return (
		<div className={style.sm} >
			<Home />
			<h1>State Management</h1>
			<SMContext />
			<SMReducer />
		</div>
	);
};

export default StateManegement;