module.exports = {
    name: "troll",
    aliases: ['t'],
    description: "Trolls the user with a random sentence.",
    run: async (message, args, command, client) => {

        const shodanQuotes = require('../data/shodan_quotes.json');
  

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 60000)
      }

      const randomIndex = Math.floor(Math.random() * shodanQuotes.length);
      const randomSentence = shodanQuotes[randomIndex];

      await message.channel.sendTyping();
      setTimeout(async () => {
          await message.reply(randomSentence).then(async m => {
              await deleteMessage(m);
          });
      }, 2000);



    }
}



