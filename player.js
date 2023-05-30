
const { Client } = require('discord.js-selfbot-v13');
const {
	joinVoiceChannel,
	createAudioPlayer,
	createAudioResource,
	entersState,
	StreamType,
	AudioPlayerStatus,
	VoiceConnectionStatus,
} = require('@discordjs/voice');
const { createDiscordJSAdapter } = require('./adapter');

const player = createAudioPlayer();

function playSong() {
	const resource = createAudioResource('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', {
		inputType: StreamType.Arbitrary,
	});

	player.play(resource);

	return entersState(player, AudioPlayerStatus.Playing, 5000);
}

async function connectToChannel(channel) {
	const connection = joinVoiceChannel({
		channelId: '1000397725231235205',
		guildId: '261939673662750721',
		adapterCreator: createDiscordJSAdapter(channel),
	});

	try {
		await entersState(connection, VoiceConnectionStatus.Ready, 30_000);
		return connection;
	} catch (error) {
		connection.destroy();
		throw error;
	}
}

const client = new Client({
	checkUpdate: false,
});

client.on('ready', async () => {
	console.log('Discord.js client is ready!');

	try {
		await playSong();
		console.log('Song is ready to play!');
	} catch (error) {
		console.error(error);
	}
});

client.on('messageCreate', async (message) => {
	if (!message.guild) return;

	if (message.content === '-join') {
		const channel = message.member?.voice.channel;

		if (channel) {
			try {
				const connection = await connectToChannel(channel);
				connection.subscribe(player);
				message.reply('Playing now!');
			} catch (error) {
				console.error(error);
			}
		} else {
			message.reply('Join a voice channel then try again!');
		}
	}
});

client.login('');


