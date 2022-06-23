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

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const { title, author, rating } = req.body;
	console.log(title);
	if (title && author && rating) {
		movies.forEach((movie) => {
			if (movie.id == id) {
				movie.title = title;

				movie.author = author;
				movie.rating = rating;
			}
		});
	} else {
		res.send('error');
	}
	res.json(movies);
});
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	movies.forEach((movie, i) => {
		if (movie.id == id) {
			movies.splice(i, 1);
		}
	}); //para recorrer el arreglo tambien se puede usar el metodo each descargando la libreria underscore.js :slightly_smiling_face:
	res.send(movies);
});

module.exports = router;
