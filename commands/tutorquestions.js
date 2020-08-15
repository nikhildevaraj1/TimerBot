const Discord = require("discord.js");

module.exports = {
    name: 'tutorquestions',
    description: "This is a ping command",
    execute(message, args){
        const tutorcommandsEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Common Tutor Questions:')
            .setDescription('Here are some common questions and answers that we have gotton from our tutors so far. If you have a question that is not on here, please feel free to ask it on **#questions**')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'How can I become a tutor?', value: 'https://educationisttutoring.org/apply-to-be-a-tutor/'},
                { name: 'How long does it take for me to get a student?', value: 'Usually, it takes 3-7 days. Either way, you should be checking your email everyday.'},
                { name: 'How can I upload content I made?', value: 'Please DM/email one of the owners that **you want to add content you have made, your name, email, and specific subject you want to upload it for.**'},
                { name: 'Can I become a tutor **and** content curator?', value: 'Yes! You can become a tutor and content curator.'},
                { name: 'What platform should I host meetings?', value: 'We recommend Zoom or G Meet, but it depends on the student.'},
                { name: 'How can I track my student\'s progress?', value: 'One platform we highly reccomend is making a Google Classrom for your student to track their progress.'},
                { name: 'What happens if my student misses or shows up late to the class?', value: 'If your student doesn\'t show up or shows up more than 15 minutes late, please fill out this form: https://educationisttutoring.org/student-absence-form/'},
                { name: 'Can I change the timings I signed up for?', value: 'When we give you a student, you will be able to see all their timings and choose one, so there is no need to update timings after you have changed them. If you don\'t see a timing that you are available with the student, you should still reach out with your own timing and see.'},
                { name: 'How many tutors are currently with Educationist?', value: 'Currently we have around 300 tutors and 600+ tutor sign ups.'},
                { name: 'How often do I meet with my student?', value: 'Our "minimum" number is 30 minutes weekly, but it depends on your student and what they need help with.'},
                { name: 'I can\'t find a common timing with my student', value: 'The timings we give you in the confirmation email is just a small number of selections that the students gave us. This means we highly recommend that you guys email your student with your own timings if needed and see if they can adjust. '},
                { name: 'What happens if I need to stop when school starts?', value: 'If you truly believe that you are unable to continue classes when school starts, plese email us. Something important to remember is that this commitment is extremeley minimal (30-60 minutes), so you should try the best to continue classes.'},
                { name: 'My student suddenly stopped replying', value: 'If your student suddenly stop responding, try to keep emailing them. If they still don\'t respond after 1 week, please email us. '},
                { name: 'Where is the resource folder?', value: 'The resource folder that you can use to teach will be in the confirmation email after you get a student.'},
                { name: 'Should we assign our student homework?', value: 'This is entirely up to you. If you feel like your student is struggling, you can give homework to make sure they understand the material.'},
                { name: 'Student No Response', value: 'Please use our **!studentnoreply** command.'},
                { name: 'Tutor Resources', value: 'Please use our **!tutorresources** command to get more information about our tutor resources'},

            )
            .setTimestamp()
            .setFooter('Educationist Tutoring© ', 'https://i2.wp.com/educationisttutoring.org/wp-content/uploads/2020/07/White-educationist-logo-banner.png?strip=info&w=300&ssl=1');
        message.channel.send(tutorcommandsEmbed);

    }

}