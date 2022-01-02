const commands = require('fs').readdirSync(__dirname)
    .filter(c => c !== 'index.js')
    .map(c => require(`${__dirname}/${c}`))

module.exports = {
    commands,
    name: 'General',
    id: 'general',
    desc: "General quality of life bot commands."
}