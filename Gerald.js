const fs = require('fs');
const Discord = require('discord.js');
const Gerald = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;
Gerald.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file=>file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    Gerald.commands.set(command.name, command);
}
//----------------------------------------------------------------------------------------------------------------
//Variables for time
//----------------------------------------------------------------------------------------------------------------
//The bot himself
Gerald.login(token);
Gerald.on('ready',()=>{console.log(`Ready`);});//Displays ready when started
//----------------------------------------------------------------------------------------------------------------
//Gerald Looking for messages
Gerald.on('message', message=>{
    if(message.content==(`${prefix}test`)){
        message.channel.send(`test`);
        fs.appendFileSync('./usage_logs/usageLogs.txt',`${message.author.tag} called the test function\n------------------------------------------------------------------------\n`);
    };//used for testing
    if(message.content==(`${prefix}`)){};//used for testing if different commands work
});

/*
===================================================================================================================
Notebook===========================================================================================================


Basic command structure ===>    if(message.content==(`${prefix}`)){};















====================================================================================================================*/