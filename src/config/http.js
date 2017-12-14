'use strict';

/**
 * Http(s) configuration
 *
 */

import fs from 'fs';

export default (app) => {

	/**
	 * Http(s) server
	 *
	 */
	let server;

	if (env('APP_HTTPS') == 'true') {
		// credential
		let credentials = {
			key: fs.readFileSync(env('SSL_KEY_PATH'), 'utf8'),
			cert: fs.readFileSync(env('SSL_CERT_PATH'), 'utf8'),
			ca: [fs.readFileSync(env('SSL_CA_BUNDLE_PATH'), 'utf8')],
			passphrase: env('SSL_PASSPHRASE')
		};

		server = require('https').createServer(credentials, app);
	} else {
		server = require('http').Server(app);
	}

	server.listen(env('APP_PORT', 3000), () => {
		console.info(`Server running in '${env('APP_ENV')}' env at port: ${env('APP_PORT', 3000)}`);
	});
};