module.exports = {
    name: "version",
    aliases: ['v'],
    description: "Version of software",
    run: async (message, args, command, client) => {

      
      async function deleteMessage(me){
        setTimeout(() => {
            me.delete();
        }, 5000)
    }

    await message.reply(" . . .").then(async m => {
        const version = require('../../version.json');
        const uptime = client.uptime;
        const days = Math.floor(uptime / 86400000);
        const hours = Math.floor(uptime / 3600000) % 24;
        const minutes = Math.floor(uptime / 60000) % 60;
        const seconds = Math.floor(uptime / 1000) % 60;
        const humanUptime = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
        await m.edit(`初段 SHODAN v${version}\nは英語の単語であるため、英語で回答することができます。`).then(me => deleteMessage(me));
    });

  }
}
