const fs = require('fs');
const Discord = require('discord.js');
const Gerald = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;
const responses = require('./responses.json');
const tanks = responses.responses.tanks;
const tankList = [tanks.M4,tanks['Panzer 4'],tanks['Tiger 1'],tanks.Panther,tanks.M18,tanks.M36,tanks['T-34'],tanks['KV-1'],tanks.M4A3E2];
const List = tanks.list;
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
    if(message.content==(`${prefix}insult me`)){
        let temp = Math.round((Math.random()*5)-1);
        if(temp <0){temp=0};
        message.channel.send(`Hey ${message.author}`);
        fs.appendFileSync('./usage_logs/usageLogs.txt',`${message.author.tag} called the insult function\n------------------------------------------------------------------------\n`);
        setTimeout(()=>{message.channel.send(`${responses.responses.insults[temp]}`);},1000);
    };//used for testing if different commands work
    if(message.content ==(`${prefix}tank info`)){//a command for displaying tank info
        let temp = 0;
        let finalmessage="";
        message.channel.send("SHHHHH, Cade might hear you and no one wants to talk to him");
        message.channel.send(`Which one do you want to talk about?\n`);
        List.forEach(element => {
            finalmessage=finalmessage.concat(`\n[${temp}]:${element}`);
            temp++;
        });
        message.channel.send(`=========================================${finalmessage}\n=========================================\n please replay with only <tank (number)`);
        // setTimeout(()=>{
        //     try{
        //     if(message.content!=finalmessage){
        //         let tank = `${tankList[parseInt(message.content)]}`;
        //         message.channel.send(tank.Nickname);
        //     }}catch(err){console.log(err)};
        // },5000);
    }
    if(message.content.startsWith(`${prefix}tank `)){
        let selected = tankList[message.content.slice(6)];
        message.channel.send(`${selected.name}\nNickname(s):${selected.Nickname}\nArmament within the mantlet:${selected.Armament.turret.mantlet}\nArmor(front/side):${selected.Armor['Upper Front plate']}/${selected.Armor['hull side']}\n Top speed:${selected['Top Speed']}`)
    }
});
/*
===================================================================================================================
Notebook===========================================================================================================
Basic command structure ===>    if(message.content==(`${prefix}`)){};

----Create an array of insults
====================================================================================================================*/