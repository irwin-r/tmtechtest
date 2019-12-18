const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const express = require('express');
const nextApp = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextApp({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// Serve staic assets
	server.use(express.static('./public'));

	// API
	server.use(
		'/api',
		cookieSession({
			httpOnly: false,
			keys: ['super-secret-key'],
			maxAge: 24 * 60 * 60 * 1000,
			name: 'thinkmill-training',
		})
	);
	server.use('/api', bodyParser.json());
	server.use('/api', bodyParser.urlencoded({ extended: true }));
	server.use('/api', require('./api'));

	// Dynamic Job Route
	server.get('/job/:jobId', (req, res) => {
		// Pass the params in
		const { jobId } = req.params;
		app.render(req, res, '/job', { jobId, ...req.query });
	});

	// Handle all other routes
	server.get('*', handle);

	server.listen(port, error => {
		if (error) throw error;
		console.log(`Server started on http://localhost:${port}`);
	});
});
