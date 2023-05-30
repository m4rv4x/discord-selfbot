
module.exports = {
    name: "message",
    aliases: ['msg'],
    description: "Sends [user] [message] .",
    run: async (message, args, command, client) => {
 
        const user = client.users.cache.find(user => user.tag === args[0]);
        if (!user) return message.channel.send("User not found.");
        const content = args.slice(1).join(" ");
        if (!content) return message.channel.send("Usage : >msg [user.tag] [content]");
        user.send(content);
        message.channel.send(`Message sent to ${user.tag}.`);

    }
}

