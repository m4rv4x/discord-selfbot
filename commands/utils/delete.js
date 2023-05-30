
module.exports = {
    name: "delete",
    aliases: ['d'],
    description: "Deletes the last message of bot.",
    run: async (message, args, command, client) => {

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 4000)
      }
 
        try {
            const messages = await message.channel.messages.fetch({ limit: 2 });
            const lastMessage = messages.last();
            if(lastMessage.author.id === client.user.id){
                await lastMessage.delete();
            }
        } catch (error) {
        console.error(error);
        message.channel.send(`An error occurred: \`${error.message}\``);
        console.log(`[!] error occurred: \`${error.message}\``);
    }

}

}


