function PrimeNum(min, max){

var func = [];
var primes = [];

    for (var i = min; i <= max; i++) { // For every number between min and max;
        if (!func[i]) { // if the number at i in func is false,
            // i has not been marked -- it HAS to be prime to work
            primes.push(i); // push i to the end of the primes array

            for (var j = i * 2; j <= max; j += i) { // Checks for multiples of prime numbers 
                func[j] = true; // set the number that is at the j index of func as true
            }
        }
    }
    console.log(primes); // logs the "primes" array to the console 
};