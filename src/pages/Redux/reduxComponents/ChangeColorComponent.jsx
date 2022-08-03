import React from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { changeColor } from './../reduxFeatures/theme';


const ChangeColorComponent = () => {


	const [color, setColor] = useState("");
	const dispatch = useDispatch();

	return (
		<div>
			<input type="text"
				onChange={(event) => { setColor(event.target.value) }}
			/>
			<button
				onClick={() => { dispatch(changeColor(color)); }}
			>CHANGE COLOR</button>
		</div>
	);
};

export default ChangeColorComponent;