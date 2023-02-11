import React, { useState } from 'react'
import './master.css'
import TeamsCollection from './teamsCollection'

const Teams = ({ onHrefClick }) => {
	const [selectedTeam, setSelectedTeam] = useState('')

	const teams = [
		{ id: 2, name: 'Chennai Super Kings' },
		{ id: 3, name: 'Mumbai Indians' },
		{ id: 4, name: 'Kolkata Knight Riders' },
		{ id: 5, name: 'Royal Challengers Bangalore' },
		{ id: 6, name: 'Kings XI Punjab' },
		{ id: 7, name: 'Sunrisers Hyderabad' },
		{ id: 8, name: 'Rajasthan Royals' },
		{ id: 9, name: 'Delhi Capitals' },
		{ id: 10, name: 'Deccan Chargers' },
		{ id: 11, name: 'Pune Warriors' },
	]

	return (
		<>
			<div className="left-side">
				<div className="side-wrapper">
					<div className="side-title">Welcome</div>
					<div className="side-menu">
						<a href="#players" onClick={() => onHrefClick(1)}>
							Players
						</a>
					</div>
				</div>
				<div className="side-wrapper">
					<div className="side-title">Teams</div>
					<div className="side-menu">
						{teams.map((team) => (
							<a
								key={team.id}
								href="#teamselection"
								onClick={() => setSelectedTeam(onHrefClick(team.id))}
							>
								{team.name}
							</a>
						))}
						<a href="#addplayer" onClick={() => onHrefClick(12)}>
							Add player
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Teams
