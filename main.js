const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();


    if(command === 'help'){
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
            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
    
        message.channel.send(helpEmbed);

    } else if(command === 'socialmedia'){
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
    } else if(command === 'tutorquestions'){
        const tutorcommandsEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Common Tutor Questions:')
            .setDescription('Here are some common questions and answers that we have gotton from our tutors so far. If you have a question that is not on here, please feel free to ask it on **#questions**')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Student No Response', value: 'If your student does not respond within 1 week, please email us with how long it has been since you have emailed your student, your student name, and student age. After this, we will give you guys more information of how to get back on our waiting list.'},
                { name: 'Tutor Resources', value: 'Please use our **!resources** command to get more information about our tutor resources'},
                { name: 'How to get content curated?', value: 'If you are a current tutor, you can DM/email one of the content curators that introduced themselves in the **#curator-introduction-and-information** channel. Before this we would always reccomend checking our drive and seeing if that topic is already made to minimize repeats. '},
                { name: 'How can I upload content I made?', value: 'Please DM/email one of the owners that **you want to add content you have made, your name, email, and specific subject you want to upload it for.**'},
                { name: 'Twitter', value: 'https://twitter.com/EducationistTu1'},
                { name: 'Tiktok: Our viral video (135k+ views, 22k+ likes)', value: 'https://www.tiktok.com/@educationisttutoring/video/6853538595874032902?lang=en'},
                { name: 'Extra Information', value: 'Another important thing to remember is that if have any suggestions or have ideas for our social media, please let Jysotna know (@j.a.05#7869). She is our social media director and will be able to talk to you guys about your ideas and future posts. '},
            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
        message.channel.send(tutorcommandsEmbed);
    }

})

client.once('ready', ()=> {
    console.log('EducationistBot is online!')
})


client.login('insert token')