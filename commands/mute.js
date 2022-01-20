const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')
const ms = require('ms')

module.exports = {
  name: 'mute',
  description: 'Mute anyone in your server',
  async execute(message, args, client, color) {

    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("Error: You do not have permissions to run this command. Please contact an Admin if you think this is an issue!")

    const muteRole = message.guild.roles.cache.get('740625393421385868')
    if(!muteRole) return message.reply("Error: The mute role doesn't appear to exist. Please create one!")

    
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply("Error: Please provide a member to mute!")

    const length = args[1]
    if(!length) return message.reply("Error: Please provide a time length!")

    const reason = args.slice(2).join(' ')
    if(!reason) return message.reply("Error: Please provide a reason for muting the user!")

    const mod = message.author.username;


    try {
      await member.roles.add(muteRole);
      await message.react("<:check:740572727303208960>")

      const finished = new MessageEmbed()
      .setTitle(":shushing_face: | Muted!")
      .addField("User:", `${member}`)
      .addField("Moderator:", `${mod}`)
      .addField("Reason:", `${reason}`)
      .addField("Mute Length:", `${length}`)
      .setColor(color)

      await message.channel.send({embeds: [finished]})


      const dmFinished = new MessageEmbed()
      .setTitle(`You have been muted in ${message.guild.name}`)
      .addField("Moderator:", `${mod}`)
      .addField("Reason:", `${reason}`)
      .addField("Mute Length:", `${length}`)
      .setColor(color)

      member.send({embeds: [dmFinished]})

      setTimeout(function () {

        const dmUndo = new MessageEmbed()
        .setTitle(`You have been unmuted in ${message.guild.name}`)
        .setColor(color)
        .setTimestamp()
        
        member.roles.remove(muteRole);

        member.send({embeds: [dmUndo]})

      }, ms(length))
    } catch(err){
      console.log(err)
    }
  }
}