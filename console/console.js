const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
	outside: {
		inside: {
			key : 'value',
		},
	},
};

console.time('��ü �ð�');
console.log('����� �α� ��ǥ�� ������ ���� ���� ¦�� �� �ֽ��ϴ�.');
console.log(string, number, boolean);
console.error('������ console.error�� ����ּ���.');

console.dir(obj, {colors : false, depth : 2}); 
console.dir(obj, {colors : true , depth : 1});

console.time('�ð� ����');
for(let i = 0; i < 100000; i++ ){
	continue;
}
console.timeEnd('�ð� ����');

function b(){
	console.trace('���� ��ġ ��ô');
}

function a(){
	b();
}

a();

console.timeEnd('��ü�ð�');

