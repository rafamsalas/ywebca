function multiplesSum(){
	//Find the sum of all the multiples of 3 or 5 below 1000.
	var total = 0;
	for(var i = 0; i < 1000; i++){
		if (i % 3 == 0){
		total += i;
		}
		if (i % 5 == 0) {
			total +=i;
		}
	}
	console.log(total);
};