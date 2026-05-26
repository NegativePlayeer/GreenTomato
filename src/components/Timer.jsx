import { useEffect, useRef, useState } from 'react';
import ButtonPanel from './ButtonPanel';
import TimeSlider from './TimeSlider';

function Timer() {
	const intervalRef = useRef(null);
	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	function handleStart() {
		setIsRunning(true);
	}

	function handlePause() {
		setIsRunning(false);
		clearInterval(intervalRef.current);
	}

	useEffect(() => {
		if (isRunning === true) {
			intervalRef.current = setInterval(() => {
				setSeconds((prevSeconds) => {
					if (prevSeconds === 0) {
						setMinutes((prevMinutes) => prevMinutes - 1);
						return 59;
					}
					return prevSeconds - 1;
				});
			}, 1000);
		}

		return () => clearInterval(intervalRef.current);
	}, [isRunning]);

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
					{minutes}:{seconds === 0 ? '00' : seconds}
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
			<ButtonPanel
				onStart={handleStart}
				onPause={handlePause}
				isRunning={isRunning}
			/>
		</div>
	);
}

export default Timer;
