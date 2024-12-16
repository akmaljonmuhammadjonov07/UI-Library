import { Component } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';

const Sidebar = () => {
	const [open] = useState(true);
	const [accordionOpen, setAccordionOpen] = useState(true); // State for the accordion

	return (
		<div className='fixed flex inset-0 z-50'>
			<div
				className={`${
					open ? 'w-96 max-md:w-20' : 'w-24'
				} bg-[#3B82F6] dark:bg-[#6D28D9] h-screen p-5 pt-8 relative duration-300`}
			>
				<div className='flex gap-x-2.5 items-center'>
					<img
						src='/logo.png'
						className={`cursor-pointer duration-500 bg-white border-black rounded-full w-12 h-12 ${
							open && 'rotate-[360deg]'
						}`}
					/>
					<h1
						className={`text-white max-md:hidden flex origin-left font-medium text-xl duration-200 ${
							!open && 'scale-0'
						}`}
					>
						{`MyCode`}
					</h1>
				</div>
				<ul className='pt-6'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
								isActive
									? ' bg-blue-400 dark:bg-violet-500 text-black'
									: 'text-gray-300 hover:bg-light-white'
							}`
						}
					>
						<img src='/Overview.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Introduction
						</span>
					</NavLink>
					<NavLink
						to='/components'
						onClick={() => setAccordionOpen(!accordionOpen)}
						className={({ isActive }) =>
							`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
								isActive
									? ' bg-blue-400 dark:bg-violet-500 text-black'
									: 'text-gray-300 hover:bg-light-white'
							}`
						}
					>
						<Component />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Components
						</span>
					</NavLink>
					{accordionOpen && open && (
						<ul className='pl-8 mt-2 space-y-2'>
							<li className='text-gray-300 p-2 bg-blue-400 dark:bg-violet-500 rounded-md hover:text-black text-sm cursor-pointer'>
								Accordion
							</li>
							<li className='text-gray-300 p-2 bg-blue-400 dark:bg-violet-500 rounded-md hover:text-black text-sm cursor-pointer'>
								Buttons
							</li>
							<li className='text-gray-300 p-2 bg-blue-400 dark:bg-violet-500 rounded-md hover:text-black text-sm cursor-pointer'>
								Tabs
							</li>
						</ul>
					)}
					<hr className='my-4' />
					<NavLink
						to='/card'
						className={({ isActive }) =>
							`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
								isActive
									? ' bg-blue-400 dark:bg-violet-500 text-black'
									: 'text-gray-300 hover:bg-light-white'
							}`
						}
					>
						<img src='/Card.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Card
						</span>
					</NavLink>
					<NavLink
						to='/subcribitions'
						className={({ isActive }) =>
							`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
								isActive
									? ' bg-blue-400 dark:bg-violet-500 text-black'
									: 'text-gray-300 hover:bg-light-white'
							}`
						}
					>
						<img src='/Calendar.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Subcripitions
						</span>
					</NavLink>
					<NavLink
						to='/debts'
						className={({ isActive }) =>
							`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
								isActive
									? ' bg-blue-400 dark:bg-violet-500 text-black'
									: 'text-gray-300 hover:bg-light-white'
							}`
						}
					>
						<img src='/Debt.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Debts
						</span>
					</NavLink>
					<NavLink
						to='/legal'
						className={({ isActive }) =>
							`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
								isActive
									? ' bg-blue-400 dark:bg-violet-500 text-black'
									: 'text-gray-300 hover:bg-light-white'
							}`
						}
					>
						<img src='/Legal.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Legal Information
						</span>
					</NavLink>
					<hr className='my-4' />
					<NavLink
						to='/notifications'
						className={({ isActive }) =>
							`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
								isActive
									? ' bg-blue-400 dark:bg-violet-500 text-black'
									: 'text-gray-300 hover:bg-light-white'
							}`
						}
					>
						<img src='/Notifications.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Notifications
						</span>
					</NavLink>
					<NavLink
						to='/settings'
						className={({ isActive }) =>
							`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
								isActive
									? ' bg-blue-400 dark:bg-violet-500 text-black'
									: 'text-gray-300 hover:bg-light-white'
							}`
						}
					>
						<img src='/Settings.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Settings
						</span>
					</NavLink>
				</ul>
			</div>

			<Navbar />
		</div>
	);
};

export default Sidebar;
