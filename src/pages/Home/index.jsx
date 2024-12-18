function Home() {
	return (
		<div className='w-full z-50'>
			<div className='w-full text-black dark:text-slate-100 min-h-screen'>
				<div className='max-w-3xl mx-auto'>
					<h1 className='text-4xl font-bold mb-6'>Introduction</h1>
					<p className='text-lg text-gray-400 mb-6'>
						Beautifully designed components that you can copy and paste into
						your apps. Accessible. Customizable. Open Source.
					</p>
					<div className='space-y-6'>
						<p className='text-lg'>
							This is <span className='font-bold'>NOT</span> a component
							library. It{`'`}s a collection of re-usable components that you
							can copy and paste into your apps.
						</p>
						<h2 className='text-2xl font-semibold'>
							What do you mean by not a component library?
						</h2>
						<p className='text-lg'>
							I mean you do not install it as a dependency. It is not available
							or distributed via npm.
						</p>
						<p className='text-lg'>
							Pick the components you need. Copy and paste the code into your
							project and customize to your needs. The code is yours.
						</p>
						<p className='text-gray-400 italic'>
							Use this as a reference to build your own component libraries.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
