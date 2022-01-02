const fs = require("fs");
const Discord = require("discord.js")
const simpleCommand = require("../../core/simpleCommand");
const config = require('../../config')

module.exports = new simpleCommand(async(message) => {
    const linkRow = new Discord.MessageActionRow()
        .addComponents(
        new Discord.MessageButton()
        .setURL('https://discord.com/api/oauth2/authorize?client_id=778240526230356009&scope=bot+applications.commands&permissions=1073081686')
        .setLabel('INVITE')
        .setStyle('LINK')
        )

    const embed = new Discord.MessageEmbed()
		.setColor(config.embedColor)
		.setDescription('🤖 [Invite me to your server](https://discord.com/api/oauth2/authorize?client_id=778240526230356009&scope=bot+applications.commands&permissions=1073081686)');
		message.channel.send({ embeds: [embed], components: [linkRow] });
    
}, {
    name: "invite",
    cooldown: 1.8e+6,
    aliases: ["invite", "join"],
    description: "Invite the bot to your server",
    perms:["SEND_MESSAGES"],
    usage: "{prefix}{cmd}"
})