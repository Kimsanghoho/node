const{ odd, even } = require('./var');
const checkNumber  = require('./func');


function checkStringOddOrEven(str){
	if(str.length % 2){  //È¦¼ö¸é
		return odd;
	}
	return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

