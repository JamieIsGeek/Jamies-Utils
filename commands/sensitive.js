const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
  name: 'sensitive',
  description: 'Sends an embed telling people to drop the topic',
  async execute(message, args){
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return;


    const sens = new MessageEmbed()
    .setTitle("Please drop the topic of converstation")
    .setDescription("Hello! Please drop this topic as it violates our <#930209966315425824> and may be sensitive to some people.\n\nThank you :)")
    .setColor(0x33a7a9)


    try {
      message.channel.send({ embeds: [sens]})
    } catch(err){
      message.reply(err)
    }
  }
}