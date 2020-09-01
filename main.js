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

minutecommands = {

}

hourcommands = {

}

secondrepeatcommands = {

}


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

//SECOND TIMER START
if (command === 'stimer') {
	if (!args.length) {
		return message.channel.send(`You didn't provide a time, ${message.author}!`);
    }
    

    mstime = args;
    mstimeframe = parseInt(mstime)
    if(Number.isInteger(mstimeframe)){
    stimeframe = mstimeframe * 1000;
    stopcode = (Math.floor(Math.random() * 100000000))
    message.channel.send(`Timer: ${args} seconds; Check your messages for the code to stop this timer.`);
    messageauthor = message.author.id
    client.users.cache.get(messageauthor).send(`The code to stop your ${args} second timer is ${stopcode}`);
    secondcommands[parseInt(stopcode)] = parseInt(stopcode);
    secondcommands[stopcode] = setTimeout(function(){
        
        message.channel.send(`The timer is over!, ${message.author}!`, {
            tts: true
            
           })
     }, stimeframe); //time in milliseconds  
    } else {
        message.channel.send("Please send an integer (i.e 15)");

    }
    
     
}

//SECOND TIMER STOP
if(command === 'stimerstop') {
    if (!args.length) {
		return message.channel.send(`You didn't provide a code, ${message.author}!`);
    }
    stoppingcode = args
    if(stoppingcode in secondcommands){
    message.channel.send('The timer has been canceled')
    clearTimeout(secondcommands[stoppingcode])
    delete secondcommands[stoppingcode];
    } else {
        message.channel.send('I dont see that code, please try again.')
    }
}

//MINUTE TIMER START
if (command === 'mtimer') {
	if (!args.length) {
		return message.channel.send(`You didn't provide a time, ${message.author}!`);
    }
    

    mstime = args;
    mstimeframe = parseInt(mstime)
    if(Number.isInteger(mstimeframe)){
    mtimeframe = mstimeframe * 60000;
    stopcode = (Math.floor(Math.random() * 100000000))
    message.channel.send(`Timer: ${args} minutes; Check your messages for the code to stop this timer.`);
    messageauthor = message.author.id
    client.users.cache.get(messageauthor).send(`The code to stop your ${args} minute timer is ${stopcode}`);
    minutecommands[parseInt(stopcode)] = parseInt(stopcode);
    minutecommands[stopcode] = setTimeout(function(){
        
        message.channel.send(`The timer is over!, ${message.author}!`, {
            tts: true
            
           })
     }, mtimeframe); //time in milliseconds  
    } else {
        message.channel.send("Please send an integer (i.e 15)");

    }
    
     
}

//MINUTE TIMER STOP
if(command === 'mtimerstop') {
    if (!args.length) {
		return message.channel.send(`You didn't provide a code, ${message.author}!`);
    }
    stoppingcode = args;
    if(stoppingcode in minutecommands){
    message.channel.send('The timer has been canceled')
    clearTimeout(minutecommands[stoppingcode])
    delete minutecommands[stoppingcode];
    } else {
        message.channel.send('I dont see that code, please try again.')
    }
}

//HOUR TIMER START
if (command === 'htimer') {
	if (!args.length) {
		return message.channel.send(`You didn't provide a time, ${message.author}!`);
    }
    

    mstime = args;
    mstimeframe = parseInt(mstime)
    if(Number.isInteger(mstimeframe)){
    htimeframe = mstimeframe * 3600000;
    stopcode = (Math.floor(Math.random() * 100000000))
    message.channel.send(`Timer: ${args} hours; Check your messages for the code to stop this timer.`);
    messageauthor = message.author.id
    client.users.cache.get(messageauthor).send(`The code to stop your ${args} minute timer is ${stopcode}`);
    hourcommands[parseInt(stopcode)] = parseInt(stopcode);
    hourcommands[stopcode] = setTimeout(function(){
        
        message.channel.send(`The timer is over!, ${message.author}!`, {
            tts: true
            
           })
     }, htimeframe); //time in milliseconds  
    } else {
        message.channel.send("Please send an integer (i.e 15)");

    }
    
     
}
//STOP HOUR TIMERS
if(command === 'htimerstop') {
    if (!args.length) {
		return message.channel.send(`You didn't provide a code, ${message.author}!`);
    }
    stoppingcode = args;
    if(stoppingcode in hourcommands){
    message.channel.send('The timer has been canceled')
    clearTimeout(hourcommands[stoppingcode])
    delete hourcommands[stoppingcode];
    } else {
        message.channel.send('I dont see that code, please try again.')
    }
}

//REPEAT SECOND TIMERS
if (command === 'stimerrepeat') {
	if (!args.length) {
		return message.channel.send(`You didn't provide a time, ${message.author}!`);
    }
    

    mstime = args;
    mstimeframe = parseInt(mstime)
    if(Number.isInteger(mstimeframe)){
    stimeframe = mstimeframe * 1000;
    stopcode = (Math.floor(Math.random() * 100000000))
    message.channel.send(`Timer: ${args} seconds; Check your messages for the code to stop this timer.`);
    messageauthor = message.author.id
    client.users.cache.get(messageauthor).send(`The code to stop your ${args} second **repeated** timer is ${stopcode}`);
    secondrepeatcommands[parseInt(stopcode)] = parseInt(stopcode);
    secondrepeatcommands[stopcode] = setInterval(function(){
        
        message.channel.send(`The timer is over!, ${message.author}!`, {
            tts: true
            
           })
     }, stimeframe); //time in milliseconds  
    } else {
        message.channel.send("Please send an integer (i.e 15)");

    }
    
     
}

//STOP REPEAT SECOND TIMERS
if(command === 'stimerrepeatstop') {
    if (!args.length) {
		return message.channel.send(`You didn't provide a code, ${message.author}!`);
    }
    stoppingcode = args
    if(stoppingcode in secondrepeatcommands){
    clearTimeout(secondrepeatcommands[stoppingcode])
    message.channel.send('The timer has been canceled')
    } else {
        message.channel.send('I dont see that code, please try again.')
    }
}

/*
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
*/
/*
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
*/
}) 

client.once('ready', ()=> {
    console.log('TimerBot is online!')
})


client.login('NzQ2NTAxNTEzMDY4Njc1MjMz.X0BPtg.GTPRP7B9XsnYEOHQgKVTEPTkALY')

