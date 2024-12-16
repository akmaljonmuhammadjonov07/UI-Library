// Drawer Page
import Sidebar from '../../components/drawer/sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Install from '../../pages/getstarted/install';

function Drawer() {
	return (
		<div className='flex h-screen w-full overflow-hidden'>
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content */}
			<div className='flex md:ml-72 max-md:ml-12 bg-slate-100 w-full relative max-md:mr-96 p-8 pt-14 min-h-screen justify-start transition-all duration-300'>
				<div className='w-full flex justify-end'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/instalition' element={<Install />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
