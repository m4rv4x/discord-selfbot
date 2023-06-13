
module.exports = {
  name: "spam",
  aliases: ['spam'],
  description: "Fetches a random cat image and posts it in the channel.",
  run: async (message, args, command, client) => {

    if (!args.length) {
      const https = require('https');
      for (let i = 0; i < 100; i++) {
        https.get('https://api.thecatapi.com/v1/images/search?mime_types=gif', (res) => {
          let data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });
          res.on('end', () => {
            const gifUrl = JSON.parse(data)[0].url;
            message.channel.send(gifUrl);
          });
        });
        await new Promise(resolve => setTimeout(resolve, 90000));
      }
    }
  }
};

