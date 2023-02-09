import React from 'react'
import './master.css'

const teams = [
	{
		team_id: 1,
		team_name: 'Team 1',
		team_purse: 100000000,
		players: [
			{
				player_id: 1,
				player_name: 'Player 1',
				player_price: 50000000,
				player_role: 'Batsman',
			},
			{
				player_id: 2,
				player_name: 'Player 2',
				player_price: 30000000,
				player_role: 'Batsman',
			},
			{
				player_id: 3,
				player_name: 'Player 3',
				player_price: 20000000,
				player_role: 'Batsman',
			},
		],
	},
	{
		team_id: 2,
		team_name: 'Team 2',
		team_purse: 100000000,
		players: [
			{
				player_id: 4,
				player_name: 'Player 4',
				player_price: 50000000,
				player_role: 'Batsman',
			},
			{
				player_id: 5,
				player_name: 'Player 5',
				player_price: 30000000,
				player_role: 'Batsman',
			},
			{
				player_id: 6,
				player_name: 'Player 6',
				player_price: 20000000,
				player_role: 'Batsman',
			},
		],
	},
	{
		team_id: 3,
		team_name: 'Team 3',
		team_purse: 100000000,
		players: [
			{
				player_id: 7,
				player_name: 'Player 7',
				player_price: 50000000,
				player_role: 'Batsman',
			},
			{
				player_id: 8,
				player_name: 'Player 8',
				player_price: 30000000,
				player_role: 'Batsman',
			},
			{
				player_id: 9,
				player_name: 'Player 9',
				player_price: 20000000,
				player_role: 'Batsman',
			},
		],
	},
	{
		team_id: 4,
		team_name: 'Team 4',
		team_purse: 100000000,
		players: [
			{
				player_id: 10,
				player_name: 'Player 10',
				player_price: 50000000,
				player_role: 'Batsman',
			},
			{
				player_id: 11,
				player_name: 'Player 11',
				player_price: 30000000,
				player_role: 'Batsman',
			},
			{
				player_id: 12,
				player_name: 'Player 12',
				player_price: 20000000,
				player_role: 'Batsman',
			},
		],
	},
]

const TeamsCollection = (props) => {
	let team_id = props.teamId - 1

	let currentTeam = teams.find((team) => team.team_id === team_id)

	return (
		<div className="content-section">
			<div className="content-section">
				<ul>
					<li className="adobe-product">
						<div className="products">{currentTeam.team_name}</div>
						<span className="products">Purse: {currentTeam.team_purse}</span>
					</li>
				</ul>
			</div>

			<div className="apps-card">
				{currentTeam &&
					currentTeam.players.map((player) => (
						<div className="app-card">
							<span></span>
							<div className="products">{player.player_name}</div>
							<div className="app-card-buttons">
								<button className="content-button status-button">
									{player.player_role}
								</button>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}
export default TeamsCollection
