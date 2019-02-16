const os = require('os');

console.log('----------OS----------------');		
console.log("os.arch() : ",os.arch());		
console.log("os.platform() : ",os.platform());		
console.log("os.type() : ",os.type());
console.log("os.uptime() : ",os.uptime());
console.log("os.hostname() : ",os.hostname());
console.log("os.release() : ",os.release());

console.log('----------dir----------------');		
console.log("os.homedir() : ",os.homedir());
console.log("os.tmpdir() : ",os.tmpdir());

console.log('----------cpu----------------');		
console.log("os.cpus() : ",os.cpus());
console.log("os.cpus().length : ",os.cpus().length);

console.log('----------memory----------------');		
console.log("os.freemem() : ",os.freemem());
console.log("os.totalmem() : ",os.totalmem());
