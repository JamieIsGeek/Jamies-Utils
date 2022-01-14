const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
  name: 'spam',
  description: 'Sends an embed telling people to stop spamming',
  async execute(message, args){
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return;


    const spam = new MessageEmbed()
    .setTitle("Friendly Reminder:")
    .setDescription("Hello! I would like to remind you that spamming is against our <#930209966315425824>.\n\nThis includes, but is not limited to: lyric chains, excessive usage of emotes, large walls of text and copypastas. These clog up chats and make other conversations difficult and unpleasant. Failure to adhere to this rule will result in a punishment!\n\nThanks for understanding <3")
    .setColor(0x33a7a9)


    try {
      message.channel.send({ embeds: [spam]})
    } catch(err){
      message.reply(err)
    }
  }
}