import Twitter from 'twitter'

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY ?? '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET ?? '',
  bearer_token: process.env.TWITTER_BEARER_TOKEN ?? ''
})

export const getList = async () => {
  try {
    client.get('lists/list')
  } catch (error) {
    console.log(error)
  }
}

export const postStatus = async () => {
  try {
    client.post('statuses/update')
  } catch (error) {
    console.log(error)
  }
}
