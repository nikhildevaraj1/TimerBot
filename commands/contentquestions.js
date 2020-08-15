const Discord = require("discord.js");

module.exports = {
    name: 'contentquestions',
    description: "This is a ping command",
    execute(message, args){
        const contentquestionsEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Common Content Curator Questions: ')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'How can I become a content curator?', value: 'https://educationisttutoring.org/content-curator-application/'},
                { name: 'What content should I create?', value: 'The content you make completely depends on what the tutors needs and what you want to make! Once again, you can work at your own pace and create content that tutors ask for or something that you think will be useful.'},
                { name: 'How do I upload content?', value: 'If you are accepted as a tutor and you fill out the post-acceptance form, it will take 12-36 hours for editing permissions for the drive to be shared to you. If it has been more than 36 hours, please DM Grace (Head of Content Curation) and she will be able to help you. '},
                { name: 'Why am I not added to the drive yet?', value: 'You might not be added to the drive because you didn\'t fill out the Post acceptance form on our acceptance email. If you already did, please wait 12-36 hours to be added.'},

                            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
        message.channel.send(contentquestionsEmbed);
    }

}