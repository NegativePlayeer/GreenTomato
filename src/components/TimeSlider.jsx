function TimeSlider() {
	return (
		<div className='m-5 flex justify-center'>
			<input
				type='range'
				min='1'
				max='60'
				value='25'
				className='w-48 accent-primary outline-none cursor-pointer'
			/>
		</div>
	);
}

export default TimeSlider;
