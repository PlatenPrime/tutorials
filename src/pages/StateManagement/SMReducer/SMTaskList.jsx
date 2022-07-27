import { Checkbox } from '@mui/material';
import React from 'react';
import SMAddTask from './SMAddTask';



const SMTaskList = ({ tasks, onChangeTask, onDeleteTask }) => {


	let tasklist = tasks.map((task => <div id={task.id} key={task.id} > <Checkbox value={task.done} />  {task.text}

		<button onClick={onChangeTask}   >Edit</button>
		<button onClick={onDeleteTask}   >Delete</button>

	</div>

	))


	return (




		<>
			<h4>Список задач</h4>

			{tasklist}

		</>




	);
};





export default SMTaskList;