function fibonacciEvens(){
    //By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
    var a = 0, b = 1, f = 1, total = 0;
    for(var i = 2; f <=4000000; i++) {
        f = a + b;
        if (f % 2 == 0){
        	total += f;
        }
        a = b;
        b = f;
    }
    console.log(total);
};