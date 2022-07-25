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
import tutorialsLinks from './links';
import Router from './pages/Router/Router';
import Expenses from './pages/Router/routes/Expenses';
import Invoices from './pages/Router/routes/Invoices';
import Invoice from './pages/Router/routes/Invoice';
import StateManagement from './pages/StateManagement/StateManagement';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<App />}>
				</Route>

				<Route path="mui" element={<MUI />} >
				</Route>

				<Route path="router" element={<Router />} >

					<Route
						index
						element={
							<main style={{ padding: "1rem" }}>
								<p>Make your choose!</p>
							</main>
						}
					/>

					<Route path="expenses" element={<Expenses />} />


					<Route path="invoices" element={<Invoices />}>
						<Route
							index
							element={
								<main style={{ padding: "1rem" }}>
									<p>Select an invoice</p>
								</main>
							}
						/>

						<Route path=":invoiceId" element={<Invoice />} />
					</Route>


					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>

				</Route>


				<Route path="sm" element={<StateManagement />} >
				</Route>

			</Routes>
		</BrowserRouter>
	</React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
