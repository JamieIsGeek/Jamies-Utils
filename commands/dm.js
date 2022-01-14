const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
  name: 'dm',
  description: 'Lets you dm a member with the bot',
  async execute(message, args, client){
    if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;

    if(!args[0]) return message.reply("Please provide a user to DM")
    let dmMessage = args.slice(1).join(' ')
    if(!dmMessage) return message.reply("Please provide something for me to DM!")

    let target = message.mentions.users.first();

    const dmEmbed = new MessageEmbed()
    .setTitle("You have mail!")
    .setDescription(`${dmMessage}`)
    .setTimestamp()
    .setFooter(`From: ${message.author.tag}`)
    .setColor('BLUE')

    try {
      await target.send({ embeds: [dmEmbed]})
      message.react('✅')
    } catch(err){
      console.log(err)
      message.reply(`An error has occured: ${err}`)
    }
  }
}