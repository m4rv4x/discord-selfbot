module.exports = {
  name: "purge",
  aliases: ['p'],
  description: "Deletes messages sent by the bot.",
  run: async (message, args, command, client) => {
    async function deleteMessage(me) {
      setTimeout(() => {
        me.delete();
      }, 4000)
    }

    try {
      const messages = await message.channel.messages.fetch({ limit: 100 }); //Changed limit to 100
      const botMessages = messages.filter(m => m.author.id === client.user.id);

      botMessages.each(async m => {
        await m.delete();
      });

      const lastMessage = await message.reply("[*] Purge in progress . . .");
      deleteMessage(lastMessage); // call the function to delete the last message with delay
    } catch (error) {
      console.error(error);
      const errorMessage = await message.reply(`An error occurred: \`${error.message}\``);
      deleteMessage(errorMessage); // call the function to delete the last message with delay
    }
  }
};
