const Discord = require("discord.js")
const simpleCommand = require("../../core/simpleCommand");
const config = require('../../config')

module.exports = new simpleCommand(async(message, args) => {
    const embed = new Discord.MessageEmbed()
       .setColor(config.embedColor)
       .setTitle('RocketCallouts SPY 5m')
       .setDescription('This is SPY with Rocket Callouts.  DM Ryan Shields#0275 on Discord for access')
       .setImage('https://s3.tradingview.com/snapshots/4/48gOtqWi.png')
       .setFooter('Copyright ©RTBot • 2022')
        .setTimestamp()
       message.channel.send({ embeds: [embed]});
}, {
    name: "rcspy",
    cooldown: 0,
    aliases: ["rcspy", "spy"],
    description: "Gives yesterdays RocketCall demo on spy",
    usage: "{prefix}{cmd} (announcement)"
})