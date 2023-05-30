
module.exports = {
    name: "reset",
    aliases: ['r'],
    description: "Reset State.",
    run: async (message, args, command, client) => {


      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 4000)
      }

      await message.channel.send("```[!] Reseting . . .```").then(async m => {
          setTimeout(() => {
            message.channel.edit("```[*] Ready . . .```");
          }, 8000);
      });


    }
}