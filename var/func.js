const{ odd, even } = require('./var');

function checkOddOrEven(num){
	if(num % 2){  //Ȧ����
		return odd;
	}
	return even;
}

module.exports = checkOddOrEven;