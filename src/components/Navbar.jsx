import { useState } from 'react';

function Navbar() {
	const [isActive, setIsActive] = useState(true);
	return (
		<div className='bg-card w-full text-card-foreground flex justify-between items-center p-5 border-b border-border'>
			<div>
				<h1 className='uppercase text-2xl'>
					Green{' '}
					<span className='text-green-500'>Tomato</span>
				</h1>
			</div>
			<div className='flex gap-2'>
				<input
					className='bg-zinc-700 p-2 rounded-md placeholder:text-muted-foreground outline-none cursor-pointer'
					placeholder='API key...'
				/>
				<button className='bg-primary p-2 rounded-md cursor-pointer hover:bg-green-600'>
					Accept
				</button>
			</div>
			<div className='flex gap-5'>
				<button
					className={`hover:text-primary transition-colors cursor-pointer ${isActive ? 'text-primary' : ''}`}
				>
					Timer
				</button>
				<button className='hover:text-primary transition-colors cursor-pointer'>
					Dashboard
				</button>
			</div>
		</div>
	);
}

export default Navbar;
