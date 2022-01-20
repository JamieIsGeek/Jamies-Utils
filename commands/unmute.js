const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
  name: 'unmute',
  description: 'Unmute a muted user!',
  async execute(message, args, client, color) {

    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("Error: You do not have permissions to run this command. Please contact an admin if you think this is an issue!")

    const muteRole = message.guild.roles.cache.get('740625393421385868')
    if(!muteRole) return message.reply("Error: The mute role doesn't appear to exist. Please create one!")

    
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply("Error: Please provide a member to unmute!")

    const mod = message.author.username;

    try {
      await member.roles.remove(muteRole);
      await message.react("<:check:740572727303208960>")

      const finished = new MessageEmbed()
      .setTitle("<:check:740572727303208960> | Unmuted!")
      .addField("User:", `${member}`)
      .addField("Moderator", `${mod}`)
      .setColor(color)

      const dmFinished = new MessageEmbed()
      .setTitle(`You have been unmuted in ${message.guild.name}`)
      .addField("Moderator:", `${mod}`)
      .setColor(color)
      .setTimestamp()

      member.send({embeds: [dmFinished]})
      message.channel.send({embeds: [finished]})
    } catch(err) {
      console.log(err)
    }
  }
}