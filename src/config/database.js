'use strict';

/**
 *
 *
 */

import paginate from 'mongoose-paginate';
import transform from '~/app/helpers/MongooseTransform';

export default {
	driver: 'mongodb',
	connection: {
		uri: `mongodb://${env('MONGO_HOST')}/${env('MONGO_DATA')}`
	},
	plugins: [
		paginate,
		transform.toJSON
	]
};