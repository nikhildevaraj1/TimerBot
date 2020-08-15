const Discord = require("discord.js");

module.exports = {
    name: 'nextmeeting',
    description: "This is a ping command",
    execute(message, args){
        const nextmeetingEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Next Meeting')
            .setDescription('Here is information on our next meeting')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'When is our next meeting?', value: 'August 22, 6-7 PM CST'},
                { name: 'Where will this meeting be taking place?', value: 'This meeting will be in the "Meetings" voice channel on Discord'},
                { name: 'What will we be talking about in this meeting?', value: 'This meeting is to talk about the current state of Educationist and what our plans  are for the future. In addition, we  will get feedback from you guys and see where we can improve.'},
                { name: 'Who can attend this meeting?', value: 'Both tutors **and** content curators can attend this meeting!'},
            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
        message.channel.send(nextmeetingEmbed);

    }

}