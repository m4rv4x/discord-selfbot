// NEW FUNCTION TO RUN COMMANDS WITH 1s DELAY
const { Client, Collection, Interaction } = require('discord.js-selfbot-v13');
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

async function adv() {
  console.log(chalk.green("Sending Adventure command..."));
  await setTimeout(() => {
        client.channels.cache.get(channelid).sendSlash(botid, 'adv');
        }, 15000);
} 

async function advRoutine() {
  console.log(chalk.green("ADV ROUTINE"));

  setInterval(async () => {
    console.log(chalk.green("Loop adv every 13-15sec"));
    client.channels.cache.get(channelid).sendSlash(botid, 'adv');
  }, 15000);
  
}

async function Stats() {
  console.log(chalk.green("Sending Stats command..."));
  await setTimeout(() => {
    client.channels.cache.get(channelid).sendSlash(botid, "stats", "1010674903181172856");
    console.log(chalk.green(message));
    }, 5000);
    //return Stats = 
}

async function searchRoutine() {
  console.log(chalk.green("Sending Search Routine "));
  setInterval(async () => {
    console.log(chalk.green("Loop Search every 10 mins"));
    await Search();
  }, 600000);
  }


async function buyPotion(howmany) {
  console.log(chalk.green("Buying Potions !!"));
  await setTimeout(() => {
    client.channels.cache.get(channelid).sendSlash(botid, "buy", "Health Potion", "2");
    }, 1000);
}

async function heal() {
  console.log(chalk.green("Healing !!"));
  await setTimeout(() => {
  client.channels.cache.get(channelid).sendSlash(botid, "heal");
  }, 4000);

}

async function healPet() {
  console.log(chalk.green("Healing Pet !!"));
  await setTimeout(() => {
  client.channels.cache.get(channelid).sendSlash(botid, "pet heal");
  }, 8000);
}

async function firstrun() {
  console.log(chalk.green("First Run : Function Stats run !!!"));
  await setTimeout(() => {
    client.channels.cache.get(channelid).sendSlash(botid, 'stats', author.botid);
    const channel = client.channels.fetch(channelid);
    // channel.send("Hello")
    channel.sendSlash(botid, "stats", client.author.id);
  }, 1000);
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
  Stats();
  advRoutine();
});


async function first_run() {
  console.log(chalk.green("First Run : Function Stats run !!!"));
  await setTimeout(() => {
    Stats();
  }, 1000);
}


client.on('messageCreate', async message =>{
  if (message.author.id === botid && message.channel.id === channelid) {
  if(message.author.id != botid) return;
  if(message.content.includes("Please get your stats first")) {
    console.log(chalk.green("Received reply from bot, need first_run"));
    firstrun();
  } 
  
  if(message.content.includes("- ghostface has ") && message.content.includes("- Pet Rock has ")) {
  console.log(chalk.red("!!!!!! Low Health"));
  buyPotion();
  heal();
  healPet();
  }

  if(message.content.includes("you can use this command again")) {
    console.log(chalk.red("!!!!!!!!! Cooldown too fast watching stats"));
    Stats();
  }
  if(message.content.includes("- Pet Rock has ")) {
    console.log(chalk.red("!!!!!!!!! Pet : Low Health"));
    buyPotion("2");
    healPet();
  }
  if((message.content.includes("- Health: ")) || (message.content.includes("- ghostface has "))) {
    console.log(chalk.red("!!!!!! Low Health"));
    buyPotion("2");
    heal();
  }
  if(message.content.includes("Bought")) {
    console.log(chalk.blue("BOUGHT"));
  }
  if(message.content.includes("healed")) {
    console.log(chalk.blue("HEALED"));
  }
  if(!message.content.includes("!===")) {
    console.log(message.content);
    console.log(chalk.red("ERROR can't understand Message"));
  }
  console.log(chalk.yellow("Loop Done"))
};
}
),

client.login(config.discord_token);
