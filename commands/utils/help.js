const { basename } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ['h'],
    description: "Shows the available commands.",
    run: async (message, args, command, client) => {


      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 60000)
      }

      await message.channel.send("Showing available commands . . .").then(async m => {
        await m.edit(`Available commands: \`cat\`, \`gpt\`, \`btc-price\`, \`news\`, \`more-news\`, \`picture\`, \`disable\`, \`ping\`, \`troll\`, \`uptime\`, \`troll-nadohs\``).then(me => deleteMessage(me));
    });

    }
}

