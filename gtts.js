const discordTTS=require("discord-tts");
const { Client, Intents } = require('discord.js-selfbot-v13');
//const { Client, Intents} = require("discord.js");
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");
const config = require(`${process.cwd()}/config.json`);
const gtts = require('gtts');

const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
    client.user.setActivity('🔈', { type: "COMPETING" });
    console.log(`${client.user.tag} is running. 😈`);
    await joinVC(client, config);
});

let voiceConnection;
let audioPlayer=new AudioPlayer();

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


client.on("messageCreate", async (msg)=>{
    if(msg.content=="tts")
    {
        const stream=discordTTS.getVoiceStream("hello text to speech world");
        const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
        if(!voiceConnection || voiceConnection?.status===VoiceConnectionStatus.Disconnected){
            voiceConnection = joinVoiceChannel({
                channelId: msg.member.voice.channelId,
                guildId: msg.guildId,
                adapterCreator: msg.guild.voiceAdapterCreator,
            });
            voiceConnection=await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
        }
        
        if(voiceConnection.status===VoiceConnectionStatus.Connected){
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
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
