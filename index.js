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
        return msg.channel.send(`This is the list of available commands:\n 
        *!physica help* : returns the available commands.\n
        *!physica youtube* : returns a list of useful youtube channels.\n
        *!physica magazine* : returns links for the club's mazgines`);
      }
      else if(args[0]==='youtube'){
          return msg.channel.send(
            `Here are some useful Youtube channels\n${study.tbob.link}\n${study.ri.link}\n${study.mit.link}\n${study.ka.link}\n${study.np.link}        
            `
          )
      }
      else if (args[0] === 'foo') {
        return msg.channel.send('hello broa');
      }
      else if(args[0] ==='my-avatar'){
        msg.channel.send(msg.author.avatarURL());
      }
      else if(args[0]==='magazine'){
        msg.channel.send(`Here are the links for Physica Magazines: \nFirst edition: ${study.phymag.first}\nSecond edition: ${study.phymag.second}`);
      }
      else{msg.channel.send(`Sorry ${msg.author.username}the command *${msg.content}* doesn't exsit`)}
    
    }
    
     
  

      
    
    }
        
  



    
  
);


