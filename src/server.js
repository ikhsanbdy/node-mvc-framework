'use strict';

/**
 * Server
 *
 */

/**
 * Load env
 */
import '~/lib/env';

/**
 * Load app configuration
 */
import app from '~/lib/app';

/**
 * Load routes
 */
import '~/lib/route-loader';

/**
 * Load http config
 */
require('~/config/http').default(app);

export default app;