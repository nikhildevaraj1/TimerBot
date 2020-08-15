const Discord = require("discord.js");

module.exports = {
    name: 'studentnoreply',
    description: "This is a ping command",
    execute(message, args){
        const studentnoreplyEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some steps to get a new student')
            .setDescription('Here is information on our next meeting')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'How long until I can get matched with a new student?', value: 'If your student doesn\'t respond within 1 week from the time that you email them, you can get a new student.'},
                { name: 'How can I get a new student?', value:'Please email us with the title, "Student No Reply" and email us your student\'s name, email, and age. After this, we will give you more information on how you can get on our waiting list again.'},
                { name: 'What if my student responds after the 1 week?', value: 'If your student replys to your email after 1 week, please let them know they have been released and you can point to our **system rules**: https://educationisttutoring.org/system-rules/'},
            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
        message.channel.send(studentnoreplyEmbed);

    }

}