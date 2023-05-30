module.exports = {
    name: "base",
    aliases: ['b'],
    description: "Plays the song All Your Base Are Belong To Us.",
    run: async (message, args, command, client) => {

      await message.channel.send("https://www.youtube.com/watch?v=mvWZq1S9x0g");

    }
}
