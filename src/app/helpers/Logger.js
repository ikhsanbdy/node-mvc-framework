'use strict';

/**
 * Logger wrapper
 */

import logger from '~/lib/logger';

const getMeta = (req, meta) => {
	let data = {
		ip: req.ip || '',
		url: req.originalUrl || '',
		method: req.method || '',
	};

	return Object.assign(data, meta);
};

export default class Logger {
	
	/**
	 *
	 */
	static error(req, message, meta = {}) {
		return logger.error(message, getMeta(req, meta));
	}

	/**
	 *
	 */
	static warn(req, message, meta = {}) {
		return logger.warn(message, getMeta(req, meta));
	}

	/**
	 *
	 */
	static info(req, message, meta = {}) {
		return logger.info(message, getMeta(req, meta));
	}

	/**
	 *
	 */
	static debug(req, message, meta = {}) {
		return logger.debug(message, getMeta(req, meta));
	}
}