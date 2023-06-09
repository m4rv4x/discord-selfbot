
// NEW FUNCTION TO RUN COMMANDS WITH 1s DELAY
const { Client, Collection } = require('discord.js-selfbot-v13');
const chalk = require('chalk');
const humanReadableDate = new Date().toLocaleString();
const fs = require('fs');
const botid = "170915625722576896"
const channelid = "1000402540908789820"
const config = require('./config.json');
const { send } = require('process');

const client = new Client({
    checkUpdate: false,
    ws: { properties: { $browser: "Discord iOS" }}
});

function Adventure(channelid) {
      wait(12);
      console.log(chalk.green("Sending Adventure command..."));
      client.channels.cache.get(channelid).sendSlash(botid, 'adv');   
      const message = waitReply(channelid, botid);
  }

function buyPotion() {
  console.log(chalk.green("Buying Potions !!"));
  setTimeout(() => {
    client.channels.cache.get(channelid).sendSlash(botid, 'buy', "Health Potion", "1");
    }, 1000);
    message = waitReply(channelid, botid);
}

function heal() {
  console.log(chalk.green("Healing !!"));
  setTimeout(() => {
  client.channels.cache.get(channelid).sendSlash(botid, "heal");
  }, 1000);
  message = waitReply(channelid, botid);
}


function healPet() {
  console.log(chalk.green("Healing Pet !!"));
  setTimeout(() => {
  client.channels.cache.get(channelid).sendSlash(botid, "pet heal");
  }, 3000);
  message = waitReply(channelid, botid);
}

function firstrun() {
  console.log(chalk.green("First Run : Function Stats run !!!"));
  setTimeout(() => {
    client.channels.cache.get(channelid).sendSlash(botid, 'stats', author.botid);
    const channel = client.channels.fetch(channelid);
    // channel.send("Hello")
    channel.sendSlash(botid, "stats", "1010674903181172856");
  }, 1000);
}


function wait(timing) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timing * 1000);
  });
}


function waitReply(channelid, botid) {
  return new Promise(resolve => {
    client.on('messageCreate', message => {
      if (message.author.id === botid && message.channel.id === channelid) {
        resolve(message);
      }
    });
  });
}


client.on('ready', async () => {
  console.log(chalk.yellow(`${client.user.username} is ready!`));
  const channel = await client.channels.fetch(channelid);
  // channel.send("Hello")
  channel.sendSlash(botid, "stats", "1010674903181172856");
  message = await waitReply(channelid, botid);
//  wait(15);
  while (1) {
    console.log(chalk.blue(message.content))
    console.log(chalk.green("LOOP START checking response"))
    if (message.content.includes("Please get your stats first")) {
      console.log(chalk.green("Received reply from bot, need first_run"));
      firstrun();
    }

      if (message.content.includes("- ghostface has ") || message.content.includes("- Health: ")) {
      console.log(chalk.red("!!!!!! Low Health"));
      buyPotion();
      await wait(5);
      heal();
      await wait(5);
    }

    if (message.content.includes("- Pet Rock has ")) {
      console.log(chalk.red(" !!!!!!!!! Pet : Low Health"));
      buyPotion();
      await wait(5);
      healPet();
      await wait(5);
    }

    else {
      Adventure(channelid)
      message = await waitReply(channelid, botid);
      console.log(chalk.green("[*] ADV"));
      await wait(15)
    }
    wait(11);
    console.log(chalk.green("LOOP END"))
  }
  console.log(chalk.red("LOOP STOP"));
})



function first_run() {
  console.log(chalk.green("First Run : Function Stats run !!!"));
  setTimeout(() => {
    client.channels.cache.get(channelid).sendSlash(botid, 'stats', author.botid);
    const channel = client.channels.fetch(channelid);
    // channel.send("Hello")
    channel.sendSlash(botid, "stats", "1010674903181172856");
  }, 1000);
}


client.login(config.discord_token);


