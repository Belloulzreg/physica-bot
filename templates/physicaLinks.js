const study = require('../arguments.json');

const Discord = require('discord.js');

const userfulLinks = new Discord.MessageEmbed()
.setTitle('Useful Links')
.setDescription('Here are few links that you may find useful')
.setColor('#FF0000')
.addField('3blue1brown', study.tbob.link, false)
.addField('Royal Institue', study.ri.link, false)
.addField(' MIT OpenCourseWare', study.mit.link, false)
.addField(' Numberphile', study.np.link, false)
.addField('Khan Acedmey',study.ka.link, false)
.setThumbnail('https://i.pinimg.com/originals/c2/8d/d7/c28dd7378e2426b6a5b56fbaf91c7434.jpg')
.setTimestamp()

module.exports = userfulLinks;