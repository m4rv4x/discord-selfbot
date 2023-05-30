
module.exports = {
    name: "disable",
    aliases: ['d'],
    description: "Disable State.",
    run: async (message, args, command, client) => {


      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 4000)
      }

      await message.channel.send("```[!] Disabled for 10 minutes . . .```").then(async m => {
          setTimeout(() => {
            message.channel.send("**[*]** `READY`");
          }, 600000);
      });


    }
}


