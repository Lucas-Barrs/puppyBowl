import './index.css';
import NavBar from './components/NavBar';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<div id='container'>
				<NavBar />
			</div>
			<Routes>
				<Route path='/' element={<AllPlayers />} />
				<Route path='/players/:id' element={<SinglePlayer />} />
				{/* <Route path='/newPlayerForm' element={<NewPlayerForm />} /> */}
			</Routes>
		</>
	);
}

export default App;
