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

app.get('/', (req, res) => {
    // const query = await axios.get('http://localhost:3001/questions');
    res.render('index', {
        survey: [{
                question: "A delinquent is hassling a girl on a busy street! What will you do?",
                answers: [{
                        answer: "Help without hesitation.",
                        points: {
                            brave: 3
                        }
                    },
                    {
                        answer: "Help, even if scared.",
                        points: {
                            hardy: 2,
                            brave: 2
                        }
                    },
                    {
                        answer: "Call the police.",
                        points: {
                            docile: 1,
                            timid: 1,
                            relaxed: 1
                        }
                    },
                    {
                        answer: "Do nothing out of fear.",
                        points: {
                            timid: 2
                        }
                    },
                ]
            }
        ],
    });
});

app.post('/', (req, res) => {
    var map = new Map();

    Object.values(req.body).map(value => JSON.parse(value)).forEach(elem => {
        for (let [key, value] of Object.entries(elem)) map.set(key, map.has(key) ? map.get(key) + value : value);
    });

    console.log(map)

    var result = Object.fromEntries(map);
    console.log(result);

    // const query = await axios.get('http://localhost:3001/questions');
    res.render('twitter', {
        data: ''
    });
});

app.listen(port, () => console.log('Listening on port :', port));