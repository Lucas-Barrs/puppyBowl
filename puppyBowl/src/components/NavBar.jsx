import { Link } from 'react-router-dom';
import '../index.css';

export default function NavBar() {
	return (
		<>
			<div id='navbar'>
				<Link to='/'>Home</Link>
				<Link to='/newPlayer'>New Player</Link>
				<Link to='/`${player.id}`'>Single Player</Link>
			</div>
		</>
	);
}
