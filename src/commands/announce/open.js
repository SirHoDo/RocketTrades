const Discord = require("discord.js")
const simpleCommand = require("../../core/simpleCommand");
const config = require('../../config')

module.exports = new simpleCommand(async(message, args) => {
    const messageToSay = args.join(" ");
        if (!messageToSay){
        const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor)
            .setTitle('`INVALID USAGE`') 
            .setDescription(`> **Usage** ${config.prefix}open (what opened?)`)
            .setFooter('Copyright ©RTBot • 2022')
            .setTimestamp()
             message.delete().catch(err => console.log(err));
             message.channel.send({ embeds: [embed]});
         } else {
         const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor) 
            .setTitle('```OPEN POSITION! 🟢```') 
            .setDescription(`> ${messageToSay}`) 
            .setFooter('Copyright ©RTBot • 2022')
            .setTimestamp()
            message.delete().catch(err => console.log(err));
            message.channel.send({ embeds: [embed]});
         }
}, {
    name: "open",
    cooldown: 0,
    aliases: ["opened", "open"],
    description: "Announce open position",
    perms:["MANAGE_MESSAGES"],
    usage: "{prefix}{cmd} (what opneded?)"
})