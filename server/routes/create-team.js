const express = require('express')
const router = express.Router()
const Team = require('../models/Team')

router.post('/', (req, res) => {
	const body = req.body
	const team = new Team(body)
	team.save()

	res.json({ message: 'success' })
})
router.get('/', (req, res) => {
	Team.find({}, (err, teams) => {
		if (err) {
			res.json({ message: err })
		}
		res.json(teams)
	})
})
module.exports = router
