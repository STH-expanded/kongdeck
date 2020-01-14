import express from 'express'
import { getList, postStatus } from './twitterService'

const app = express()
const port = process.env.TWITTER_PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('A request was made on /')
  console.log(req)
})

app.get('/lists', async (req, res) => {
  await getList()
  console.log('A request was made on /')
  console.log(req)
})

app.post('/status', async (req, res) => {
  await postStatus()
  console.log('Status sent')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
