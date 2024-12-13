import {
	BarChart3,
	Boxes,
	LayoutDashboard,
	LifeBuoy,
	Package,
	Receipt,
	Settings2,
	Users,
} from 'lucide-react';
import Sidebar, { SidebarItem } from '../../components/drawer/sidebar';

import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Install from '../../pages/getstarted/install';

function Drawer() {
	return (
		<div className='flex'>
			<Sidebar>
				<SidebarItem
					icon={<LayoutDashboard size={20} />}
					text={'Dashboard'}
					alert
				/>
				<SidebarItem icon={<BarChart3 size={20} />} text={'Statics'} active />
				<SidebarItem icon={<Users size={20} />} text={'Users'} />
				<SidebarItem icon={<Boxes size={20} />} text={'Inventory'} />
				<SidebarItem icon={<Package size={20} />} text={'Orders'} alert />
				<SidebarItem icon={<Receipt size={20} />} text={'Billings'} />
				<hr className='my-3' />
				<SidebarItem icon={<Settings2 size={20} />} text={'Settings'} />
				<SidebarItem icon={<LifeBuoy size={20} />} text={'Help'} />
			</Sidebar>
			<div className='p-8 min-h-screen'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/instalition' element={<Install />} />
				</Routes>
			</div>
		</div>
	);
}

export default Drawer;
