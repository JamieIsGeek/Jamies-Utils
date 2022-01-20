const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
  name: 'kick',
  description: 'Kick a member from your server!',
  async execute(message, args, client, color) {
    
    if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return;

    const kickUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!kickUser) return message.reply("Please ping a member to be kicked!");

    const kickReason = args.slice(1).join(' ');
    if(!kickReason) return message.reply("Please provide a reason to kick the user!")

    const mod = message.author.username

    try {
      await kickUser.kick()
      const kickFinished = new MessageEmbed()
      .setTitle(":wave: | User Kicked!")
      .addField("Kicked User: ", `${kickUser}`, true)
      .addField("Responsible Moderator: ", `${mod}`, true)
      .addField("Reason: ", `${kickReason}`)
      .setColor(color)

      await message.channel.send({ embeds: [kickFinished]})
    } catch(err){
      console.log(err)
    }
  }
}