const Discord = require("discord.js")
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config')

function isAO(str) {
    try {
        if (str.toString() == "[object Object]") {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}
module.exports = async(message, client) => {
    var prefix = config.prefix

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const commands = client.commands
    try {
        if (commands.has(command)) {

            var commandobj = commands.get(command)
            if (!message.guild.me.permissions.has("SEND_MESSAGES")) return message.author.send(`Hey ${message.author.username}! I need \`Send Messages\` permissions to speak.`)
            if (commandobj.props.hasOwnProperty("ownerOnly") && message.author.id != config.ownerID){ 
                const linkRow = new MessageActionRow()
                .addComponents(
                new MessageButton()
                .setURL('https://peepy.info/staff/')
                .setLabel('Peepy Staff')
                .setStyle('LINK')
                )
                const embed = new Discord.MessageEmbed()
                .setColor('#5d369d')
                .setTitle("Staff Only")
                .setDescription("This is a staff only command, please contact staff if you believe this is a mistake.")
                return message.channel.send({embeds: [embed], components: [linkRow]}) }
            
            if (!message.guild.me.permissions.has("EMBED_LINKS")) return message.channel.send("Make sure I have `Embed Links` permission!\nYou can give me this by click Server settings > My role and check Embed Links!")
            if (commandobj.props.perms.some(perm => !message.guild.me.permissions.has(perm))) {
                const neededPerms = commandobj.props.perms.filter(perm => !message.guild.me.permissions.has(perm))
                message.channel.send("I need the following perms to run this command\n" + neededPerms.join(" "))
            } else {
                try {
                    commandobj.fn(message, args, client)
                        .catch(e => {
                            const embed = new MessageEmbed()
                            .setTitle("Lol oops, Ethan make brokey")
                            .setDescription(`An error has occured, if this keeps coming again and again contact the owner\n\`\`\`${(isAO(e)?JSON.stringify(e):e.toString())}\`\`\``)

                            message.channel.send({embeds: [embed]})
                            console.log(e)
                        })
                        console.log(message.author.username + " used command " + command + args.join(" "))
                } catch (e) {
                    console.log(e)
                    message.channel.send(`Test \`\`\`${(isAO(e)?JSON.stringify(e):e.toString())}\`\`\``)
                }
            }
        }
    } catch (e) {
        message.channel.send(`Test \`\`\`${(isAO(e)?JSON.stringify(e):e.toString())}\`\`\``)
    }
}