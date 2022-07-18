import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Home.module.css";

const Home = () => {
	return (
		<div>
			<Link to="/" className={style.home}  ><h3>Home</h3></Link>
		</div>
	);
};

export default Home;