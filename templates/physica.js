const Discord = require('discord.js');

const fetch = require('node-fetch');

class Physica {
    constructor(name, picture) {
        this.name = name;
        this.picture = picture;
    }
    myInfo() {
        return new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setAuthor(`${this.name}`)
            .setImage(this.picture)
            .setTimestamp();
    }


}
module.exports = Physica;