'use strict';

/**
 *
 *
 */

import Route from '~/lib/router';

import ErrorHandler from '~/app/helpers/ErrorHandler';

Route.group({ prefix: '/api' }, 'ExampleMiddleware', (Route) => {

	Route.resource({ prefix: '/examples', param: 'id(\\d)' }, 'ExampleController');

}).error(ErrorHandler.json());