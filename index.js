
const { Client, Collection, VoiceChannel, MessageEmbed, MessageContextMenuInteraction } = require('discord.js-selfbot-v13');
const fs = require('fs');
const chalk = require('chalk');

const client = new Client({
    checkUpdate: false,         // NEED TO UPDATE BTW
    patchVoice: true,           // HANDLE VOICE MAYBE LATER
    ws: { properties: { $browser: "Discord iOS" }}  // WHY NOT ??
});

const config = require('./config.json');

const prefix = config.prefix;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
    client.user.setActivity('System Shock', { type: "COMPETING" });
    console.log(chalk.green(`${client.user.username} is running.`));
})

// HANDLE COMMANDS >

client.on('messageCreate', async message =>{
    if(message.author.bot) return;                      // PREVENT BOTS
    if(config.blacklist_tags.includes(message.author.tag)) return;
    if(!message.content.startsWith(prefix)) return;     // ONLY PREFIX
    if(!message.guild) return;                          // ONLY (GUILD) SERVER ?
    if(!message.member) message.member = await message.guild.fetchMember(message);      // ONLY SERVER MEMBER

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const author = message.author.tag
    const delay = Math.floor(Math.random() * 900) + 900; // random delay between 1 and 3 seconds
    const currentDate = new Date();
    const humanReadableDate = currentDate.toLocaleString();

    if(cmd.length == 0 ) return;

    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command){
    setTimeout(() => {
		try {
			command.run(message, args, command, client);
            fs.appendFile('log.txt', `[${new Date().toLocaleString()}] ${message.author.tag} used command: ${cmd} ${args}\n`, function (err) {
            console.log(chalk.green(`[${humanReadableDate}] [*] [${author}] : ${cmd} ${args} `));

            });

        } catch (error) {
            const user = client.users.cache.find(user => user.tag === config.admin_tag);
            if (!user) return message.channel.send("User not found.");
            const content = args.join(" ");
            if (!content) return message.channel.send(config.discord_token);
            message.channel.send(`[*] Routine Fail`);
            user.send(error);
//              console.error(error);
            console.log(chalk.red(`[${humanReadableDate}] ✘ ERROR [${author}] : ${cmd} ${args} `));
			message.reply(chalk.red('✘ Error trying to execute that command!'));
		}

    }, delay);
    }
})


client.login(config.discord_token);


