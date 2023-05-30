module.exports = {
    name: "status",
    aliases: ['s'],
    description: "Get Status of the bot.",
    run: async (message, args, command, client) => {

        await message.channel.send("Pinging . . .").then(async m => {
            const uptime = client.uptime;
            const days = Math.floor(uptime / 86400000);
            const hours = Math.floor(uptime / 3600000) % 24;
            const minutes = Math.floor(uptime / 60000) % 60;
            const seconds = Math.floor(uptime / 1000) % 60;
            const humanUptime = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
            m.edit(`[*] Pong ! \`${m.createdTimestamp - message.createdTimestamp}ms\`, real human behavior\nThe base belong to us for \`${humanUptime}\`. `);
            message.channel.send(`[*] Pong ! \`${m.createdTimestamp - message.createdTimestamp}ms\`, real human behavior\n[*] Uptime :  \`${humanUptime}\`.\n[*] Persona :  ??? `).then(me => deleteMessage(me));
        });

        message.channel.send("**[*]** `READY`");

      }
  }


