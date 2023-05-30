
module.exports = {
    name: "kill",
    aliases: ['k'],
    description: "Kills the javascript node.",
    run: async (message, args, command, client) => {


      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 10000)
      }

      await message.channel.send("[!] Self-Killing . . .").then(async m => {
          await m.edit(`[*] Terminated`);
          process.exit(1);
      });

    }

}


