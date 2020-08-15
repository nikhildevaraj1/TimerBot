const Discord = require("discord.js");

module.exports = {
    name: 'socialmedia',
    description: "This is a ping command",
    execute(message, args){
        const socialEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Social Media:')
            .setURL('https://linktr.ee/Educationist')
            .setDescription('Here are our social media platforms!')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Instagram', value: 'https://www.instagram.com/educationisttutoring/'},
                { name: 'Facebook', value: 'https://www.facebook.com/educationist.tutoring.7'},
                { name: 'Tiktok', value: 'https://www.tiktok.com/@educationisttutoring?lang=en'},
                { name: 'LinkedIn', value: 'https://www.linkedin.com/company/educationist-tutoring/'},
                { name: 'Twitter', value: 'https://twitter.com/EducationistTu1'},
                { name: 'Tiktok: Our viral video **(135k+ views, 22k+ likes)**', value: 'https://www.tiktok.com/@educationisttutoring/video/6853538595874032902?lang=en'},
                { name: 'Extra Information', value: 'Another important thing to remember is that if have any suggestions or have ideas for our social media, please let Jysotna know (@j.a.05#7869). She is our social media director and will be able to talk to you guys about your ideas and future posts. '},
            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
        message.channel.send(socialEmbed);
            }

}