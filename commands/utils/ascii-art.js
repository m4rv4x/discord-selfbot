module.exports = {
    name: "ascii-art",
    aliases: ['ascii'],
    description: "Fetches a random cat image and posts it in the channel.",
    run: async (message, args, command, client) => {

        const ascii_art=`?
        …....lovelovelo…
        …..lovelovelove….
        ...lovelovelovelove……………….….
        ...lovelovelovelovelo…………..lovel….
        .....lovelovelovelovelove…….…lovelovelo.
        .. lovelovelovelovelove…….…lovelovelo.
        ...lovelovelovelovelove…..…lovelovelo…
        ..…lovelovelovelovelove..…lovelovelo…*
        …….lovelovelolovelovelovelovelovelo…
        …..….lovelovelovelovelovelovelov…
        ……..….lovelovelovelovelovelo…
        ………..….lovelovelovelove…
        ………………lovelovelo….
        ………………..lovelo…
        ……………………..
        …………………... `



      message.channel.send(ascii_art);

    }
  }


