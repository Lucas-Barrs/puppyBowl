import { Link } from 'react-router-dom';
import '../index.css';

export default function NavBar() {
	const id = Math.floor(Math.random() * 5 + 1);
	return (
		<>
			<div id='navbar'>
				<Link to='/'>Home</Link>
				<Link to={`/players/${id}`}>Random Player</Link>
				<Link to='/newPlayerForm'>Add New Player</Link>
			</div>
		</>
	);
}
