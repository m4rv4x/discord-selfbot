
const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require("@discordjs/voice");
const googleTTS = require('google-tts-api');
const gtts = require('gtts');
const config = require(`${process.cwd()}/config.json`);
const delay = Math.floor(Math.random() * 1400) + 2000; // random delay between 1 and 3 seconds

const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
    client.user.setActivity('🔈', { type: "COMPETING" });
    console.log(`${client.user.tag} is running. 😈`);
    await joinVC(client, config);
});

client.on('voiceStateUpdate', async (oldState, newState) => {
    const oldVoice = oldState.channelId;
    const newVoice = newState.channelId;

    if (oldVoice !== newVoice) {
        if (!oldVoice) {
            // empty
        } else if (!newVoice) {
            if (oldState.member.id !== client.user.id) return;
            await joinVC(client, config);
        } else {
            if (oldState.member.id !== client.user.id) return;
            if (newVoice !== config.Channel) {
                await joinVC(client, config);
            }
        }
    }
});

async function joinVC(client, config) {
    const guild = client.guilds.cache.get(config.Guild);
    const voiceChannel = guild.channels.cache.get(config.Channel);
    const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute:false,
    });

    const speak = async (text) => {
        try {
            const gttsvoice = new gtts(text, 'en');
            const stream = gttsvoice.createStream();
            connection.play(stream);
        } catch (err) {
            console.error(err.stack);
        }
    };
    speak('Hello, I am ready to speak!');
}

client.login(config.discord_token);


