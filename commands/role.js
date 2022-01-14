const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
  name: "role",
  description: "This is a selfrole command",
  async execute(message, args, client, color) {
    
    if(args[0] === 'remove') {
      var role = args[1]
    } else if(args[0] != 'remove') {
      var role = args[0]
    }
    const user = message.author
    
    const list = new MessageEmbed()
    .setTitle("Selfroles")
    .setDescription("**Here is a list of all self roles:** \nshe/her\nhe/him\nthey/them\nask\nany\nupdates\nannouncements\n\nTo add a role to yourself, do `^role <role>`\n\nIf you wish to remove a self role, type `^role remove <role>`.\n\n*Please note: Only the server owner can create/delete self roles*")
    .setColor(color)

    if(!role) return message.channel.send({embeds: [list]})

    /*
    Define all the roles that can be applied
    */
    const she = message.guild.roles.cache.get('930208706308734996')
    const he = message.guild.roles.cache.get('930208600767492218')
    const they = message.guild.roles.cache.get('930208746930577408')
    const any = message.guild.roles.cache.get('930208808314220616')
    const ask = message.guild.roles.cache.get('930208779176398909')
    const updates = message.guild.roles.cache.get('930208929672204308')
    const announcements = message.guild.roles.cache.get('930208883383869470')
    /*
    All roles defined - Main Code!
    */


    if(args[0] === 'she/her'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `She/Her` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(she)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'he/him'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `He/Him` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(he)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'they/them'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `They/Them` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(they)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'any'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `Any pronouns` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(any)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'ask'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `Ask for pronouns` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(ask)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'updates'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `Server Updates Ping` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(updates)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }

    if(args[0] === 'announcements'){

      const success = new MessageEmbed()
      .setDescription("Applied the role `Announcements Ping` to " + user.username + " successfully!")
      .setColor(color)

      try {
        await message.member.roles.add(announcements)
        await message.channel.send({ embeds: [success]})
      } catch(error) {
        console.error(error)
      }
    }


    /*
    This part of the code removes the role from the person
    */

    if(args[0] === 'remove') {
      if(role === 'she/her'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `She/Her` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(she)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'he/him'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `He/Him` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(he)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'they/them'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `They/Them` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(they)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'any'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `Any pronouns` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(any)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'ask'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `Ask for pronouns` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(ask)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'updates'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `Server Updates Ping` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(updates)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }

      if(role === 'announcements'){

        const success = new MessageEmbed()
        .setDescription("Removed the role `Announcements Ping` from " + user.username + " successfully")
        .setColor(color)

        try {
          await message.member.roles.remove(announcements)
          await message.channel.send({embeds: [success]})
        } catch(error) {
          console.error(error)
        }
      }
    }
  }
}