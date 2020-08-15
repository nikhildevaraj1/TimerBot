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
                { name: 'How can I become a content curator?', value: 'https://educationisttutoring.org/faq-page/'},
                { name: 'What is I have a question that is not on the FAQ page?', value:'If you have a question that is not on our FAQ page you can use the **Contact Us** page: https://educationisttutoring.org/contact-us/ or you can ask the question in the #questions chat.'},
            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
        message.channel.send(contentquestionsEmbed);
    }

}