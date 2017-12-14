'use strict';

/**
 *
 *
 */

import dbConfig from '~/config/database';

/*
 *
 */
if (dbConfig.driver == 'mongodb') {
	var database = require('mongoose');
	database.Promise = require('bluebird');

	database.connection.openUri(dbConfig.connection.uri);
	database.connection.on('error', console.error.bind(console, 'connection error:'));

	if (dbConfig.plugins && dbConfig.plugins.length > 0) {
		for (let i = 0; i < dbConfig.plugins.length; i++) {
			database.plugin(dbConfig.plugins[i]);
		}
	}

} else {
	var database = null;
	throw new Error(`Not supported database driver: ${dbConfig.driver}`);
}

export default database;