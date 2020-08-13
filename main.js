const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', ()=> {
    console.log('EducationistBot is online!')
})

client.on('message', msg  =>{
    if(msg.content === "When is our next meeting?"){
        msg.reply("Our next meeting is currently being decided by the owners. It like be sometime during the end of the month. During this we will take about the current state of Educationist and get more feedback from tutors and content curators. Once again, this meeting isn't mandatory but we strongly suggest you guys to attend and give us suggestions.")
    }
})


client.login('')