import Navbar from '#components/Navbar.jsx';
import Timer from '#components/Timer.jsx';

function App() {
	return (
		<div className='min-h-screen bg-background flex flex-col '>
			<Navbar />
			<main className='flex-1 flex items-center justify-center'>
				<Timer />
			</main>
		</div>
	);
}

export default App;
