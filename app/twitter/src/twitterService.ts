import Twitter from 'twitter'

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY ?? '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET ?? '',
  access_token_key: process.env.TWITTER_ACCESS_KEY ?? '',
  access_token_secret: process.env.TWITTER_ACCESS_SECRET ?? ''
})

//Work in progress
export const getList = async (list_id: string) => {
  client.get('lists/members', { list_id }).then((response) => {
    return response
  }).catch((error) => {
    return error
  })
}

export const postStatus = async (status: string) => {
  client.post('statuses/update', { status }, (error, response) => {
    if (error) return error
    return response
  })
}
