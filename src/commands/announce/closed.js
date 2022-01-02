const Discord = require("discord.js")
const simpleCommand = require("../../core/simpleCommand");
const config = require('../../config')

module.exports = new simpleCommand(async(message, args) => {
    const messageToSay = args.join(" ");
        if (!messageToSay){
        const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor)
            .setTitle('`INVALID USAGE`') 
            .setDescription(`> **Usage** ${config.prefix}close (what closed?)`)
            .setFooter('Copyright ©RTBot • 2022')
            .setTimestamp()
             message.delete().catch(err => console.log(err));
             message.channel.send({ embeds: [embed]});
         } else {
         const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor) 
            .setTitle('```CLOSED POSITION! 🔴```') 
            .setDescription(`> ${messageToSay}`) 
            .setFooter('Copyright ©RTBot • 2022')
            .setTimestamp()
            message.delete().catch(err => console.log(err));
            message.channel.send({ embeds: [embed]});
         }
}, {
    name: "closed",
    cooldown: 0,
    aliases: ["closed", "close"],
    description: "Announce closed position",
    perms:["MANAGE_MESSAGES"],
    usage: "{prefix}{cmd} (what closed?)"
})