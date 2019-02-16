const{ odd, even } = require('./var');

function checkOddOrEven(num){
	if(num % 2){  //È¦¼ö¸é
		return odd;
	}
	return even;
}

module.exports = checkOddOrEven;