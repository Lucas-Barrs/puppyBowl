import { useParams } from 'react-router-dom';
import { useGetSinglePlayerQuery } from '../API/playerSlice';

export default function SinglePlayer() {
	const { id } = useParams();
	const { data, isLoading } = useGetSinglePlayerQuery(id);
	const player = data?.data.player;

	return (
		<>
			<h2>Single player</h2>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<h3>{player.name}</h3>
					<p>{player.breed}</p>
					<img src={player.imageUrl} alt={`${player}'s image`} />
					<br />
					<button>Back</button>
					<button>Remove</button>
				</div>
			)}
		</>
	);
}
