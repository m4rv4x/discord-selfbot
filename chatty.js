const { Client } = require('discord.js-selfbot-v13');
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
 
client.on('ready', () => {
    client.user.setActivity('😈', { type: "COMPETING" });
    console.log(`${client.user.username} is running. 😈`);
})



client.on('messageCreate', async message =>{
    if(message.author.bot) return;                      // PREVENT BOT
    if(config.blacklist_tags.includes(message.author.tag)) return;
    if(!message.guild) return;                          // ONLY (GUILD) SERVER ?
    if(!message.member) message.member = await message.guild.fetchMember(message);      // ONLY SERVER MEMBER
    const trigger = ['gpt', 'chatgpt', 'shodan', 'ia', '?'];

        setTimeout(async () => {
                const reply =   await message.reply(". . .")
                    if (message.author.bot) return;
                        const { Configuration, OpenAIApi } = require("openai");
                        const configuration = new Configuration({
                          apiKey: config.openai_token,
                          responseFormat: "json",
                          maxTokens: 2000, // Changed from default value of 60
                          stop: ["\n", "\n"]
                        });
                  
                        const openai = new OpenAIApi(configuration);
                //////////////////////////////////////////////////////////////////////////////////////////////////////////
                try {
                    const completion = await openai.createChatCompletion({
                      model: "gpt-3.5-turbo",
                      temperature: 0.5,
                      messages:[
                        {"role": "system", "content": role},
                        {"role": "assistant", "content": "An answer to the previous question will go here"},
                        {"role": "user", "content": `${message.content}`}
                      ]});
                        await reply.edit(`${completion.data.choices[0].message.content}`) 
                      } catch (err) {
                        await message.reply(`[!] Crashed, #BUG ROUTINE`) 
                        console.error(err);
                        //message.edit('An error occurred processing your request.');
                      }
        }, delay);
    });

client.login(config.discord_token);
