require('dotenv').config('./.env');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const config = require('./config.json');
const study = require('./arguments.json');

const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORDTOKEN);

const help = new Discord.MessageEmbed()
.setTitle('Help')
.setDescription('these are the available commands that you can use')
.setColor('#ff5733')
.addField('!physica help', 'returns the available commands', false)
.addField('!physica links', 'returns a list of useful youtube channels', false)
.addField('!physica magazine', `returns links for the club's mazgines`, false)
.addField('!physica me', `returns your user name and avatar`, false)
.setThumbnail('https://i.pinimg.com/originals/c2/8d/d7/c28dd7378e2426b6a5b56fbaf91c7434.jpg')
.setTimestamp()
const userfulLinks = new Discord.MessageEmbed()
.setTitle('Useful Links')
.setDescription('Here are few links that you may find useful')
.setColor('#ff5733')
.addField('3blue1brown', study.tbob.link, false)
.addField('Royal Institue', study.ri.link, false)
.addField(' MIT OpenCourseWare', study.mit.link, false)
.addField(' Numberphile', study.np.link, false)
.addField('Khan Acedmey',study.ka.link, false)
.setThumbnail('https://i.pinimg.com/originals/c2/8d/d7/c28dd7378e2426b6a5b56fbaf91c7434.jpg')
.setTimestamp()


const foo = new Discord.MessageEmbed()
.setColor('#ff5733')
.setDescription('Wsh kho?');


const magazine = new Discord.MessageEmbed()
.setColor('#ff5733')
.addFields(
  {
    name:"First Edition", value: study.phymag.first
  },
  {
    name:'Second Edition', value:study.phymag.second
  }
);


















client.on('message', msg => {
  
  if(msg.author.id ===`${process.env.BELLOU}`){
    msg.react(`😍`);
  }
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;
  
  const args = msg.content.slice(config.prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  
    if (command === 'physica' && msg.channel.id === "791421687522263060") {
      if (!args.length) {
        return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
      }
      else if (args[0] === 'help') {
        return msg.channel.send(help);
      }
      else if(args[0]==='links'){
          return msg.channel.send(userfulLinks);
      }
      else if (args[0] === 'foo') {

        return msg.channel.send(foo);
      }
      else if(args[0] ==='me'){
        const myInfo = new Discord.MessageEmbed()
        .setColor('#ff5733')
        .setAuthor(`${msg.author.username}`)
        .setImage(msg.author.avatarURL());
        return msg.channel.send(myInfo);
        // msg.channel.send(msg.author.avatarURL());
      }
      else if(args[0]==='magazine'){
        msg.channel.send(magazine);
      }
    

      else{msg.channel.send(`Sorry ${msg.author.username}the command *${msg.content}* doesn't exsit`)}
    
    }
    
     
  

      
    
    }
        
  



    
  
);


