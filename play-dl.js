
const { Client, Intents, VoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior } = require('discord.js-selfbot-v13');
const ytdl = require('ytdl-core-discord');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
const config = require('./config.json');

const token = config.discord_token;
const guildId = '261939673662750721';
const channelId = '1000397725231235205';

client.on('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith('!play')) return;

    const args = message.content.split(' ');
    if (args.length !== 2) {
        return message.channel.send('Please provide a valid YouTube link or search query');
    }

    const guild = client.guilds.cache.get(guildId);
    if (!guild) return console.log('Could not find guild with ID ' + guildId);

    const channel = guild.channels.cache.get(channelId);
    if (!channel || !(channel instanceof VoiceChannel)) {
        return console.log('Could not find voice channel with ID ' + channelId);
    }

    const connection = await channel.join();

    const stream = await ytdl(args[1]).catch((err) => {
        console.log(err);
    });

    if (!stream) {
        return console.log('Could not get audio stream');
    }

    const resource = createAudioResource(stream.stream, {
        inputType: stream.type,
        inlineVolume: true,
    });
    resource.volume.setVolume(0.25);
    const player = createAudioPlayer({
        behaviors: {
            noSubscriber: NoSubscriberBehavior.Play,
        },
    });

    player.play(resource);
    connection.subscribe(player);
});

client.login(token);
