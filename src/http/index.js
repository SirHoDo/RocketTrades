const express = require('express'),
	app = express(),
	config = require("../config.js"),
	{ promisify } = require('util'),
	readdir = promisify(require('fs').readdir),
	cors = require('cors');

module.exports = async client => {
	const routes = (await readdir('./src/http/routes')).filter((v, i, a) => a.indexOf(v) === i),
		endpoints = [];

	// IP logger
	app.use(function(req, res, next) {
		if (req.originalUrl !== '/favicon.ico' || config.debug) {
			console.log(`IP: ${req.connection.remoteAddress.slice(7)} -> ${req.originalUrl}`);
		}
		next();
	});

	// Token system
	app.use((req, res, next) => {
		if (config.API.secure && config.API.token !== req.query.token) {
			return res.json({ error: 'Invalid API token' });
		}
		next();
	});

	// Get all routes
	for (const route of routes) {
		if (route !== 'index.js') {
			app.use(`/${route.replace('.js', '')}`, require(`./routes/${route}`)(client));
			endpoints.push(`${route.replace('.js', '')}:`, ...(require(`./routes/${route}`)(client).stack.map(item => `\t ${item.route.path}`).filter((v, i, a) => a.indexOf(v) === i && v !== '/')));
		}
	}

	// Create web server
	app
		.use(cors())
		.disable('x-powered-by')
		.get('/', (req, res) => {
			res
				.type('text/plain')
				.send([
					`API server for ${client.user.tag}`,
					'Endpoints:',
					endpoints.join('\n'),
				].join('\n'));
		})
		// Make sure web scrapers aren't used
		.get('/roclients.txt', function(req, res) {
			res
				.type('text/plain')
				.send('User-agent: *\ndisallow: /');
		})
		.get('*', async function(req, res) {
			res.send('No data here. Go away!');
		})
		// Run the server
		.listen(config.API.port, () => {
			console.log(`Statistics API has loaded on port:${config.API.port}`);
		})
		.on('error', (err) => {
			console.log(`Error with starting HTTP API: ${err.message}`);
		});
};