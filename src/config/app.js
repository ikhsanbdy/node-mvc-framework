'use strict';

/**
 * App configuration
 *
 */

import bodyParser from 'body-parser';
import helmet from 'helmet';

export default (app) => {

	/**
	 * Body parser
	 */
	app.use(bodyParser.urlencoded({
		extended: true,
		limit: '5mb'
	}));

	app.use(bodyParser.json({
		limit: '5mb'
	}));

	// helmet
	app.use(helmet());

	/**
	 * Allow origin
	 */
	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, Authorization, X-Requested-With, Content-Type, Content-Length, Accept');

		if (req.method == 'OPTIONS') return res.end();
		else return next();
	});

	app.enable('trust proxy');

};