import { useRef, useState } from 'react';
import ButtonPanel from './ButtonPanel';
import TimeSlider from './TimeSlider';

function Timer() {
	const intervalRef = useRef(null);
	const [minutes, setMinutes] = useState(1);
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const CIRCUMFERENCE = 508;
	const INITIAL_MINUTES = 1;

	const totalSecondsLeft = minutes * 60 + seconds;
	const totalSecondsInitial = INITIAL_MINUTES * 60;
	const circleOffset =
		CIRCUMFERENCE *
		(totalSecondsLeft / totalSecondsInitial);

	function handleStart() {
		if (intervalRef.current) return;

		intervalRef.current = setInterval(() => {
			setSeconds((prevSeconds) => {
				if (prevSeconds === 0) {
					setMinutes((prevMinutes) => {
						if (prevMinutes === 0) {
							clearInterval(intervalRef.current);
							intervalRef.current = null;
							setIsRunning(false);
							return 0;
						}
						return prevMinutes - 1;
					});
					return 59;
				}

				return prevSeconds - 1;
			});
		}, 1000);

		setIsRunning(true);
	}

	function handlePause() {
		clearInterval(intervalRef.current);
		intervalRef.current = null;
		setIsRunning(false);
	}

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
					{minutes <= 9 ? `0${minutes}` : minutes}:
					{seconds <= 9 ? `0${seconds}` : seconds}
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
					strokeDasharray='508'
					strokeDashoffset={circleOffset}
					transform='rotate(-90 100 100)'
				/>
			</svg>
			<TimeSlider />
			<ButtonPanel
				onStart={handleStart}
				onPause={handlePause}
				isRunning={isRunning}
			/>
		</div>
	);
}

export default Timer;
