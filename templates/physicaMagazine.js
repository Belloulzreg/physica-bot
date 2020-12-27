const Discord = require('discord.js');
const study = require('../arguments.json');

const magazine = new Discord.MessageEmbed()
.setColor('#FF0000')
.addFields(
  {
    name:"First Edition", value: study.phymag.first
  },
  {
    name:'Second Edition', value:study.phymag.second
  }
)
.setTimestamp();
module.exports = magazine;