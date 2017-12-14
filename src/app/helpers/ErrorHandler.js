'use strict';

/**
 * Error handlers helper
 */

import Logger from '~/app/helpers/Logger';

export default class ErrorHandler {

	/**
	 *
	 */
	static notFound(req, res, next) {
		return res.status(404).json({
			error: {
				message: 'Not found',
				errors: []
			}
		});
	}

	/**
	 *
	 */
	static internalServerError(err, req, res, next) {
		Logger.error(req, 'Internal server error', {
			stack: err.stack
		});

		return res.status(500).json({
			error: {
				message: 'Something went wrong',
				errors: [{
					type: 'internalServerError',
					message: err.message
				}]
			}
		});
	}

	/**
	 *
	 */
	static serviceUnavailable(res, message, errors) {
		return res.status(503).json({
			error: {
				message: message || 'Service unavailable',
				errors: errors || []
			}
		});
	}

	/**
	 *
	 */
	static json() {
		return [this.notFound, this.internalServerError];
	}
}