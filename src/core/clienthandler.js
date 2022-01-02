module.exports = (client) => {
    var stats = [`for ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} accounts`]
        setInterval(function() {
            let status = stats[Math.floor(Math.random() * stats.length)];
            client.user.setActivity('COMING SOON ' + status, { type: 'PLAYING', url: 'https://iungo.info/' });
        }, 5000)
}