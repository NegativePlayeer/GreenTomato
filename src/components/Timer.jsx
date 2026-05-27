import { useRef, useState } from 'react';
import ButtonPanel from './ButtonPanel';
import TimeSlider from './TimeSlider';

function Timer() {
	const intervalRef = useRef(null);
	const modeRef = useRef('work');
	const initialMinutesRef = useRef(25);

	const [initialMinutes, setInitialMinutes] = useState(25);
	const [minutes, setMinutes] = useState(initialMinutes);
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [mode, setMode] = useState('work');
	const [sessionNumber, setSessionNumber] = useState(1);

	const CIRCUMFERENCE = 508;

	const totalSecondsLeft = minutes * 60 + seconds;
	const totalSecondsInitial = initialMinutes * 60;
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
							handleFinish();
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

	function handleRestart() {
		setIsRunning(false);
		clearInterval(intervalRef.current);
		intervalRef.current = null;
		setMinutes(initialMinutes);
		setSeconds(0);
		setSessionNumber(1);
	}

	function handleSliderChange(value) {
		if (isRunning) return;
		if (initialMinutes !== minutes) return;
		initialMinutesRef.current = value;
		setInitialMinutes(value);
		setMinutes(value);
	}

	function handleFinish() {
		if (modeRef.current === 'work') {
			const breakMinutes = Math.floor(
				initialMinutesRef.current / 5,
			);

			setSessionNumber((prevSession) => prevSession + 1);
			modeRef.current = 'break';
			setMode('break');
			setInitialMinutes(breakMinutes);
			setMinutes(breakMinutes);
		} else {
			modeRef.current = 'work';
			setMode('work');
			setInitialMinutes(initialMinutesRef.current);
			setMinutes(initialMinutesRef.current);
		}
		setSeconds(0);
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
					{isRunning
						? mode
						: initialMinutes !== minutes
							? 'Pause!'
							: `Time for ${mode}!`}
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
					Session: {sessionNumber}
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
			<TimeSlider
				minutes={initialMinutes}
				onChange={handleSliderChange}
			/>
			<ButtonPanel
				onStart={handleStart}
				onPause={handlePause}
				isRunning={isRunning}
				onRestart={handleRestart}
			/>
		</div>
	);
}

export default Timer;
