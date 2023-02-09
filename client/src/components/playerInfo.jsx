import React from 'react'
import './master.css'

function PlayerInfo(props) {
	const myplayer = props.user && props.user.data
	if (!myplayer) return null

	const {
		player,
		role,
		wickets,
		matches,
		economy,
		runs,
		average,
		base_price,
		strike_rate,
	} = myplayer
	return (
		<>
			<div className="content-wrapper-header">
				<div className="content-wrapper-context">
					<div className="img-content">
						<h1>{player}</h1>
					</div>

					<h3>{role}</h3>
				</div>
				<div className="app-card">
					<img
						className="content-wrapper-img"
						src="./sac_Small-removebg-preview.png"
						alt=""
					/>
				</div>
			</div>
			<div className="content-section">
				<div className="content-section-title">Statistics</div>
				<ul>
					<li className="adobe-product">
						<div className="products">Matches: {matches}</div>
						<span className="status"> runs: {runs}</span>
						<div className="button-wrapper">
							<span className="products">Wickets: {wickets}</span>
						</div>
					</li>
					<li className="adobe-product">
						<div className="products">Average: {average}</div>
						<span className="status">
							<span className=""></span>
							Strike Rate: {strike_rate}
						</span>
						<div className="button-wrapper">
							<span className="products">Economy: {economy}</span>
						</div>
					</li>
				</ul>
			</div>

			<div className="base-price">
				<div className="app-card">
					<span className="something">Base Price: {base_price}</span>
				</div>
			</div>
		</>
	)
}

export default PlayerInfo
