
const {readdirSync} = require('fs');
const chalk = require('chalk');

module.exports = (client) => {
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name){
                client.commands.set(pull.name, pull);
                console.log(chalk.green(`[+] Module loaded : ${file}`));
            } else {
				console.log(chalk.red(`[-] Error Loading module : ${file}`));
                continue;
            }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
}


