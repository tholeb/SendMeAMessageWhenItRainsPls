require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
require('./routes.js')(app);


app.use(express.json());
app.use(express.urlencoded({
	extended: true,
}));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));

// Prod
if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, '../client/build')));

	// Handle React routing, return all requests to React app
	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
	});
}