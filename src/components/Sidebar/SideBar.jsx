import React from 'react';
import style from "./SideBar.module.css";
import { Link } from "react-router-dom";


const SideBar = () => {
	return (
		<div className={style.sidebar}>
			<Link to="/" className={style.sidebarLink} ><h3>Home</h3></Link>
			<Link to="mui" className={style.sidebarLink} ><h3>MUI</h3></Link>
			<Link to="router" className={style.sidebarLink} ><h3>React Router</h3></Link>
			<Link to="sm" className={style.sidebarLink} ><h3>State Management</h3></Link>
			<Link to="redux" className={style.sidebarLink} ><h3>Redux</h3></Link>
			<Link to="pedromern" className={style.sidebarLink} ><h3>Pedro Mern</h3></Link>
			<Link to="drawio" className={style.sidebarLink} ><h3>Drawio</h3></Link>
		</div>
	);
};

export default SideBar;