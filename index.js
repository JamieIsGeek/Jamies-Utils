const Discord = require("discord.js");
const { Client, Intents } = require('discord.js');
const { Permissions } = require('discord.js')
const { WebhookClient } = require('discord.js')

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS)
const client = new Discord.Client({ intents: myIntents });

const { MessageEmbed } = require("discord.js")

const prefix = process.env.prefix

var http = require('http');

const fs = require('fs');
const ms = require('ms');
const color = 0x027e84

http.createServer(function(req, res) {
  res.write("I'm better than you :D");
  res.end();
}).listen(8000);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command)
}

client.once('ready', () => {
  console.log("##################################")
  console.log(`${client.user.tag} is ONLINE!`)
  console.log("Owner: JamieIsGeek#5647")
  console.log("##################################")

  client.user.setActivity(`with Discord.js`, { type: 'PLAYING'})
})

client.on('disconnect', function(event) {
  console.log('The bot has disconnected')
})


client.on('messageCreate', message => {

  if(message.author.bot) return;

  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    client.commands.get('ping').execute(message, args, client, color);
  } else if (command == 'restart'){
      if(message.author.id != '338063500616138752') return message.reply("No")

      message.channel.send("Restarting...")
      console.log(`Restart requested by: ${message.author.tag}`)
      client.destroy()
      client.login(token)

      message.channel.send("Successfully Restarted!")
  } else if (command == 'dm'){
    client.commands.get('dm').execute(message, args, client)
  } else if (command == 'eval'){
    client.commands.get('eval').execute(message, args, client, color)
  } else if (command == 'nick'){
    client.commands.get('nick').execute(message, args)
  } else if (command == 'spam'){
    client.commands.get('spam').execute(message, args)
  } else if (command == 'sensitive'){
    client.commands.get('sensitive').execute(message, args)
  } else if (command == 'role'){
    client.commands.get('role').execute(message, args, client, color)
  } else if (command == 'slowmode'){
    client.commands.get('slowmode').execute(message, args, color)
  } else if (command == 'kick'){
    client.commands.get('kick').execute(message, args, client, color)
  } else if (command == 'tempban'){
    client.commands.get('tban').execute(message, args, client, color)
  } else if (command == 'mute'){
    client.commands.get('mute').execute(message, args, client, color)
  } else if (command == 'unmute'){
    client.commands.get('unmute').execute(message, args, client, color)
  }
});

client.login(process.env.token)