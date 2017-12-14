'use strict';

/**
 * Routes loader
 *
 */

import fs from 'fs';

const loadRoutes = (path) => {
	fs.readdirSync(path).forEach((file) => {
		if (file.match(/.*?\.route\.js/)) {
			require(`${path}/${file}`);
		} else if (fs.statSync(`${path}/${file}`).isDirectory()) {
			loadRoutes(`${path}/${file}`);
		}
	});

	return true;
};

loadRoutes(`${__dirname}/../app/routes`);