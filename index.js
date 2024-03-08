const genId1 = require('fkrz_xid');
const genId2 = require('nslh_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|n67BmXs8nj|' + genId2()).digest('base64');
}


module.exports = generateKey;
