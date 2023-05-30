
module.exports = {
    name: "embed",
    aliases: [],
    description: "Sends an embed.",
    run: async (message, args, command, client) => {
const { WebEmbed } = require('discord.js-selfbot-v13');

      //message.delete();

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 3000)
      }

      if (!args[0]) return await message.channel.send("Please put some arguments to customize your embed");
      const allParameters = args.join(' ');

      const Discord = require('discord.js-selfbot-v13');
      // Selfhost WebEmbed: https://github.com/aiko-chan-ai/WebEmbed

      const w = new Discord.WebEmbed({
        shorten: true,
        hidden: false, // if you send this embed with MessagePayload.options.embeds, it must set to false
        baseURL: '', // if you want self-host API, else skip :v
        shortenAPI: '', // if you want Custom shortenAPI (Method: Get, response: Text => URL), else skip :v
      })
          .setAuthor({ name: 'hello', url: 'https://google.com' })
          .setColor('RED')
          .setDescription('description uh')
          .setProvider({ name: 'provider', url: 'https://google.com' })
          .setTitle('This is Title')
          .setURL('https://google.com')
          .setImage(
              'https://cdn.discordapp.com/attachments/820557032016969751/959093026695835648/unknown.png',
          )
          .setVideo(
              'https://cdn.discordapp.com/attachments/877060758092021801/957691816143097936/The_Quintessential_Quintuplets_And_Rick_Astley_Autotune_Remix.mp4',
          );
      message.channel.send({ content: ```Hello world```, embeds: [w] }) // Patched :)

    }
}
