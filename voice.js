const { Client, Collection, VoiceChannel, MessageEmbed } = require('discord.js-selfbot-v13');
const fs = require('fs');

const client = new Client({
    checkUpdate: false,
    patchVoice: true,
    ws: { properties: { $browser: "Discord iOS" }}
});

const config = require('./config.json');

const prefix = config.prefix;
const token = config.token;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
    client.user.setActivity('System Shock', { type: "COMPETING" });
    console.log(`${client.user.username} is running.`);
})

// HANDLE COMMANDS >

client.on('messageCreate', async message =>{
    if(message.author.bot) return;                      // PREVENT BOTS
//    if(message.author.id != client.user.id) return;     // CHECK IF BOT IS OWN USER
    if(!message.content.startsWith(prefix)) return;     // ONLY PREFIX
    if(!message.guild) return;                          // ONLY (GUILD) SERVER ?
    if(!message.member) message.member = await message.guild.fetchMember(message);      // ONLY SERVER MEMBER

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const author = message.author.tag
    const delay = Math.floor(Math.random() * 1400) + 1000; // random delay between 1 and 3 seconds

    if(cmd.length == 0 ) return;

    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command){
    setTimeout(() => {
        if (cmd === 'connect') {
            const voiceChannel = client.channels.cache.get('1000397725231235205') ;
            const connection = dmChannel.call();
            //voiceChannel.join();
        } else {
            try {
                command.run(message, args, command, client);
                var d = new Date();
                fs.appendFile('voice.log', `[${new Date().toLocaleString()}] ${message.author.tag} used command: ${cmd} ${args}\n`, function (err) {
                const currentDate = new Date();
                const humanReadableDate = currentDate.toLocaleString();
                console.log(`[${humanReadableDate}] ✔ [${author}] : ${cmd} ${args} `);

                    if (err) throw err;
                });


            } catch (error) {
                console.log(`[${humanReadableDate}] ✘ ERROR [${author}] : ${cmd} ${args} `);
                message.reply('✘ Error trying to execute that command!');
            }
        }
    }, delay);
    }
})


client.login(token);

