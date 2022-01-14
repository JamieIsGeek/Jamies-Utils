const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
  name: "ping",
  description: "This is a ping command",
  async execute(message, args, client) {
    var ping = Date.now() - message.createdTimestamp + " ms";
    var wsPing = client.ws.ping + " ms";

    const gatheringPing = new MessageEmbed()
    .setTitle(`Gathering ping...`)
    .setColor('ORANGE')

    const messageSent = await message.channel.send( { embeds: [gatheringPing]})

    const pingGathered = new MessageEmbed()
    .setTitle(`Pong!`)
    .addField('Reponse Ping: ', `${ping}`, true)
    .addField('Websocket Ping: ', `${wsPing}`, true)
    .setColor('RED')

    setTimeout(function () {
      messageSent.edit({ embeds: [pingGathered]})
    }, ms('3s'))
  }
}