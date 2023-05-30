module.exports = {
    name: "like",
    aliases: ['l'],
    description: "Shows the current BTC price.",
    run: async (message, args, command, client) => {


      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 4000)
      }

      await message.channel.send("Fetching BTC price . . .").then(async m => {
          await m.edit(`The current BTC price is $XXXXX`).then(me => deleteMessage(me));
      });

    }
}