'use strict';

/**
 * App configuration
 * Source: https://github.com/iwakme/iwak-framework/blob/master/lib/app.js at 2017-07-12
 * Modified by: Ikhsan Budiyanto <ikhsanbdy@gmail.com> at 2017-07-12 15:35:00
 */

import express from 'express';
import path from 'path';

const app = express();

require('~/config/app').default(app);

app.use(express.static('public'));

export default app;