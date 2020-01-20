require('dotenv').config()

import express from 'express'
const bodyParser = require('body-parser');
import { getList, postStatus } from './twitterService'
const app = express()
const port = process.env.TWITTER_PORT || 3000

app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.get('/list/:id', async (req, res) => {
  const id = req.params.id
  const response = await getList(id)
  res.send(response)
})

app.post('/status', async (req, res) => {
  const tweet = req.body.tweet
  await postStatus(tweet).then((response) => {
    res.send(response)
  }).catch((error) => {
    res.status(500).send(error)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
