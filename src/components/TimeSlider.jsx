function TimeSlider({ minutes, onChange }) {
	return (
		<div className='m-5 flex flex-col gap-2.5'>
			<div className='flex justify-center'>
				<p className='font-black text-foreground text-lg'>
					{minutes > 1
						? `${minutes} minutes`
						: `${minutes} minute`}{' '}
				</p>
			</div>
			<div className='flex justify-center gap-2.5'>
				<span className='font-black text-foreground text-lg'>
					5
				</span>
				<input
					type='range'
					onChange={(e) => onChange(Number(e.target.value))}
					min={5}
					max={60}
					value={minutes}
					className='w-48 accent-primary outline-none cursor-pointer'
				/>
				<span className='font-black text-foreground text-lg'>
					60
				</span>
			</div>
		</div>
	);
}

export default TimeSlider;
