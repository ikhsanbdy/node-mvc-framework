'use strict';

/**
 *
 *
 */

import Validator from '~/lib/validator';

import Response from '~/app/helpers/Response';
import Logger from '~/app/helpers/Logger';

export default class ExampleController {

	/**
	 *
	 */
	index(req, res, next) {
		try {
			let data = [{
				foo: 'bar'
			}];

			Logger.info(req, 'ExampleController.index executed');

			return Response.ok(res, data);
		} catch (err) {
			return next(err);
		}
	}

	/**
	 *
	 */
	show(req, res, next) {
		try {
			let data = {
				foo: 'bar'
			};

			Logger.info(req, 'ExampleController.show executed');

			return Response.ok(res, data);
		} catch (err) {
			return next(err);
		}
	}

	/**
	 *
	 */
	store(req, res, next) {
		try {
			let rules = {
				foo: 'required|string|min:3'
			};

			let Input = Validator.body(req, rules);

			if (Input.error()) {
				return Response.unprocessableEntity(res, 'Validation error', Input.messages());
			}

			let data = {
				foo: Input.get('foo')
			};

			Logger.info(req, 'ExampleController.store executed');

			return Response.created(res, data);
		} catch (err) {
			return next(err);
		}
	}

	/**
	 *
	 */
	update(req, res, next) {
		try {
			let rules = {
				foo: 'string|min:3'
			};

			let Input = Validator.body(req, rules);

			if (Input.error()) {
				return Response.unprocessableEntity(res, 'Validation error', Input.messages());
			}

			let data = {
				foo: Input.get('foo') || null
			};

			Logger.info(req, 'ExampleController.update executed');

			return Response.ok(res, data);
		} catch (err) {
			return next(err);
		}
	}

	/**
	 *
	 */
	destroy(req, res, next) {
		try {
			Logger.info(req, 'ExampleController.destroy executed');

			return Response.noContent(res);
		} catch (err) {
			return next(err);
		}
	}
}