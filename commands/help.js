const Discord = require("discord.js");

module.exports = {
    name: 'faq',
    description: "This is a ping command",
    execute(message, args){
        cmessage.channel.send("Use this: !pomodoro value to start the bot, for example, !pomodoro 30. All timers must be in intervals of 5")
    }

}