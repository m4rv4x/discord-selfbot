
module.exports = {
    name: "cat",
    aliases: ['chat'],
    description: "Fetches a random cat image and posts it in the channel.",
    run: async (message, args, command, client) => {
 
if (!args.length) {

  const https = require('https');
  
  https.get('https://api.thecatapi.com/v1/images/search?mime_types=gif', (res) => {
    res.on('data', (data) => {
          const gifUrl = JSON.parse(data)[0].url;
          message.channel.send(gifUrl);
        });
  });
  
  return;
}

      message.channel.send(`https://cataas.com/cat/cute/says/${args.join("%20")}`);

    }
  }



