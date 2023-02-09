import React, { useState } from 'react'
import axios from 'axios'

const AddPlayer = () => {
	const [teamId, setTeamId] = useState('')
	const [playerId, setPlayerId] = useState('')
	const [price, setPrice] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await axios.post('http://localhost:3000/bidRouter', {
				teamId,
				playerId,
				price,
			})
			console.log(res.data.message)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Team ID"
				value={teamId}
				onChange={(e) => setTeamId(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Player ID"
				value={playerId}
				onChange={(e) => setPlayerId(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Price"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default AddPlayer
