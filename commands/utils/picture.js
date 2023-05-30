
  
module.exports = {
    name: "picture",
    aliases: ['pic'],
    description: "Send a picture",
    run: async (message, args, command, client) => {

        const shodanPictures = require('../data/shodan_quotes.json');

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 90000)
      }

      const randomIndex = Math.floor(Math.random() * shodanPictures.length);
      const randomSentence = shodanPictures[randomIndex];

      await message.channel.sendTyping();
      setTimeout(async () => {
          await message.reply(randomSentence).then(async m => {
              await deleteMessage(m);
          });
      }, 200);

    }
}



