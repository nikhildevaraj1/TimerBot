const Discord = require("discord.js");

module.exports = {
    name: 'tutorresources',
    description: "This is a ping command",
    execute(message, args){
        const resourcesEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Tutor Resources')
            .setDescription('Here is information on our tutor resources:')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Where can I find resources?', value: 'You can find some of our tutor resources on our website: https://educationisttutoring.org/tutor-resources/. For content curator resources, you will get the drive link in the confirmation email once you get a student.'},
                { name: 'What resources can I use?', value: 'You can use the resources on our website, drive, or anywhere else! As long as your student in comfortable and enjoys the classes, that is fine with us.'}
            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
        message.channel.send(resourcesEmbed);

    }

}