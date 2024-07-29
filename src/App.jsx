import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './pages';

function App() {
	return (
		<>
			<p className="bg-[--bg]">
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</p>
		</>
	);
}

export default App;
