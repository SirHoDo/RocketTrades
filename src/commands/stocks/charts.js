const smarket = require('../../core/stockmarket.js');
const Discord = require("discord.js")
const simpleCommand = require("../../core/simpleCommand");
const config = require('../../config')


module.exports = new simpleCommand(async(message, args) => {

    const tag = args.join(" ");
	if (!tag || tag === '') {
		const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor)
            .setTitle('`INVALID USAGE`') 
            .setDescription(`> **Usage** ${config.prefix}show (symbol)`)
            .setFooter('Copyright ©RTBot • 2022')
            .setTimestamp()
             message.delete().catch(err => console.log(err));
             message.channel.send({ embeds: [embed]});
		return;
	}
    let resp = await smarket.getStockData([tag], false);
    [resp] = resp;

    if(resp.status == 0){
        const embed = new Discord.MessageEmbed()
        .setColor(config.embedColor)
        .setTitle('`INVALID SYMBOL`') 
        .setDescription(`> **ERROR** Unfortunately I could not find data for **${args[0]}**`)
        .setFooter('Copyright ©RTBot • 2022')
        .setTimestamp()
         message.delete().catch(err => console.log(err));
         message.channel.send({ embeds: [embed]});
    } else {

    const embed = new Discord.MessageEmbed()
    .setColor(config.embedColor)
    .setTitle(resp.name)
    .setDescription(`> **Last Update** \`\`\`${resp.lastupdate}\`\`\``)
    .setImage("https://charts.finviz.com/chart.ashx?t=" + args[0] )
    .setFooter('Copyright ©RTBot • 2022')
    .setTimestamp()
    message.channel.send({ embeds: [embed]});
    console.log("https://charts.finviz.com/chart.ashx?t=" + args[0] )

    }

}, {
    name: "charts",
    cooldown: 0,
    aliases: ["chart", "charts"],
    description: "Invite the bot to your server",
    usage: "{prefix}{cmd}"
})