'use strict';

/**
 * Middleware for Redirects
 *
 * @param {Object} mappings - Key = Source URL, Value = Destination URL.
 * @return 
 */
module.exports = function middlewareRedirects(mappings) {
	return (req, res, next) => {
		if (typeof mappings[req.url] === 'string') {
			res.writeHead(301, {Location: mappings[req.url]});
			res.end();
		} else {
			next();
		}
	};
};
