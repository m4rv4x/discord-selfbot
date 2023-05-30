
module.exports = {
    name: "pwned",
    aliases: ['pw'],
    description: "Check if email is breached on https://haveibeenpwned.com/API/v2",
    run: async (message, args, command, client) => {
      const fetch = require('node-fetch');
      const email = args[0];
      const response = await fetch(`https://haveibeenpwned.com/api/v2/breachedaccount/${email}`);
      if (response.status === 200) {
        await message.reply(`Your email ${email} has been breached.`);
      } else if (response.status === 404) {
        await message.reply(`Your email ${email} has not been breached.`);
      } else {
        await message.reply(`An error occurred while checking your email.`);
      }
    }
}


