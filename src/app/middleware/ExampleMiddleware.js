'use strict';

/**
 *
 *
 */

import ErrorHandler from '~/app/helpers/ErrorHandler';
import Response from '~/app/helpers/Response';
import Logger from '~/app/helpers/Logger';

export default class ExampleMiddleware {

	/**
	 * This method will injected as middleware
	 */
	handle(req, res, next) {
		Logger.info(req, 'ExampleMiddleware.handle executed');
		return next();
	}
}