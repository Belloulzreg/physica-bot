const Discord = require('discord.js');

const help = new Discord.MessageEmbed()
.setTitle('Help')
.setDescription('these are the available commands that you can use')
.setColor('#FF0000')
.addField('!physica help', 'returns the available commands', false)
.addField('!physica links', 'returns a list of useful youtube channels', false)
.addField('!physica magazine', `returns links for the club's mazgines`, false)
.addField('!physica me', `returns your user name and avatar`, false)
.addField('!physica picture', 'returns the Astronomy Picture of the Day')
.addField('!physica nobel [year]', 'returns the laureates of Physics Nobel Prize of the given year')
.setThumbnail('https://i.pinimg.com/originals/c2/8d/d7/c28dd7378e2426b6a5b56fbaf91c7434.jpg')
.setTimestamp();

module.exports = help; 