module.exports = {
  name: "encode",
  aliases: ['encode'],
  description: "Protect from CENSURE",
  run: async (message, args, command, client) => {
    if (!args.length) {
      message.channel.send(`https://cataas.com/cat/cute`);
      return;
    }

    let text = args.join(" ");
    let encodedText = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      let hexValue = charCode.toString(16).toUpperCase();
      encodedText += "%" + hexValue;
    }

    setTimeout(() => {
        message.channel.send(`${encodedText}`);
        message.channel.send(`https://cataas.com/cat/cute/says/:${encodedText}`);
      }, 100);

  }
}
