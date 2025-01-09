function CodeCard() {
	return (
		<div>
			{' '}
			<div className='relative max-w-2xl mx-auto mt-24'>
				<div className='bg-gray-900 text-white p-4 rounded-md'>
					{/* Header with buttons */}
					<div className='flex justify-between items-center mb-2'>
						<span className='text-gray-400 flex gap-2'>
							<div className='w-3 h-3 rounded-full bg-red-500'></div>
							<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
							<div className='w-3 h-3 rounded-full bg-green-500'></div>
						</span>
						<button
							className='bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md'
							data-clipboard-target='#code'
						>
							Copy
						</button>
					</div>

					{/* Code block */}
					<div className='overflow-x-auto'>
						<pre
							id='code'
							className='text-gray-300 bg-gray-800 p-4 rounded-md whitespace-pre overflow-x-auto'
						>
							<code>
								{`
<div className="flex justify-center items-center bg-blue-500 text-white p-4">
   <h1 className="text-2xl">Hello, Tailwind CSS!</h1>
   <a></a>
</div>
					`}
							</code>
						</pre>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CodeCard;
