import { useParams } from 'react-router-dom';

export default function SinglePlayer() {
	const { id } = useParams();
	return (
		<>
			<h2>Single player</h2>
		</>
	);
}
