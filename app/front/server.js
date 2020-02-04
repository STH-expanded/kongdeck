const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded());
app.use(cors());

app.get('/', (req, res, next) => {
    axios.get('http://konggo:3001/survey')
        .then(response => res.render('index', {
            survey: response.data
        }))
        .catch(error => next(error));
});

app.post('/', (req, res, next) => {
    if (req.body.reload === "1") {
        if (req.body.tweet) {
            axios.post('http://twitter:3003/status', { tweet:req.body.tweet, media:req.body.kong_id })
                .then(response => {
                    console.log(response)
                    res.render('twitter', {
                        id: req.body.kong_id,
                        list_id: req.body.list_id,
                        list: req.body.list,
                        name: req.body.name,
                        tweets: JSON.parse(req.body.kong_tweets)
                    });
                })
                .catch(error => {
                    next(error)
                    console.log(error)
                });
        } else {
            res.render('twitter', {
                id: req.body.kong_id,
                list_id: req.body.list_id,
                list: req.body.list,
                name: req.body.name,
                tweets: JSON.parse(req.body.kong_tweets)
            });
        }
    } else {
        var map = new Map();
        Object.values(req.body).map(value => JSON.parse(value)).forEach(elem => {
            for (let [key, value] of Object.entries(elem)) map.set(key, map.has(key) ? map.get(key) + value : value);
        });

        axios.post('http://dongapi:3002/kong', Object.fromEntries(map))
            .then(response => {
                axios.get('http://twitter:3003/list/' + response.data.list_id)
                    .then(response2 => {
                        response.data.list = JSON.stringify(response2.data);
                        res.render('twitter', response.data)
                    })
                    .catch(error => next(error));
            })
            .catch(error => next(error));
    }
});

app.listen(port, () => console.log('Listening on port :', port));