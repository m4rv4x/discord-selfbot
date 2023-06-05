// NEW FUNCTION TO RUN COMMANDS WITH 1s DELAY
const { Client, Collection } = require('discord.js-selfbot-v13');
const chalk = require('chalk');
const humanReadableDate = new Date().toLocaleString();
const fs = require('fs');
const botid = "450323683840491530"
const channelid = "1000397725231235205"

const client = new Client({
    checkUpdate: false,
    ws: { properties: { $browser: "Discord iOS" }}
});

const config = require('./config.json');
const { send } = require('process');

process.on("unhandledRejection", (error) => {
    if (
      error
        .toString()
        .includes("Cannot read properties of undefined (reading 'type')")
    )
      return;
    if (error.toString().includes("INTERACTION_TIMEOUT")) return;
    if (error.toString().includes("BUTTON_NOT_FOUND")) return;
    if (error.toString().includes("Invalid Form Body")) return;
    if (
      error
        .toString()
        .includes("COMPONENT_VALIDATION_FAILED: Component validation failed")
    )
      return;
    if (error.toString().includes("Cannot send messages to this user"))
      return console.error(
        chalk.red(
          "Make sure all of the users are in a server where Dank Memer is in"
        )
      );
    console.log(chalk.gray("—————————————————————————————————"));
    console.log(
      chalk.white("["),
      chalk.red.bold("Anti-Crash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Unhandled Rejection/Catch")
    );
    console.log(chalk.gray("—————————————————————————————————"));
  
    console.error("unhandledRejection", error);
  });

client.on('ready', () => {
    client.user.setActivity('Playing RPG', { type: "COMPETING" });
    console.log(chalk.red(`[${humanReadableDate}] ${client.user.tag} RPG BOT STARTED`));
    console.log(chalk.yellowBright(`Don't know how to set up? Check our Github: \nhttps://github.com/m4rv4x/rpg-bot`));
    farm_routine();
});

client.on('messageCreate', async message =>{
    if(message.author.id != botid) return;
    if(!message.author.bot) return;
    if(message.content.includes("de flèche pour ton arc")){
        return message.channel.sendSlash(botid, "rpg acheter", "106", "50");
//        console.log(chalk.yellow("[!] Need Arrows !!!"));
//        buy_arrows();
    }
    if(message.content.includes("Please get your stats first")){
        console.log(chalk.yellow("[!] First Start !!!"));
        first_run();
    }
    if(message.content.includes("Tu es en manque d'énergie")){
        pomme();
//        return message.channel.sendSlash(botid, "rpg manger", "Pomme", "10");
//        return message.channel.sendSlash(botid, "rpg acheter", "102", "10");
//        console.log(chalk.yellow("[!] Need to Eat !!!"));
    }
    if(message.content.includes(" Mange de la nourriture afin d'obtenir des points de vie")){
        wait
        croissant();
//        return message.channel.sendSlash(botid, "rpg manger", "Pomme", "10");
//        return message.channel.sendSlash(botid, "rpg acheter", "102", "10");
//        console.log(chalk.yellow("[!] Need to Eat !!!"));
    }
    if(message.content.includes("as pas assez de pomme")){
        wait(2);
        pomme();
        return message.channel.sendSlash(botid, "rpg acheter", "102", "10");
//        console.log(chalk.yellow("[!] Need Food !!!"));
//        buy_food();
    }
    if(message.content.includes("pas dépasser vos points d'énergie maximum")){
        console.log(chalk.yellow("[!] No Energy, Sleeping !!!"));
        wait(5);
    }
    if(message.content.includes("patienter pour réexécuter cette commande")){
        console.log(chalk.yellow("[!] TOO QUICK - COOLDOWN 30sec !!!"));
        wait(30);
    }
    if(message.content.includes("econde(s) pour réexécuter cette commande")){
        console.log(chalk.blue(message.content));
        const match = message.content.match(/^.*patienter `(\d+)` minute\(s\)`(\d+)` seconde\(s\).*$/);
        if (match) {
          let minutes = parseInt(match[1]);
          const seconds = parseInt(match[2]);
          if (isNaN(minutes)) {
            minutes = 0;
          }
          console.log(minutes, seconds);
          DELAY = minutes * 60 + seconds + 10;
          const remainingTime = DELAY - (Date.now() - startTime);
          console.log(remainingTime);
          console.log(chalk.cyan(`[*] Hunt loop ${seconds}s remaining`));
          farm_loop(DELAY);
        }
    }
});


