module.exports = {
    name: "troll-nadohs",
    aliases: ['troll3'],
    description: "Trolls the user with a random sentence.",
    run: async (message, args, command, client) => {

        const shodanQuotes = require('../data/shodan_quotes.json');

async function deleteMessage(me){
    setTimeout(() => {
        me.delete();
    }, 60000)
}

      const randomIndex = Math.floor(Math.random() * shodanQuotes.length);
      const randomQuote = shodanQuotes[randomIndex];

    while (true) { // infinite loop
        await message.channel.sendTyping();
        const lastMessage = (await message.channel.messages.fetch({ limit: 1 })).first();
        if (lastMessage.author.tag === "ghostface#2343") continue; // continue instead of return
        const randomIndex = Math.floor(Math.random() * shodanQuotes.length);
        const randomQuote = shodanQuotes[randomIndex];
        await lastMessage.reply(randomQuote).then(async m => {

            await deleteMessage(m);
        });
        await new Promise(resolve => setTimeout(resolve, 15000)); // wait 15 seconds before repeating

}
}
}