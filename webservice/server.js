const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('../webapp'));

app.use(cookieParser());

const movies = require('./movies.js');
app.use('/api/movies', movies);

app.listen(5730, () => console.log('Server listening on port 5730'));