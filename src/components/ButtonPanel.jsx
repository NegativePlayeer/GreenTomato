function ButtonPanel({ onStart, onPause, isRunning }) {
	return (
		<div className='flex gap-3 justify-center-safe'>
			<button
				onClick={isRunning ? onPause : onStart}
				className='bg-primary p-5 px-10 cursor-pointer rounded-md uppercase hover:bg-green-600'
			>
				{isRunning ? 'Pause' : 'Start'}
			</button>
			<button className='bg-card p-5 px-10 cursor-pointer rounded-md uppercase hover:bg-zinc-900'>
				Reset
			</button>
		</div>
	);
}

export default ButtonPanel;
