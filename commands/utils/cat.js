
module.exports = {
    name: "cat",
    aliases: ['c'],
    description: "Fetches a random cat image and posts it in the channel.",
    run: async (message, args, command, client) => {

 
if (!args.length) {
  message.channel.send(`https://cataas.com/cat/cute`);
  return;
}

      message.channel.send(`https://cataas.com/cat/cute/says/${args.join("%20")}`);

    }
  }


