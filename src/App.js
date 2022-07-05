import { Link } from "react-router-dom";
import { Outlet } from 'react-router';
import './App.css';
import SideBar from "./components/Sidebar/SideBar";

function App() {
	return (
		<div className="App">
			<SideBar />
			<Outlet />
		</div>
	);
}

export default App;
