import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Install from '../pages/getstarted/install';

function Routers() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/instalition' element={<Install />} />
			</Routes>
		</div>
	);
}

export default Routers;
