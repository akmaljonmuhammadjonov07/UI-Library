import { Component, SquareArrowDown, SquareArrowUp } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
	const [open, setOpen] = useState(true);
	const [accordionOpen, setAccordionOpen] = useState(false); // State for the accordion

	return (
		<div className='fixed flex inset-0'>
			<div
				className={`${
					open ? 'w-72 max-md:w-20' : 'w-24'
				} bg-gray-700 h-screen p-5 pt-8 relative duration-300`}
			>
				<img
					src='/control.png'
					className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
					onClick={() => setOpen(!open)}
				/>
				<div className='flex gap-x-4 items-center'>
					<img
						onClick={() => setOpen(!open)}
						src='/capture_241214_215434-removebg-preview.png'
						className={`cursor-pointer duration-500 bg-white rounded-full w-12 h-12 ${
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
					<li className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'>
						<img src='/Overview.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Introduction
						</span>
					</li>
					<li className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'>
						<img src='/Transactions.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Installation
						</span>
					</li>
					<li
						className='flex flex-col rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-start gap-x-4 mt-2'
						onClick={() => setAccordionOpen(!accordionOpen)}
					>
						<div className='flex items-center gap-x-4 w-full'>
							<Component />
							<span
								className={`${
									!open && 'hidden'
								} origin-left max-md:hidden duration-200 flex-1`}
							>
								Components
							</span>
							<span className={`${open ? '' : 'hidden'} text-xs`}>
								{accordionOpen ? <SquareArrowDown /> : <SquareArrowUp />}
							</span>
						</div>
						{accordionOpen && open && (
							<ul className='pl-8 mt-2 space-y-2'>
								<li className='text-gray-300 hover:text-white text-sm cursor-pointer'>
									Accordion
								</li>
								<li className='text-gray-300 hover:text-white text-sm cursor-pointer'>
									Tabs
								</li>
								<li className='text-gray-300 hover:text-white text-sm cursor-pointer'>
									Buttons
								</li>
							</ul>
						)}
					</li>
					<hr className='my-4' />
					<li className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
						<img src='/Card.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Card
						</span>
					</li>

					<li className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'>
						<img src='/Calendar.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Subscriptions
						</span>
					</li>
					<li className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'>
						<img src='/Debt.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Debts
						</span>
					</li>
					<li className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'>
						<img src='/Legal.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Legal Information
						</span>
					</li>
					<hr className='my-4' />
					<li className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
						<img src='/Notifications.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Notifications
						</span>
					</li>
					<li className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'>
						<img src='/Settings.svg' />
						<span
							className={`${
								!open && 'hidden'
							} origin-left max-md:hidden duration-200`}
						>
							Settings
						</span>
					</li>
				</ul>
			</div>
			<div className='h-14 w-full bg-gray-700 border-l-2 z-5'>
				<div className='flex items-center'>Home</div>
			</div>
		</div>
	);
};

export default Sidebar;
