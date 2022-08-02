import React from 'react';

import { useDispatch } from "react-redux";
import { login, logout } from "./../reduxFeatures/user";

const Login = () => {

	const dispatch = useDispatch()


	return (
		<div>
			<button
				onClick={() => { dispatch(login({ name: "Prime", age: 92, email: "platenprime@gmail.com" })) }}
			>
				Login
			</button>

			<button
				onClick={() => { dispatch(logout()) }}
			>
				LogOut
			</button>
		</div>
	);
};

export default Login;