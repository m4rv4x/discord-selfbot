const { basename } = require("discord.js");

module.exports = {
    name: "more-help",
    aliases: ['h'],
    description: "Shows the available commands.",
    run: async (message, args, command, client) => {


      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 90000)
      }

      await message.channel.send("Showing available commands . . .").then(async m => {
        await m.edit(`Available commands: \`\`\`>btc-price :\t    Fetch BTC price\n>cat [message] :\tWhat the cat says\n>delete :\t       Delete last message\n>disable :\t       Disable bot\n>gpt [instruction]:\t Speak to AI\n>help (>more-help): Print this message\n>news :\t          Print News from Google\n(>more-news [category]) : Get more news about [category]\n>picture :\t       Send random pic\n>ping :\t        Show Latency\n>purge :\t        Delete all messages\n>pwned [email] :\t   Check if mail has been pwnd\n>reset :\t      Try to Reset Bot\n>status :\t           Show Bot State\n>troll :\t          Troll Somebody\n>troll3 :\t        Troll another bot \`\`\``).then(me => deleteMessage(me));
    });

    }
}

