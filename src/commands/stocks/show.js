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
    .setFooter('Copyright ©RTBot • 2022')
    .setTimestamp()
    .setDescription([
        (`> Status: \`\`${resp.status}\`\``),
        (`> Session: \`\`${resp.session}\`\``),
        (`> Update: \`\`${resp.update}\`\``),
        (`> Price: \`\`${resp.price}\`\``),
        (`> Symbol: \`\`${resp.symbol}\`\``),
        (`> Symbol Pro: \`\`${resp.symbol_pro}\`\``),
        (`> Name: \`\`${resp.name}\`\``),
        (`> changesPercentage: \`\`${resp.changesPercentage}\`\``),
        (`> change: \`\`${resp.change}\`\``),
        (`> lastupdate: \`\`\`${resp.lastupdate}\`\`\``),
    ].join('\n'));
    message.channel.send({ embeds: [embed]})
    }

}, {
    name: "show",
    cooldown: 0,
    aliases: ["show", "stock", "stocks"],
    description: "Gives yesterdays RocketCall demo on spy",
    usage: "{prefix}{cmd} (announcement)"
})