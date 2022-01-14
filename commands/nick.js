const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
  name: 'nick',
  description: 'Sends an embed telling people to change their nicknames',
  async execute(message, args){
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return;


    const nick = new MessageEmbed()
    .setTitle("Please change your nickname!")
    .setDescription("Please make sure your name is pingable!\n\nPlease make sure to use normal, standard A-Z, 0-9 characters and normal symbols. This includes the use of fonts which are unpingable, and cannot be read by screen readers :) Alongside this, please make sure your discord tag/nickname is not impersonating a content creator or bot as this is also against our rules :)\n\nThank you for understanding <3")
    .setColor(0x33a7a9)


    try {
      message.channel.send({ embeds: [nick]})
    } catch(err){
      message.reply(err)
    }
  }
}