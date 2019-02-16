let i = 1;
setInterval(() => {
	if(i === 5){
		console.log('end!');		
		process.exit();
	}
	
	console.log(i);		
	 i++;
},1000);


