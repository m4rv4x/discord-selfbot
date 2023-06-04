// JUST LOG EVERYTHING
const { Client, Collection } = require('discord.js-selfbot-v13');
const chalk = require('chalk');
const humanReadableDate = new Date().toLocaleString();
const fs = require('fs');

const client = new Client({
    checkUpdate: false,
    ws: { properties: { $browser: "Discord iOS" }}
});

const config = require('./config.json');
 
client.on('ready', () => {
    client.user.setActivity('🐺', { type: "COMPETING" });
    console.log(chalk.red(`[${humanReadableDate}] ${client.user.tag} is listening 🐺`));
})

client.on('messageCreate', async message =>{
    if(message.author.bot) return;                      // PREVENT BOT
        const author = message.author.tag
        const channel = message.channel.name
        const server = message.guild.name;

        fs.appendFile('big-brother.txt', `[${new Date().toLocaleString()}] ${author}@${server}>${channel}: ${message.content}\n`, function (err) {
            console.log(chalk.gray(`[${humanReadableDate}] [${chalk.blue(server)}]=>[${chalk.blue(channel)}]:`));
            console.log(chalk.green(`[${author}]\t[${chalk.cyan(message.content)}] `));
        });
});

client.login(config.discord_token_logger);


