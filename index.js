const genId1 = require('10_xid');
const genId2 = require('5_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|RWb89r0pyU|' + genId2()).digest('base64');
}


module.exports = generateKey;
