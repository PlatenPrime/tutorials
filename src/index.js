import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import MUI from './pages/MUI/MUI';
import Router from './pages/Router/Router';
import StateManagement from './pages/StateManagement/StateManagement';
import Redux from './pages/Redux/Redux';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<App />} />


				<Route path="mui" element={<MUI />} />


				<Route path="router" element={<Router />} />


				<Route path="sm" element={<StateManagement />} />
				<Route path="redux" element={<Redux />} />


			</Routes>
		</BrowserRouter>
	</React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
