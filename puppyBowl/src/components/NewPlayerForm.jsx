import { useState } from 'react';
import {
	useCreatePlayerMutation,
	useGetPlayersQuery,
} from '../API/playerSlice';

export default function NewPlayerForm() {
	const [name, setName] = useState('');
	const [breed, setBreed] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const [createPlayer, result] = useCreatePlayerMutation();
	const { refetch } = useGetPlayersQuery;

	async function handleSubmit(e) {
		e.preventDefault();
		await createPlayer({ name, breed, imageUrl });
		refetch();
	}

	return (
		<>
			<h3>Add New Player</h3>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type='text'
						name='player-name'
						id='player-name'
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Puppy Breed:
					<input
						type='text'
						name='player-breed'
						id='player-breed'
						placeholder='Breed'
						value={breed}
						onChange={(e) => setBreed(e.target.value)}
					/>
				</label>
				<label>
					Image URL
					<input
						type='text'
						name='imageUrl'
						id='player-imgage'
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
					/>
				</label>
				<button>Submit</button>
			</form>
		</>
	);
}
