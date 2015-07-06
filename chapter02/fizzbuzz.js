// Student Workspace
Fizz.buzz = function () {
for (var i = 1/*creates a variable that is used to count from 1 to 100*/; i <= 100/*Stops the variable to go over 100*/; i++/*increments the variable by 1*/) {
	var fb = "";//creates a variable initiated by an empty string that will be outputed if it does contain "Fizz", "Buzz" or both
	if (i % 3 == 0){// checks if the number is divisible by 3
		fb += "Fizz";//adds "Fizz" to the empty variable
	}
	if (i % 5 == 0){//checks if the number is divisble by 5
		fb += "Buzz";//adds "Buzz" to the empty variable
	}
	console.log(fb || i);//prints out the variable if it is not empty, otherwise, it prints the number
  }
};