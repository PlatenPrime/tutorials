import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";


import RouterApp from './RouterApp';

const Router = () => {
	return (

		<div>
			<Home />
			<RouterApp />

		</div>




	);
};

export default Router; 