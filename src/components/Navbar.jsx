import { useState } from 'react';

function Navbar() {
	return (
		<div className='bg-card w-full text-card-foreground flex justify-between items-center p-5 border-b border-border'>
			<div>
				<h1 className='uppercase text-2xl'>
					Green{' '}
					<span className='text-green-500'>Tomato</span>
				</h1>
			</div>
		</div>
	);
}

export default Navbar;
