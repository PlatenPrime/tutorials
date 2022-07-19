import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Router.module.css";

const RouterApp = () => {
	return (

		<>

			<div className={style.routerApp}>
				<h1>This is React Router</h1>

				<nav
					style={{
						borderBottom: "solid 1px",
						paddingBottom: "1rem",
					}}
				>
					<Link to="/invoices">Invoices</Link> |{" "}
					<Link to="/expenses">Expenses</Link>
				</nav>

			</div>
		</>
	);
};

export default RouterApp;