const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: "This is a ping command",
    execute(message, args){
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Help commands!')
            .setAuthor('Educationist Tutoring', 'https://i1.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/cropped-educationistlogo-1.png?fit=105%2C120&ssl=1', 'https://educationisttutoring.org/')
            .setDescription('Here are some of our bot commands that you can use!')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Our Social Medias:', value: '!socialmedia'},
                { name: 'Tutor Help Commands:', value: '!tutorquestions'},
                { name: 'Next meeting:', value: '!nextmeeting'},
                { name: 'Resources:', value: '!tutorresources'},
                { name: 'FAQ (Please use this before you ask us a question):', value: '!faq'},
                { name: 'Information if your student doesn\'t reply:', value: '!studentnoreply'},
                { name: 'Content Curator Commands', value: '!contentquestions'},
                { name: 'Information if your student doesn\'t reply', value: '!studentnoreply'},
            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
    
        message.channel.send(helpEmbed);
            }
}