const express = require('express');
const app = express();
const morgan = require('morgan');

//Setttings
app.set('port', 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require('./routes/index.js'));
app.use('/api/movies', require('./routes/movies.js'));

//Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});
