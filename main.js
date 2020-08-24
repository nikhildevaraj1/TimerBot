const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');
const { timeLog } = require('console');

client.commands = new Discord.Collection();

const commandFiles =  fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

secondcommands = {

}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

if (command === 'stimer') {
	if (!args.length) {
		return message.channel.send(`You didn't provide an attribute, ${message.author}!`);
    }
    

    mstimeframe = `${args}`;
    stimeframe = mstimeframe * 1000;
    stopcode = (Math.floor(Math.random() * 1000000))
    message.channel.send(`Timer: ${args} seconds; Your code to stop this timer is ${stopcode}`);
    secondcommands[parseInt(stopcode)] = parseInt(stopcode);
    secondcommands[stopcode] = setTimeout(function(){
        
        message.channel.send(`The timer is over!, ${message.author}!`, {
            tts: true
            
           })
     }, stimeframe); //time in milliseconds  
     
}


if(command === 'stimerstopcode') {
    if (!args.length) {
		return message.channel.send(`You didn't provide an attribute, ${message.author}!`);
    }
    message.channel.send(args);
    stoppingcode = args
    message.channel.send('The timer has been canceled')
    clearTimeout(secondcommands[stoppingcode])
}




if (command === 'mtimer') {
	if (!args.length) {
		return message.channel.send(`You didn't provide a time, ${message.author}!`);
    }

    mstimeframe = `${args}`;
    mtimeframe = mstimeframe * 60000
    content = "minutes"
    if(mstimeframe == 1){
        content = "minute"
    }
    message.channel.send(`Timer: ${args} ${content}`);
    
    mtimertimeout = setTimeout(function(){ 
        message.channel.send(`The timer is over!, ${message.author}!`, {
            tts: true
           })
     }, mtimeframe); //time in milliseconds
}
if(command === 'mtimerstop') {
    message.channel.send('The timer has been canceled')
    clearTimeout(mtimertimeout)
}

if (command === 'htimer') {
	if (!args.length) {
		return message.channel.send(`You didn't provide a time, ${message.author}!`);
    }

    mstimeframe = `${args}`;
    mtimeframe = mstimeframe * 3600000
    content = "hours"
    if(mstimeframe == 1){
        content = "hour"
    }
    message.channel.send(`Timer: ${args} ${content}`);
    
    htimertimeout = setTimeout(function(){ 
        message.channel.send(`The timer is over!, ${message.author}!`, {
            tts: true
           })
     }, mtimeframe); //time in milliseconds
}

if(command === 'htimerstop') {
    message.channel.send('The timer has been canceled')
    clearTimeout(htimertimeout)
}

}) 

client.once('ready', ()=> {
    console.log('TimerBot is online!')
})


client.login('NzQ2NTAxNTEzMDY4Njc1MjMz.X0BPtg.ReFUowTDSlcTyp7JswnId4sOuDs')


