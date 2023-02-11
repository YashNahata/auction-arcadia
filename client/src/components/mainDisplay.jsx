import React, { useState, useEffect } from 'react'
import './master.css'
import PlayerInfo from './playerInfo'
import Teams from './teams'
import axios from 'axios'
import MainSection from './mainSection'

const MainDisplay = () => {
	const [componentId, setComponentId] = useState(null)

	const handleHrefClick = (id) => {
		setComponentId(id)
	}

	return (
		<>
			<div className="app">
				<div className="wrapper">
					<Teams onHrefClick={handleHrefClick} />
					<div className="main-container">
						<div className="main-header">
							<a className="menu-link-main" href="#">
								E-Summit'23
							</a>
							<div className="header-menu">
								<a className="main-header-link" href="#">
									<h3>Auction Arcadia</h3>
								</a>
							</div>
						</div>
						<MainSection componentId={componentId} />
					</div>
				</div>
			</div>
		</>
	)
}
export default MainDisplay
