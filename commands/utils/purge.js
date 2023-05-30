
module.exports = {
    name: "purge",
    aliases: ['d'],
    description: "Deletes the last message of bot.",
    run: async (message, args, command, client) => {

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 4000)
      }
 
        try {
            const messages = await message.channel.messages.fetch({ limit: 6 });
            const lastMessage = messages.last();
            messages.delete(lastMessage);
            messages.delete(messages.last());
            messages.delete(messages.last());
            messages.delete(messages.last());
            messages.delete(messages.last());
        } catch (error) {
        //console.error(error);
        message.channel.send(`An error occurred: \`${error.message}\``);
        //console.log(`[!] error occurred: \`${error.message}\``);
    }

}

}


