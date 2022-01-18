const { Permissions } = require('discord.js')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports = {
  name: 'slowmode',
  description: 'Changes the slowmode of the channel',
  async execute(message, args, colour){
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("Error: You do not have permission to run this command!")

    var slowLength = args[0]

    if(!slowLength) return message.reply("Please give me a numnber in seconds to change the slowmode")

    var reason = args.slice(1).join(' ')

    if(!reason){
      var reason =  `Slowmode set to ${slowLength} by ${message.author}`
    }

    if(slowLength > 21600){
      message.reply("Error: The slowmode length cannot be longer than `6 Hours`")
      var slowLength = 216000
    }

    try {

      await message.channel.setRateLimitPerUser(slowLength, reason);

      const finished = new MessageEmbed()
      .setTitle(`Slowmode changed for ${message.channel.name}!`)
      .addField('Moderator: ',`${message.author}`)
      .addField('Length: ',`${slowLength} seconds`)
      .addField('Reason: ',`${reason}`)
      .setColor(colour)
      .setTimestamp()
      
      message.channel.send( {embeds: [finished]})
    }catch(err){
      message.reply(`<@!338063500616138752> | An error has occured, I have logged it! Error: ${err}`)
      console.error(err)
    }
  }
}
