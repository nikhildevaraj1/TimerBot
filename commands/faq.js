const Discord = require("discord.js");

module.exports = {
    name: 'faq',
    description: "This is a ping command",
    execute(message, args){
        const faqEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('FAQ: ')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Where is our FAQ?', value: 'https://educationisttutoring.org/faq-page/'},
                { name: 'What if I have a questions that is not on the FAQ Page? ', value: 'If you have a question that is not on our FAQ page, you can use the Contact Us page or type the question in the #questions channel.'},

                            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
        message.channel.send(faqEmbed);
    }

}