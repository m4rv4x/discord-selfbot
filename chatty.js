const { Client, Collection, VoiceChannel, MessageEmbed, MessageContextMenuInteraction } = require('discord.js-selfbot-v13');
const fs = require('fs');

const client = new Client({
    checkUpdate: false,
    ws: { properties: { $browser: "Discord iOS" }}
});

const config = require('./config.json');
const personas = require('./data/personas.json');
const delay = Math.floor(Math.random() * 1400) + 2000; // random delay between 1 and 3 seconds

                      // CHOOSE ROLE //
const role = personas.shodan;
 
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");


client.on('ready', () => {
    client.user.setActivity('😈', { type: "COMPETING" });
    console.log(`${client.user.username} is running. 😈`);
})

// HANDLE COMMANDS >


    client.on('messageCreate', async message =>{
        if(message.author.bot) return;
        if(config.blacklist_tags.includes(message.author.tag)) return;
        if(!message.guild) return;                          // ONLY (GUILD) SERVER ?

        if(!message.member) message.member = await message.guild.fetchMember(message);      // ONLY SERVER MEMBER

        setTimeout(async () => {
                const reply =   await message.reply(". . .")

                    if (message.author.bot) return;
                    if (message.author.bot) return;
                        const { Configuration, OpenAIApi } = require("openai");
                        const configuration = new Configuration({
                        apiKey: config.openai_token,});
                        const openai = new OpenAIApi(configuration);
                //////////////////////////////////////////////////////////////////////////////////////////////////////////
                      try {
                        const completion = await openai.createChatCompletion({
                            model: "gpt-3.5-turbo",
                            messages:[
                                {"role": "system", "content": role},
                                {"role": "assistant", "content": "An answer to the previous question will go here"},
                                {"role": "user", "content": `${message.content}`}
                //                {"role": "user", "content": "log.txt"}
                        ]});
                        await m.edit(`${completion.data.choices[0].message.content}`) 
                      } catch (err) {
                        await m.edit(`[!] Crashed, #BUG ROUTINE`) 
                        console.error(err);
                        //message.edit('An error occurred processing your request.');
                      }
  
        }, delay);
    });

client.login(config.discord_token);


