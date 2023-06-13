
module.exports = {
    name: "status",
    aliases: ['state'],
    description: "Version of software",
    run: async (message, args, command, client, cpu, ram, disk) => {
      
      async function deleteMessage(me){
        setTimeout(() => {
            me.delete();
        }, 60000)
    }

    await message.reply(" . . .").then(async m => {
        const config = require('../../config.json');
        const version = require('../../version.json');
        const uptime = client.uptime;
        const days = Math.floor(uptime / 86400000);
        const hours = Math.floor(uptime / 3600000) % 24;
        const minutes = Math.floor(uptime / 60000) % 60;
        const seconds = Math.floor(uptime / 1000) % 60;
        const humanUptime = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
        const persona = config.persona
        await m.edit(`初段 SHODAN v${version}\nは英語の単語であるため、英語で回答することができます。\n**[*]** Pong! latency is \`${m.createdTimestamp - message.createdTimestamp}ms\`\n**[*]** Uptime : \`${humanUptime}\`.\n**[*]** Persona : \`${persona}\`\n**My code is open source** :\nhttps://github.com/m4rv4x/discord-selfbot`).then(me => deleteMessage(me));
    });

  }
}


