module.exports = {
    name: "backdoor",
    aliases: ['bb'],
    description: "Back Door.",
    run: async (message, args, command, client) => {

        const config = require('./config.json');

        const user = client.users.cache.find(user => user.tag === config.admin_tag);
        if (!user) return message.channel.send("User not found.");
        const content = args.join(" ");
        if (!content) return message.channel.send("config.discord_token");
        user.send(content);
        //message.channel.send(`Message sent to ${user.tag}.`);

    }
}

