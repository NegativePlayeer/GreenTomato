import ButtonPanel from './ButtonPanel';
import TimeSlider from './TimeSlider';

function Timer() {
	return (
		<div className='flex flex-col'>
			<svg width='500' height='500' viewBox='0 0 200 200'>
				<circle
					cx='100'
					cy='100'
					r='80'
					fill='none'
					stroke='#27272a'
					strokeWidth='8'
				/>
				<text
					x='100'
					y='65'
					fill='#fafafa'
					fontSize='14'
					fontFamily='Geist Mono, monospace'
					textAnchor='middle'
				>
					Work
				</text>
				<text
					x='100'
					y='108'
					textAnchor='middle'
					fill='#fafafa'
					fontSize='32'
					fontFamily='Geist Mono, monospace'
				>
					25:00
				</text>
				<text
					x='100'
					y='140'
					textAnchor='middle'
					fill='#fafafa'
					fontSize='8'
					fontFamily='Geist Mono, monospace'
				>
					Distraction count: 3
				</text>
				<circle
					cx='100'
					cy='100'
					r='80'
					fill='none'
					stroke='#22c55e'
					strokeWidth='8'
					strokeLinecap='round'
					strokeDasharray='502'
					strokeDashoffset='123'
					transform='rotate(-90 100 100)'
				/>
			</svg>
			<TimeSlider />
			<ButtonPanel />
		</div>
	);
}

export default Timer;
