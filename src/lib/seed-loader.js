'use strict';

/**
 * Load seeder
 *
 */

import '~/lib/env';
import fs from 'fs';

const loadSeeds = (path) => {
	fs.readdirSync(path).forEach((file) => {
		if (file.match(/.*?\.seed\.js/)) {
			require(`${path}/${file}`);
		} else if (fs.statSync(`${path}/${file}`).isDirectory()) {
			loadSeeds(`${path}/${file}`);
		}
	});

	return true;
};

loadSeeds(`${__dirname}/../database/seeds`);