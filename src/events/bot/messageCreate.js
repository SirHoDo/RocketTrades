
const messagecli = require('../../core/messagecli'),
Discord = require('discord.js'),
config = require('../../config.js'),
Event = require('../../structures/Event');


/**
 * Ready event
 * @event IUNGO#MessageCreate
 * @extends {Event}
*/
class MessageCreate extends Event {
	constructor(...args) {
		super(...args, {
			dirname: __dirname,
		});
	}

	/**
	 * Function for recieving event.
	 * @param {client} client The instantiating client
	 * @readonly
	*/
	async run(client, message) {
        
        
        if (message.author.bot) return;
        if (message.content == `<@!${client.user.id}>`) {
            const embed = new Discord.MessageEmbed()
                    .setColor('#5d369d')
                    .setTitle(`Hey, ${message.author.username}#${message.author.discriminator}`);
                    embed.setDescription([
                        `Default Prefix: \`${config.prefix}\``,
                        `Unique Users: \` \``
                        ].join('\n'))
                    .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`)
    
                    message.channel.send({embeds: [embed]});
        }
        var prefix = config.prefix
    
        if (!message.content.toLowerCase().startsWith(prefix)) return
        messagecli(message, client)
    }
}

module.exports = MessageCreate;
