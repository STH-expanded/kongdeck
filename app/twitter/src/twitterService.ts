import Twitter from 'twitter'
import fs from 'fs'

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY ?? '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET ?? '',
  access_token_key: process.env.TWITTER_ACCESS_KEY ?? '',
  access_token_secret: process.env.TWITTER_ACCESS_SECRET ?? ''
})

//Work in progress
export const getList = async (list_id: string) => {
  return client.get('lists/members', { list_id }).then((response) => {
    console.log(response)
    return response
  }).catch((error) => {
    return error
  })
}

export const postStatus = async (tweet: string, kong: string) => {
  const media = await postMedia(kong)
  const status = {
    status: kong + ' says: ' + tweet,
    media_ids: media.media_id_string
  }
  return client.post('statuses/update', status).then((response) => {
    return response
  }).catch((error) => {
    throw error
  })
}

const postMedia = async (kong: string) => {
  const image = fs.readFileSync('./img/' + kong + '.jpg')
  return client.post('media/upload', { media: image }).then((media: any) => {
    return media
  }).catch((error) => {
    throw error
  })
}
