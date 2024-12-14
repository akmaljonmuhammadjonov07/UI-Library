import { CircleArrowDown, CircleArrowUp } from 'lucide-react';
import { useState } from 'react';

const DrawerAccordion = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div>
				<button
					className='w-full text-start flex gap-3 p-0 font-semibold h-auto items-center'
					onClick={() => toggleAccordion()}
				>
					<div> {title}</div>
					<button className='transition-all duration-1000'>
						{isOpen ? <CircleArrowUp /> : <CircleArrowDown />}
					</button>
				</button>
			</div>
			{isOpen && (
				<p className='flex justify-start text-start p-4 mt-0 pt-0 z-10'>
					{content}a
				</p>
			)}
		</div>
	);
};

export default DrawerAccordion;
