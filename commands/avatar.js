const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'oof',
  async execute(message, args, color) {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    const av = new MessageEmbed()
    .setDescription(`Avatar of: ${member}`)
    .setImage(member.displayAvatarURL())
    .setColor(color)

    await message.channel.send({ embeds: [av]});
  }
}