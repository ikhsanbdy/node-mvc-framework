'use strict';

/**
 *
 */

import url from 'url';

export default class Paginator {

	static build(req, result, filter) {
		let data = {
			page: result.page,
			limit: result.limit,
			total: result.total,
			next: this._getNext(req, result, filter),
			prev: this._getPrev(req, result, filter),
			items: result.docs
		};

		return data;
	}

	static customBuild(req, items, options = {}, filter) {
		let data = {
			page: options.page || null,
			limit: options.limit || null,
			total: options.total || null,
			next: (options.next) ? this._getUrlFormat(req, options.next, filter) : null,
			prev: (options.prev) ? this._getUrlFormat(req, options.prev, filter) : null,
			items: items
		};

		return data;
	}

	static _getNext(req, result, filter) {
		let maxPage = Math.ceil(result.total / result.limit);
		if (result.page < maxPage) {
			let query = Object.assign({}, req.query);
			query.page = result.page + 1;

			return this._getUrlFormat(req, query, filter);
		} else {
			return null;
		}
	}

	static _getPrev(req, result, filter) {
		let maxPage = Math.ceil(result.total / result.limit);
		if (result.page > 1) {
			let query = Object.assign({}, req.query);
			query.page = result.page - 1;

			return this._getUrlFormat(req, query, filter);
		} else {
			return null;
		}
	}

	static _filterQuery() {
		let filtered = Object.keys(raw)
			.filter(key => allowed.includes(key))
			.reduce((obj, key) => {
				obj[key] = raw[key];
				return obj;
			}, {});

		return filtered;
	}

	static _getUrlFormat(req, query = {}, filter) {
		return url.format({
			protocol: req.protocol,
			host: req.get('host'),
			pathname: req._parsedOriginalUrl.pathname,
			search: this._encodeQuery(query, filter)
		});
	}

	static _encodeQuery(data, filter = []) {
		let ret = [];
		for (let d in data) {
			if (filter.length == 0 || filter.includes(d))
				ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
		}

		return ret.join('&');
	}

}