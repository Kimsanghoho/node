const crypto = require('crypto');

console.log('base64 : ', crypto.createHash('sha512').update('��й�ȣ').digest('base64'));
console.log('hex : ', crypto.createHash('sha512').update('��й�ȣ').digest('hex'));
console.log('base64 : ', crypto.createHash('sha512').update('�ٸ� ��й�ȣ').digest('base64'));