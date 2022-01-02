const Discord = require("discord.js")
const simpleCommand = require("../../core/simpleCommand");
const config = require('../../config')

module.exports = new simpleCommand(async(message, args) => {
         const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor)
			.setTitle('RocketCallouts VXX 5m')
			.setDescription('This is VXX with Rocket Callouts.  DM Ryan Shields#0275 on Discord for access')
			.setImage('https://s3.tradingview.com/snapshots/k/kwAxCR4z.png')
			.setFooter('Copyright ©RTBot • 2022')
            .setTimestamp()
            message.channel.send({ embeds: [embed]});
        
}, {
    name: "rcvxx",
    cooldown: 0,
    aliases: ["vxx", "rcvxx"],
    description: "Gives yesterdays RocketCall demo on vxx",
    usage: "{prefix}{cmd}"
})