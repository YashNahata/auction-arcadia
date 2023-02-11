import React, { useState, useEffect } from 'react'
import './master.css'
import PlayerInfo from './playerInfo'
import axios from 'axios'
import TeamsCollection from './teamsCollection'
import AddPlayer from './addplayer'

const TeamCollectionWithId = ({ teamId }) => {
	return <TeamsCollection teamId={teamId} />
}

const MainSection = ({ componentId }) => {
	const [user, setUser] = useState({})
	const [playerId, setPlayerId] = useState(1)

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`http://localhost:80/player/${playerId}`)
			setUser(res.data)
		}
		fetchUser()
	}, [playerId])

	//write a function to change the player id and call it on button click
	const changePlayer = (direction) => {
		setPlayerId((prevPlayerId) => {
			const newPlayerId = prevPlayerId + direction
			return newPlayerId >= 0 ? newPlayerId : prevPlayerId
		})
	}

	useEffect(() => {
		const handleKeyPress = (event) => {
			if (event.key === 'ArrowLeft') {
				changePlayer(-1)
			} else if (event.key === 'ArrowRight') {
				changePlayer(1)
			}
		}
		document.addEventListener('keydown', handleKeyPress)
		return () => {
			document.removeEventListener('keydown', handleKeyPress)
		}
	}, [])

	switch (componentId) {
		case 1:
			return (
				<div className="content-wrapper">
					<PlayerInfo user={user} />
				</div>
			)
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			return (
				<div className="content-wrapper">
					<TeamCollectionWithId teamId={componentId} />
				</div>
			)
		case 12:
			return (
				<div className="content-wrapper">
					<AddPlayer />
				</div>
			)

		default:
			return <div>Please select a component</div>
	}
}

export default MainSection
