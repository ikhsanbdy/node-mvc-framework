'use strict';

/**
 * Logger
 */

import winston from 'winston';
import winstonRotate from 'winston-daily-rotate-file';

/**
 *
 */
const getTransport = (level) => {
	return new(winstonRotate)({
		name: `log-${level}`,
		level: level,
		json: true,
		stringify: (obj) => JSON.stringify(obj),
		datePattern: 'yyyy-MM-dd',
		prepend: true,
		filename: `./storage/logs/_${level}.log`
	});
};

const transports = [
	getTransport('error'),
	getTransport('warn'),
	getTransport('info'),
	getTransport('debug'),
	getTransport('trace')
];

if (env('APP_ENV') != 'production') {
	transports.push(new winston.transports.Console({
		level: 'error',
		level: 'warn',
		level: 'info',
		level: 'debug'
	}));
}

/**
 *
 */
export default new(winston.Logger)({
	levels: {
		error: 0,
		warn: 1,
		info: 2,
		debug: 3,
		trace: 4
	},
	transports: transports
});