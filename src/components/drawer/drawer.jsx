// import {
// 	BarChart3,
// 	Boxes,
// 	LayoutDashboard,
// 	LifeBuoy,
// 	Package,
// 	Receipt,
// 	Settings2,
// 	Users,
// } from 'lucide-react';
import Sidebar from '../../components/drawer/sidebar';

import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Install from '../../pages/getstarted/install';

function Drawer() {
	return (
		<div className='w-full flex overflow-hidden h-screen'>
			<div>
				<Sidebar />
			</div>
			<div className='p-8 bg-black w-full min-h-screen flex justify-center'>
				<div>
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
