
const Discord = require('discord.js');

const sorry = (name, content) => {
    return new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setAuthor(`Sorry ${name} The command *${content}* doesn't exist \n use *!physica help* to see the available commands`)
        .setThumbnail();
};

module.exports = sorry;