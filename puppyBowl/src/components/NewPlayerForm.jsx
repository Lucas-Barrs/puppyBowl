import { Form } from 'react-router-dom';

export default function NewPlayerForm() {
	return (
		<>
			<h3>Add New Player</h3>
			<form>
				<label>
					Name:
					<input
						type='text'
						name='player-name'
						id='player-name'
						placeholder='Name'
						// value={inputs.name}
						// onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Puppy Breed
					<input
						type='text'
						name='player-breed'
						id='player-breed'
						placeholder='Breed'
						// value={inputs.breed}
						// onChange={(e) => setBreed(e.target.value)}
					/>
				</label>
				<label>
					Image URL
					<input
						type='text'
						name='imageUrl'
						id='player-imgage'
						// value={inputs.Url}
						// onChange={(e) => setImg(e.target.value)}
					/>
				</label>
				<button>Submit</button>
			</form>
		</>
	);
}
