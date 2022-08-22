import React, { useState } from 'react';

const UseState = () => {

	const [count, setCount] = useState(0);
	const [text, setText] = useState("Text from input");


	const increment = () => {
		setCount(count + 1);
	}
	const decrement = () => {
		setCount(count - 1);
	}


	return (
		<div>
			<h2>useState</h2>
			<h3>{count}</h3>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>

			<div>
				<input type="text" placeholder='type something...' onChange={(event) => setText(event.target.value)} />
				<h3>{text}</h3>
			</div>

		</div>
	);
};

export default UseState;