//constants
const fs = require('fs');
const Discord = require('discord.js');
const Gerald = new Discord.Client();
const {prefix , token} = require('./config.json');
Gerald.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file=>file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  Gerald.commands.set(command.name, command)
}
//variables
var timeUp=0;//how long the server has been running in terms of 15 minutes
var timeUpHours= timeUp/4; //how long the server has been up interms of hours
//the bot himself, Gerald
Gerald.login(token);
//when Gerald is started
Gerald.on('ready',()=>{console.log('Ready');});
//Gerald looking for messages
Gerald.on('message', message=>{
  if(message.content==(`${prefix}test`)){message.channel.send('Test')};
  if(message.content==(`${prefix}test2`)){message.channel.send('Tomatoes')};
  //   message.channel.send(`This server's name is: ${message.guild.name}\nTotal members:  ${message.guild.memberCount}`);
  // else if(message.content.startsWith(`${prefix}server`)){
  // }
  // const args = message.content.slice(prefix.length).trim().split(/ +/);
  // const command = args.shift().toLowerCase();
  //   if(!Gerald.commands.has(command)) return;
  //   try{
  //     Gerald.commands.get(command).execute(message, args);
  //   }
  //   catch(error){
  //     console.error(error);
  //     message.reply('ther was an error during execution');
  //   }
});
//functions

//function calls
/*
setInterval(function(){
  console.log('Poggers');
  timeUp++;
  console.log(timeUp);
  timeUpHours= timeUp/4
  if(timeUpHours>=48){
    const OwnerChannel = Gerald.channels.get(342109572099473408);
    OwnerChannel.send(['The server has been up for '+timeUpHours+" hours"],['string']);
  }
},10);
console.log(Gerald.channels);*/
