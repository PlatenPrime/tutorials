import React from 'react';
import style from "./PedroMern.module.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



const PedroMern = () => {

	const [listOfUsers, setListOfUsers] = useState([
	]);

	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [username, setUsername] = useState("");




	useEffect(() => {
		axios.get("https://platentutorials.vercel.app/pedromern/getUsers").then((response) => {
			setListOfUsers(response.data);
		});
	}, []);



	const createUser = () => {
		axios.post("https://platentutorials.vercel.app/pedromern/createUser", {
			name,
			age,
			username,
		}).then((response) => {
			setListOfUsers([...listOfUsers, {
				name,
				age,
				username,
			},]);

		});
	}





	return (
		<div className={style.pedromern}>
			<h1>Pedro MERN</h1>
			<div className={style.userDisplay}>

				{listOfUsers.map((user) => {
					return <div>
						<h3>Name: {user.name} </h3>
						<h3>Age: {user.age} </h3>
						<h3>Username: {user.username} </h3>

					</div>

				})}



			</div>

			<div>
				<input type="text" placeholder='Name...' onChange={(event) => setName(event.target.value)} />
				<input type="number" placeholder='Age...' onChange={(event) => setAge(event.target.value)} />
				<input type="text" placeholder='Username...' onChange={(event) => setUsername(event.target.value)} />
				<button onClick={createUser}>Create User</button>
			</div>
		</div>
	);
};

export default PedroMern;