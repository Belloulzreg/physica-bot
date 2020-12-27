require('dotenv').config('./.env');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const config = require('./config.json');
const help = require('./templates/physicaHelp');
const magazine = require('./templates/physicaMagazine');
const userfulLinks = require('./templates/physicaLinks');
const foo = require('./templates/physicaFoo');
const Physica = require('./templates/physica');
const sorry = require('./templates/physicaSorry');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORDTOKEN);

client.on('message', msg => {

  if (msg.author.id === `${process.env.BELLOU}`) {
    msg.react(`😍`);
  }
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  const args = msg.content.slice(config.prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'physica' /*&& msg.channel.id === "791421687522263060"*/) {
    if (!args.length) {
      return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
    }
    else if (args[0] === 'help') {
      return msg.channel.send(help);
    }
    else if (args[0] === 'links') {
      return msg.channel.send(userfulLinks);
    }
    else if (args[0] === 'foo') {

      return msg.channel.send(foo);
    }
    else if (args[0] === 'me') {
      const myInfo = new Physica(msg.author.username, msg.author.avatarURL())
      return msg.channel.send(myInfo.myInfo());
    }
    else if (args[0] === 'magazine') {
      msg.channel.send(magazine);
    }
    else if (args[0] == 'picture') {
      let nsaUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASATOKEN}`
      async function getData() {
        return await fetch(nsaUrl).then(res => res.json().then(data => {
          msg.channel.send(
            new Discord.MessageEmbed()
              .setTitle(data.title)
              .setDescription(data.explanation)
              .setImage(data.url)
              .setColor('#FF0000')

          );
        }));
      }
      return getData();
    }
    else if (args[0] === `nobel` && typeof (args[1] === 'number')) {
      const year = args[1];
      const today = new Date();
      const notAwarded = ['1916', '1931', '1934', '1940', '1941', '1942'];
      if(notAwarded.includes(year)){
        return msg.channel.send(
          new Discord.MessageEmbed().setColor('#FF0000')
            .setAuthor(`There have been six years for which the Nobel Prize in Physics was not awarded (1916, 1931, 1934, 1940–1942).`)
        )
      }
       else if (year == '') {
        return msg.channel.send(
          new Discord.MessageEmbed().setColor('#FF0000')
            .setAuthor(`Please add a year to the command`)
        )

      }
      else if (year < 1901) {
        return msg.channel.send(
          new Discord.MessageEmbed().setColor('#FF0000')
            .setAuthor(`${year} is not a valid, year try another year`)
        )

      }
      else if (year > today.getFullYear().toString()) {
        return msg.channel.send(
          new Discord.MessageEmbed().setColor('#FF0000')
            .setAuthor(`How is the future?`)
        );
      }
    
      else {
        async function nobel(year) {
          return await fetch(`http://api.nobelprize.org/2.0/nobelPrize/phy/${year}`)
            .then(res => res.json().then(data => {
              const names = [];
              let name;
              const nobelPrize = new Discord.MessageEmbed();
              name = data[0].laureates;
              name.map(item => {
                nobelPrize.addField(`${item.knownName.en}`, `${item.motivation.en}`)
              })
              nobelPrize.setColor('#FF0000')
                .setTitle(`${data[0].categoryFullName.en} Laureates, ${year}`)
                .setTimestamp();

              return msg.channel.send(nobelPrize);




            }));


        }; return nobel(year)
      }
  }
    else {
      return msg.channel.send(sorry(msg.author.username, msg.content));
    }
  }




}














);


