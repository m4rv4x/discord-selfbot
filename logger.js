
// LOGGING MESSAGES AND INTERACTIONS
const { Client, Collection } = require('discord.js-selfbot-v13');
const chalk = require('chalk');
const humanReadableDate = new Date().toLocaleString();
const fs = require('fs');
const logfile = "big-brother.log"

const client = new Client({
    checkUpdate: false,
    ws: { properties: { $browser: "Discord iOS" }}
});

const config = require('./config.json');

client.on('ready', () => {
    client.user.setActivity('🐺', { type: "COMPETING" });
    console.log(chalk.red(`[${humanReadableDate}] ${client.user.tag} is listening 🐺⚠⚠`));
 
 // Check if logs exists
 if (fs.existsSync(logfile)) {
    fs.stat(logfile, function(err, stats) {
        const fileSizeInBytes = stats.size; 
        const fileSizeInMegabytes = fileSizeInBytes / (1024*1024);   
        console.log(chalk.yellow(`[LOG SIZE] [${logfile}]: ${fileSizeInMegabytes.toFixed(2)} MB`));                                
});
} else {         
     // Create file
 fs.writeFileSync(logfile, '');
 console.log('File created'); 
 console.log('[*] Created Log File');
}
       
})  
      

client.on('messageCreate', async message =>{
    if(message.author.bot) return;  // PREVENT BOT
        const author = message.author.tag
        const channel = message.channel.name
        const guild = message.guild.name;

        fs.appendFile('big-brother.log', `[${new Date().toLocaleString()}] ${author}@${guild}>${channel}: ${message.content}\n`, function (err) {
            console.log(chalk.gray(`[${humanReadableDate}] [${chalk.blue(guild)}]=>[${chalk.blue(channel)}]:`));
            console.log(chalk.green(`[${author}]\t[${chalk.cyan(message.content)}] `));
            
        });
});

client.login(config.discord_token_logger);

