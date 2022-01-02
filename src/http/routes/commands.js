
const express = require('express'),
	router = express.Router();

// Command page
module.exports = function(client) {
	// List of all commands
	router.get('/', function(req, res) {
		var home = []
		// show list of commands
		client.categories.forEach(category => {
			home.push(category.id)
		});
		res.status(200).json({ home });
	});

	// JSON view of all commands
	router.get('/json', function(req, res) {

		res.status(200).json([...client.commands]);
	});

	// Show information on a particular command
	/*router.get('/:category', function(req, res) {

		// check if command exists
		if (client.categories.get(req.params.category) || client.categories.get(client.aliases.get(req.params.category))) {
			
			if (client.categories.get(req.params.category) || client.categories.get(client.aliases.get(req.params.category))) {
				const command = client.categories.get(req.params.category) || client.categories.get(client.aliases.get(req.params.category));
				res.status(200).json({ command });
           } 
        } else {
			res.status(400).json({ error: 'Invalid command!' });
		}
	});*/

	router.get('/:command', function(req, res) {

		// check if command exists
		if (client.commands.get(req.params.command) || client.commands.get(client.aliases.get(req.params.command))) {
			const command = client.commands.get(req.params.command) || client.commands.get(client.aliases.get(req.params.command));
			res.status(200).json({ command });
		} else {
			res.status(400).json({ error: 'Invalid command!' });
		}
	});

	return router;
};
