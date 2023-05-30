module.exports = {
    name: "btc-price",
    aliases: ['btc'],
    description: "Shows the current BTC price.",
    run: async (message, args, command, client) => {

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 60000)
      }
      const fetch = require('node-fetch');
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();
      const btcPrice = data.bpi.USD.rate;

      const eurPrice = data.bpi.EUR.rate; // get the BTC price in EUR
      const gbpPrice = data.bpi.GBP.rate; // get the BTC price in GBP
      const currentDate = new Date().toLocaleString();
      await message.channel.send("Fetching BTC price . . .").then(async m => {
          await m.edit(`The current BTC price as of ${currentDate} is \n$${btcPrice} (USD)\n€${eurPrice} (EUR)\n£${gbpPrice} (GBP)`).then(me => deleteMessage(me));


      });


    }
}

