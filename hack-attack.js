const { Client, Collection } = require('discord.js-selfbot-v13');
const config = require('./config.json');
const fs = require('fs');

const client = new Client({
    checkUpdate: false,
    ws: { properties: { $browser: "Discord iOS" }}
});

const prefix = "";
client.on('ready', () => {
    console.log('Ready !');
});


client.on('messageCreate', async message => {
    if (!message.member) message.member = await message.guild.members.fetch(message.author.id);
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const delay = Math.floor(Math.random() * 1400) + 2000; // random delay between 1 and 3 seconds
    if (cmd.length == 0) return;
    await message.reply(">gpt").then(async m => {
        const delay = Math.floor(Math.random() * 1400) + 2000; // random delay between 1 and 3 seconds
        await new Promise(resolve => setTimeout(resolve, delay));
        if (message.author.bot) return;
        console.log("HACK READY")
        await m.edit(`Pong! latency is \`${m.createdTimestamp - message.createdTimestamp}ms\`, real human behavior`);
    });
});



client.login(config.token);