async function check_inventory() {
    client.channels.cache.get(channelid).sendSlash(botid, "rpg inventaire");
    console.log(chalk.cyan(`[*] Checking Inventory`));
}

async function check_profile() {
    client.channels.cache.get(channelid).sendSlash(botid, "rpg profil");
    console.log(chalk.cyan(`[*] Checking Profile`));
}

function farm_routine() {
    setTimeout(async () => {
        try {
            client.channels.cache.get(channelid).sendSlash(botid, "rpg-farm chasser");
        } catch (error) {
            console.log(error)
        }
        console.log(chalk.red(`[${humanReadableDate}] ${client.user.tag} Hunting !`));
    }, 3000);
    setTimeout(async () => {
        try {
            client.channels.cache.get(channelid).sendSlash(botid, "rpg-farm pecher");
        } catch (error) {
            console.log(error)
        }
        console.log(chalk.red(`[${humanReadableDate}] ${client.user.tag} Hunting !`));
    }, 3000);
    setTimeout(async () => {
        try {
            client.channels.cache.get(channelid).sendSlash(botid, "rpg-farm miner");
        } catch (error) {
            console.log(error)
        }
        console.log(chalk.red(`[${humanReadableDate}] ${client.user.tag} Hunting !`));
    }, 3000);
    setTimeout(async () => {
        try {
            client.channels.cache.get(channelid).sendSlash(botid, "rpg-farm couper");
        } catch (error) {
            console.log(error)
        }
        console.log(chalk.red(`[${humanReadableDate}] ${client.user.tag} Hunting !`));
    }, 3000);
    setTimeout(async () => {
        try {
            client.channels.cache.get(channelid).sendSlash(botid, "rpg-farm cueillir");
        } catch (error) {
            console.log(error)
        }
        console.log(chalk.red(`[${humanReadableDate}] ${client.user.tag} Hunting !`));
        farm_loop();
    }, 3000);
}

function farm_loop() {
  console.log(chalk.cyan(`[*] Hunt loop waiting ~3min delay for next hunt`));
  setTimeout(async () => {
    client.channels.cache.get(channelid).sendSlash(botid, "rpg-farm chasser");
    console.log(chalk.redBright(`[*] Hunt loop again`));
    farm_routine(); // call the function recursively 
  }, 190000);
}

function buy_arrows() {
    setTimeout(async () => {
        await client.channels.cache.get(channelid).sendSlash(botid, "rpg acheter", "106", "50");
        console.log(chalk.blueBright(`[*] Buying Arrows...`));
    }, 3000);
}

function pomme() {
    setTimeout(async () => {
        await client.channels.cache.get(channelid).sendSlash(botid, "rpg acheter", "102", "10");
        console.log(chalk.blueBright(`[*] Buying Food 10x Pommes`));
    }, 3000);
    setTimeout(async () => {
        await client.channels.cache.get(channelid).sendSlash(botid, "rpg manger", "Pomme", "10");
        console.log(chalk.green(`[*] Eating food`));
    }, 3000);
}

function croissant() {
    setTimeout(async () => {
        await client.channels.cache.get(channelid).sendSlash(botid, "rpg acheter", "104", "2");
        console.log(chalk.blueBright(`[*] Buying Food 2x Croissant`));
    }, 3000);
    setTimeout(async () => {
        await client.channels.cache.get(channelid).sendSlash(botid, "rpg manger", "Croissant", "2");
        console.log(chalk.green(`[*] Eating 2x Croissant`));
    }, 3000);
}

function wait(timing) {
    console.log("Waiting for 10 seconds...");
    setTimeout(() => {
      console.log("Finished waiting for 10 seconds!");
    }, timing * 1000);
  }

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

client.on("error", (error) => {
    if (error.code === "INTERACTION_TIMEOUT") {
      sleep(60);
      main();
    }
  });

client.login(config.discord_token);
