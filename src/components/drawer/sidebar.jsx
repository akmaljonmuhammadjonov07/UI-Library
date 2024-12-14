import { useState } from 'react';

const Sidebar = () => {
	const [open, setOpen] = useState(true);
	const Menus = [
		{ title: 'Introduction', src: 'Overview', link: '/' },
		{ title: 'Instalition', src: 'Transactions', link: '/' },
		{ title: 'Components', src: 'Card', link: '/', gap: true },
		{ title: 'Subscriptions ', src: 'Calendar', link: '/' },
		{ title: 'Debts', src: 'Debt', link: '/' },
		{ title: 'Legal information', src: 'Legal', link: '/' },
		{ title: 'Notifications ', src: 'Notifications', link: '/', gap: true },
		{ title: 'Setting', src: 'Settings', link: '/' },
	];
	return (
		<div className='fixed flex inset-0'>
			<div
				className={`${
					open ? ' w-72 max-md:w-20' : 'w-24'
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
					{Menus.map((Menu, index) => (
						<li
							key={index}
							className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
								index === 0 && 'bg-light-white'
							} `}
						>
							<img src={`/${Menu.src}.svg`} />
							<span
								className={`${
									!open && 'hidden'
								} origin-left max-md:hidden duration-200`}
							>
								{Menu.title}
							</span>
						</li>
					))}
				</ul>
			</div>
			<div className='h-14 w-full bg-gray-700 border-l-2 z-5'>
				<div className='flex items-center'></div>
			</div>
		</div>
	);
};

export default Sidebar;
