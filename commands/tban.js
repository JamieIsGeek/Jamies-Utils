const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
  name: 'tban',
  description: 'Tempban anyone from your server',
  async execute(message, args, client, color) {

    if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply("Error: You do not have permissions to ban someone! Please contact an Admin if you think this is an issue!")


    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply("Error: Please specify a user to ban")

    const length = args[1]
    if(!length) return message.reply("Error: Please specify a time length!")

    let reason = args.slice(2).join(' ')
    if(!reason) {
      let reason = 'No reason given!'
    }

    const mod = message.author.username;


    try {
      await member.ban({reason: `Banned by ${mod} for ${reason}. Length: ${length}`})
      await message.react("<:check:740572727303208960>")

      const finished = new MessageEmbed()
      .setTitle(":airplane: | Banned!")
      .addField("User:", `${member}`)
      .addField("Moderator:", `${mod}`)
      .addField("Reason:", `${reason}`)
      .addField("Ban Length:", `${length}`)
      .setColor(color)

      await message.channel.send({embeds: [finished]})

      setTimeout(function () {
        member.unban({reason: `Ban time up!`})
      }, ms(length))
    } catch(err){
      console.log(err)
    }
  }
}