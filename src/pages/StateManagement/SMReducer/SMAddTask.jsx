import React, { useState } from 'react';

const SMAddTask = ({ onAddTask }) => {

	const [task, setTask] = useState("");


	return (
		<div>
			<h4>Ввод нового пункта</h4>
			<input type="text" placeholder='Add task' onChange={e => setTask(e.target.value)} />
			<button onClick={e => onAddTask(task)} >Add</button>
		</div>
	);
};

export default SMAddTask;