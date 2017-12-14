'use strict';

/**
 *
 */

import request from 'request-promise';

export default class Request {

	static get(uri, options = {}) {
		return this._getRequest('GET', uri, options);
	}

	static post(uri, data, options = {}) {
		return this._getRequest('POST', uri, Object.assign(options, {
			data: data
		}));
	}

	static put(uri, data, options = {}) {
		return this._getRequest('PUT', uri, Object.assign(options, {
			data: data
		}));
	}

	static delete(uri, options = {}) {
		return this._getRequest('DELETE', uri, options);
	}

	static _getRequest(method, uri, options) {
		let _options = {
			method: method,
			uri: uri,
			json: true,
			simple: false,
			resolveWithFullResponse: true
		};

		_options = Object.assign(_options, options);

		return request(_options)
			.then((response) => {
				return {
					statusCode: response.statusCode,
					headers: response.headers,
					body: response.body
				};
			});
	}
}