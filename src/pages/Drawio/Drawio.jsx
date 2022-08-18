import React from 'react';
import style from "./Drawio.module.css";

import { ReactComponent as DrawioSVG } from './Drawio.svg';

const Drawio = () => {
	return (
		<div className={style.drawio}>
			<h1>Drawio</h1>

			<div className="svg">
				<DrawioSVG style={{ width: "80%" }} />
			</div>

		</div >
	);
};

export default Drawio;
