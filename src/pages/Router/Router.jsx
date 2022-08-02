import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import { Link, Outlet } from 'react-router-dom';
import style from "./Router.module.css";
import Invoice from './routes/Invoice';



const Router = () => {









	return (

		<div>




			<Home />



			<div className={style.router}>
				<h1>This is React Router</h1>

				<nav
					style={{
						borderBottom: "solid 1px",
						paddingBottom: "1rem",
					}}
				>
					<Link to="/router/invoices">Invoices</Link> |{" "}
					<Link to="/router/expenses">Expenses</Link>
				</nav>


				<Outlet />
			</div>



			



		</div >




	);
};

export default Router; 