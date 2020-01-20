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
  client.get('lists/members', { list_id }).then((response) => {
    return response
  }).catch((error) => {
    return error
  })
}

export const postStatus = async (tweet: string, media: string) => {
  const image = fs.readFileSync('./img/' + media + '.jpg')
  client.post('media/upload', { media: image }, function (error, media, response) {
    if (!error) {
      console.log(media);
      var status = {
        status: tweet,
        media_ids: media.media_id_string
      }
      client.post('statuses/update', status, function (error, tweet, response) {
        if (!error) {
          console.log(tweet);
        }
      });
    }
  });
}