module.exports = {
    name: "uptime",
    aliases: ['up'],
    description: "Shows the current uptime.",
    run: async (message, args, command, client) => {

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 5000)
      }

      await message.channel.send("Checking uptime . . .").then(async m => {
          const uptime = client.uptime;
          const days = Math.floor(uptime / 86400000);
          const hours = Math.floor(uptime / 3600000) % 24;
          const minutes = Math.floor(uptime / 60000) % 60;
          const seconds = Math.floor(uptime / 1000) % 60;
          const humanUptime = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
          await m.edit(`Uptime : \`${humanUptime}\`.`).then(me => deleteMessage(me));
      });

    }
}

