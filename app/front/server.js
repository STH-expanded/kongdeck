const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded());

app.get('/', (req, res, next) => {
    axios.get('http://konggo:3001/survey')
        .then(response => res.render('index', { survey: response.data }))
        .catch(error => next(error));
});

app.post('/', (req, res, next) => {
    var map = new Map();
    Object.values(req.body).map(value => JSON.parse(value)).forEach(elem => {
        for (let [key, value] of Object.entries(elem)) map.set(key, map.has(key) ? map.get(key) + value : value);
    });

    axios.post('http://localhost:3002/kong', Object.fromEntries(map))
        .then(response => res.render('twitter', response))
        .catch(error => next(error));
});

app.listen(port, () => console.log('Listening on port :', port));