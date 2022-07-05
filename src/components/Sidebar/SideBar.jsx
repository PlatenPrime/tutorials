import React from 'react';
import style from "./SideBar.module.css";
import { Link } from "react-router-dom";


const SideBar = () => {
	return (
		<div className={style.sidebar}>
			<Link to="/" className={style.sidebarLink} ><h3>Home</h3></Link>
			<Link to="mui" className={style.sidebarLink} ><h3>MUI</h3></Link>
		</div>
	);
};

export default SideBar;