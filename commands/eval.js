const { MessageEmbed } = require('discord.js')

const { inspect } = require('util')

module.exports = {
  name: "eval",
  description: "Make a command with a command",
  async execute(message, args, client, color) {
    if (message.author.id !== process.env.ownerID) return;

    const code = args.join(" ");
    if(!code) return message.channel.send("Please provide code to be executed");

    try {
      const result = eval(code);
      let output = result;

      if(typeof result !== 'string'){
        output = inspect(result)
      message.delete();
      }
    } catch (error) {
      message.channel.send(`An error has occured. | ${error}`)
      console.log(`An error has occured. | ${error}`)
    }
  }
}