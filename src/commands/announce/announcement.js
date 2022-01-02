const Discord = require("discord.js")
const simpleCommand = require("../../core/simpleCommand");
const config = require('../../config')

module.exports = new simpleCommand(async(message, args) => {
    const messageToSay = args.join(" ");
        if (!messageToSay){
        const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor)
            .setTitle('`INVALID USAGE`') 
            .setDescription(`> **Usage** ${config.prefix}announcement (announcement)`)
            .setFooter('Copyright ©RTBot • 2022')
            .setTimestamp()
             message.delete().catch(err => console.log(err));
             message.channel.send({ embeds: [embed]});
         } else {
         const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor) 
            .setTitle('```PUBLIC ANNOUNCEMENT❗```') 
            .setDescription(`> ${messageToSay}`) 
            .setFooter('Copyright ©RTBot • 2022')
            .setTimestamp()
            message.delete().catch(err => console.log(err));
            message.channel.send({ embeds: [embed]});
         }
}, {
    name: "announcement",
    cooldown: 1.8e+6,
    aliases: ["announcement", "announce"],
    description: "Announce stuff",
    perms:["MANAGE_MESSAGES"],
    usage: "{prefix}{cmd} (announcement)"
})