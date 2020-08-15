const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles =  fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();


    if(command === 'help'){
        client.commands.get('help').execute(message, args);

    } else if(command === 'socialmedia'){
        client.commands.get('socialmedia').execute(message, args);

    } else if(command === 'tutorquestions'){
        client.commands.get('tutorquestions').execute(message, args);
       
    } else if(command === 'nextmeeting'){
        client.commands.get('nextmeeting').execute(message, args);

    } else if(command === 'studentnoreply'){
        client.commands.get('studentnoreply').execute(message, args);

    } else if(command === 'contentquestions'){
        client.commands.get('contentquestions').execute(message, args);

    }
})

client.once('ready', ()=> {
    console.log('EducationistBot is online!')
})


client.login('')