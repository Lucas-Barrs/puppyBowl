import { Form } from 'react-router-dom';

export default function NewPlayerForm() {
	return (
		<>
			<h2>New Player Form</h2>
			<Form>
				<label>
					Player Name
					<input
						type='text'
						name='name'
						value={inputs.name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Puppy Breed
					<input
						type='text'
						name='breed'
						value={inputs.breed}
						onChange={(e) => setBreed(e.target.value)}
					/>
				</label>
				<label>
					Image URL
					<input
						type='text'
						name='imageUrl'
						value={inputs.Url}
						onChange={(e) => setImg(e.target.value)}
					/>
				</label>
			</Form>
		</>
	);
}
