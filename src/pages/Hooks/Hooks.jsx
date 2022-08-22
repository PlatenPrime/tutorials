import React from 'react';
import style from './Hooks.module.css';
import UseState from './UseState';

const Hooks = () => {
	return (
		<div className={style.hooks}>
			<hr />
			<UseState />
			<hr />
		</div>
	);
};

export default Hooks;