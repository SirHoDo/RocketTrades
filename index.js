const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });
const { promisify } = require('util'),
readdir = promisify(require('fs').readdir),
path = require('path');

const config = require("./src/config.js");

client.commands = new Discord.Collection();
client.categories = new Discord.Collection();
async function loadEvents() {
	const evtFolder = await readdir('./src/events/');
    console.log(`=-=-=-=-=-=-=- Loading Events: -=-=-=-=-=-=-= `)
	evtFolder.forEach(async folder => {
		const folders = await readdir('./src/events/' + folder + '/');
		folders.forEach(async file => {
			delete require.cache[file];
			const { name } = path.parse(file);
			try {
				const event = new (require(`./src/events/${folder}/${file}`))(client, name);
				console.log(`Loading Event: ${name}`);
				if (folder == 'giveaway') {
					client.giveawaysManager.on(name, (...args) => event.run(client, ...args));
				} else if (folder == 'audio') {
					client.manager.on(name, (...args) => event.run(client, ...args));
				} else {
					client.on(name, (...args) => event.run(client, ...args));
				}
			} catch (err) {
				console.log(`Failed to load Event: ${name} error: ${err.message}`);
			}
		});
	});
}

const getDirectories = source =>
    require('fs').readdirSync(source, {
        withFileTypes: true
    })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

getDirectories("./src/commands").forEach(category => {
    
    console.log(`=-=-=-=-=-=-=- Loading ${category}: -=-=-=-=-=-=-= `)
    const categoryobj = require(`./src/commands/${category}`)
    client.categories.set(categoryobj.id, categoryobj)

    categoryobj.commands.forEach(command => {
        try {
            client.commands.set(command.props.name, command)
            if (command.props.hasOwnProperty("aliases")) {
                command.props.aliases.forEach(alias => {
                    if (!client.commands.has(alias)) {
                        client.commands.set(alias, command)
                    }
                })
            }
            console.log(`Loading Command: ${command.props.name}`)
        } catch (e) {
            console.log("-------------ERROR----------")
            console.log(command)
            console.log("Failed to load")
            console.log(e)
            console.log("-------------ERROR----------")
        }
    })
})

loadEvents();
client.login(config.token);