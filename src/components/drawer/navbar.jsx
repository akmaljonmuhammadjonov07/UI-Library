import { Moon, Search, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function Navbar() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Sahifa yuklanishida foydalanuvchi tanlovini o'qish
	useEffect(() => {
		const savedMode = localStorage.getItem('darkMode') === 'true';
		setIsDarkMode(savedMode);
		if (savedMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, []);

	// Dark mode tugmachasi bosilganda
	const toggleDarkMode = () => {
		setIsDarkMode(prevMode => {
			const newMode = !prevMode;
			localStorage.setItem('darkMode', newMode); // Tanlovni saqlash
			if (newMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
			return newMode;
		});
	};

	return (
		<div className='h-16 w-full p-3 pl-5 bg-blue-500 dark:bg-[#6D28D9] flex justify-between items-center border-l shadow'>
			<div className='flex gap-2 items-center'>
				<img
					src='/logo.png'
					alt='Logo'
					className='cursor-pointer bg-white rounded-full w-12 h-12'
				/>
				<h1 className='text-white dark:text-gray-200 text-xl font-medium'>
					MyCode
				</h1>
			</div>
			<div className='flex gap-3 items-center'>
				<div className='relative w-full'>
					<input
						type='text'
						placeholder='Search items...'
						className='block w-full rounded-md bg-blue-200 dark:bg-gray-700 px-4 py-2 text-gray-600 dark:text-white outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600'
					/>
					<div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
						<Search size={20} color={isDarkMode ? 'white' : 'gray'} />
					</div>
				</div>
				<button
					onClick={toggleDarkMode}
					className='flex items-center p-2 rounded-md bg-blue-400 hover:bg-blue-600 text-white dark:bg-gray-600 dark:hover:bg-gray-500'
				>
					{isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
				</button>
			</div>
		</div>
	);
}

export default Navbar;
