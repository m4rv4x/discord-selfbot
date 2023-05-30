module.exports = {
    name: "version",
    aliases: ['v'],
    description: "Version of software",
    run: async (message, args, command, client) => {

      await message.channel.send("初段 SHODAN-0.3-beta\nは英語の単語であるため、英語で回答することができます。");

    }
}
