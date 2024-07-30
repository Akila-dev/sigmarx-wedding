import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './pages';

function App() {
	return (
		<>
			<div className="bg-[--bg]">
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
