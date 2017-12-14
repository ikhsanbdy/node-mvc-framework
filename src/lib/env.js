'use strict';

/**
 * Env configuration
 *
 */

import dotenv from 'dotenv-safe';

dotenv.load({
	allowEmptyValues: true
});

/**
 *
 */
const Env = (name, defaultValue) => {
	return process.env[name] || defaultValue;
};

global.env = Env;