const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();


    if(command === 'help'){
        message.channel.send('text');
    }
    if(command === 'help1'){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Help commands!')
            .setURL('https://educationisttutoring.org/')
            .setAuthor('Educationist Tutoring', 'https://i1.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/cropped-educationistlogo-1.png?fit=105%2C120&ssl=1', 'https://educationisttutoring.org/')
            .setDescription('Here are some of our bot commands that you can use!')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
    
    

        message.channel.send(exampleEmbed);
    }

})

client.once('ready', ()=> {
    console.log('EducationistBot is online!')
})

client.on('message', msg  =>{
    if(msg.content === "When is our next meeting?"){
        msg.reply("Our next meeting is currently being decided by the owners. It like be sometime during the end of the month. During this we will take about the current state of Educationist and get more feedback from tutors and content curators. Once again, this meeting isn't mandatory but we strongly suggest you guys to attend and give us suggestions.")
    }
})


client.login('')