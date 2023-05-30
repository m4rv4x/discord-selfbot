module.exports = {
    name: "news",
    aliases: ['n'],
    description: "Prints top 10 news titles from google news FRANCE.",
    run: async (message, args, command, client) => {

      const { MessageEmbed } = require('discord.js-selfbot-v13');
      const axios = require('axios');
      const cheerio = require('cheerio');
      //const url = 'https://news.google.com/rss?hl=fr&gl=FR&ceid=FR:fr';
      //const url2 = 'https://news.google.com/rss/search?q=' + args.join('+') + 'economy&hl=fr&gl=FR&ceid=FR:fr';
      //const url = 'https://news.google.com/rss/search?q=' + args.join('+') + '&hl=fr&gl=FR&ceid=FR:fr'; // rewritten line
      //const url = 'https://news.google.com/rss/search?q=' + args.join('+') + '&hl=fr&gl=FR&ceid=FR:fr';
      const url = 'https://news.google.com/rss?hl=fr&gl=FR&ceid=FR:fr';
 
     
      const response = await axios.get(url);
      
      const xml = response.data;
      const $ = cheerio.load(xml);
      const news = [];

      
      await message.channel.send("Fetching News . . .").then(async m => {
        $('item').each(function(i, elem) {
          news.push({
            title: $(this).find('title').text(),
          });
        });
        let title = "Google News TOP 10 France ";
        let top5News = "";
        news.slice(0, 10).forEach((n, i) => {
          top5News += `**${i+1}** : \`\`${n.title}\`\`\n`;
        });
        m.edit(`**${title}**\n${top5News}`);
      });


    }
  }


