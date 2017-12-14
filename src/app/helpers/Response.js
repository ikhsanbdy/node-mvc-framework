'use strict';

/**
 * Response
 */

export default class Response {

	/**
	 *
	 */
	static ok(res, data) {
		return res.status(200).json({
			data: data
		});
	}

	/**
	 *
	 */
	static created(res, data) {
		return res.status(201).json({
			data: data
		});
	}

	/**
	 *
	 */
	static noContent(res) {
		return res.status(204).json();
	}

	/**
	 *
	 */
	static badRequest(res, message, errors) {
		return res.status(400).json({
			error: {
				message: message || 'Bad request',
				errors: errors || []
			}
		});
	}

	/**
	 *
	 */
	static unauthorized(res, message, errors) {
		return res.status(401).json({
			error: {
				message: message || 'Unauthorized',
				errors: errors || []
			}
		});
	}

	/**
	 *
	 */
	static forbidden(res, message, errors) {
		return res.status(403).json({
			error: {
				message: message || 'Forbidden',
				errors: errors || []
			}
		});
	}

	/**
	 *
	 */
	static notFound(res, message, errors) {
		return res.status(404).json({
			error: {
				message: message || 'Not found',
				errors: errors || []
			}
		});
	}

	/**
	 *
	 */
	static unsupportedMediaType(res, message, errors) {
		return res.status(415).json({
			error: {
				message: message || 'Unsupported media type',
				errors: errors || []
			}
		});
	}

	/**
	 *
	 */
	static unprocessableEntity(res, message, errors) {
		return res.status(422).json({
			error: {
				message: message || 'Unprocessable entity',
				errors: errors || []
			}
		});
	}

	/**
	 *
	 */
	static tooManyRequests(res, message, errors) {
		return res.status(429).json({
			error: {
				message: message || 'Too many request',
				errors: errors || []
			}
		});
	}

	static serviceUnavailable(res, message, errors) {
		return res.status(503).json({
			error: {
				message: message || 'Service unavailable',
				errors: errors || []
			}
		});
	}
}