import { Link } from "react-router-dom";
import { Outlet } from 'react-router';
import './App.css';

function App() {
	return (
		<div className="App">
			<Link to="mui"><h3>Go to MUI page</h3></Link>
			<Outlet />
		</div>
	);
}

export default App;
