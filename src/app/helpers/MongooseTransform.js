'use strict';

/**
 *
 */

export default class MongooseTransform {

	/**
	 *
	 */
	static toJSON(schema, options) {
		if (!schema.options.toJSON) {
			schema.options.toJSON = {
				transform: (doc, ret, options) => {
					ret.id = ret._id;
					delete ret._id;
					delete ret.__v;
					return ret;
				}
			};
		}
	}
}