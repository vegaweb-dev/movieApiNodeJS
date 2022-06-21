const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');
//console.log(movies);         just to verify that I'm receiving the data

router.get('/', (req, res) => {
	res.json(movies);
});

router.post('/', (req, res) => {
	console.log(req.body);
	const { title, author, rating } = req.body;

	if (title && author && rating) {
		const id = movies.length + 1;
		const newMovie = { ...req.body, id };
		movies.push(newMovie);
	} else {
		res.json({ error: 'There was an error' });
	}
	res.json(movies);
});

module.exports = router;
