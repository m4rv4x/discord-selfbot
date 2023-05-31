module.exports = {
  name: "chat-gpt",
  aliases: ['gpt'],
  description: "Talk to chatGPT.",
  run: async (message, args, command, client) => {

    const personas = require('../../data/personas.json');
    const config = require('../../config.json');
    const role = personas[config.persona]

    await message.reply(". . .").then(async m => {

      if (message.author.bot) return;
      if (!args[0]) return message.reply("**[!]** Please provide a message.\n ``Usage : >gpt [message]``");
      if (message.author.bot) return;

      const { Configuration, OpenAIApi } = require("openai");
      const configuration = new Configuration({
        apiKey: config.openai_token,
        responseFormat: "json",
        maxTokens: 2000, // Changed from default value of 60
        stop: ["\n", "\n"]
      });

      const openai = new OpenAIApi(configuration);

      try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages:[
            {"role": "system", "content": role},
            {"role": "assistant", "content": "An answer to the previous question will go here"},
            {"role": "user", "content": `${message.content}`}
          ]
        });
        await m.edit(`${completion.data.choices[0].message.content}`) 
      } catch (err) {
        await m.edit(`[!] Je ne peux pas vous aider mon algorythme est défaillant`) 
        console.error("Invalid OPEN AI TOKEN");
      }

    });

  }
}