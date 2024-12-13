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

function Home() {
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
			<div className='ml-72 p-8 min-h-screen'>
				<h1 className='text-4xl font-bold text-white'>
					Welcome to the Documentation
				</h1>
				<p className='mt-6 text-lg text-white'>
					Explore the sections in the sidebar to learn more about this
					application.
				</p>
			</div>
		</div>
	);
}

export default Home;
