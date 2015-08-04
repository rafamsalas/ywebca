// Chapter 3

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Defining a Function    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/******************************    DEFINING 1    ******************************/
// Use a function expression to define a function named `three`.
// That function should return the value 3.
//==============================//
Exer.defining1 = function () {  //
//==============================//
  var three = function () {
    return 3;
  }

};  // end Exer.defining1

/******************************    DEFINING 2    ******************************/
// Use a function expression to define a function named `myLog`.
// `myLog` should accept one parameter named `message`.
// `myLog` should output `message` to the console with the appropriate
//     formatting.
//==============================//
Exer.defining2 = function () {  //
//==============================//

var myLog = function (message) {
    console.log("The Log Says: " + message);
}

};  // end Exer.defining2

/******************************    DEFINING 3    ******************************/
// Use a function expression to define a function named `square`.
// `square` should accept one parameter named `number`.
// The function should square the number and both log and return the result.
//==============================//
Exer.defining3 = function () {  //
//==============================//

var square = function (number) {//creates a function named square and with a parameter named number
  console.log(number*number);//logs the number squared
  return number*number;//returns the squared number
}

};  // end Exer.defining3 // end Exer.defining3

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^    Parameters and Scopes    ^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*****************************    Parameters 1    *****************************/
// Inside `Exer.parameters1` create a function named `spaceCubeDetector` that
//     accepts a length, width, and a height.
// When its length, width, and height are all equal, `spaceCubeDetector` should
//     return the correct string, otherwise the other string.
// `parameters1` should return `spaceCubeDetector`
//===============================//
Exer.parameters1 = function() {  //
//===============================//
var spaceCubeDetector = function (length, width, height) {//creates a function named spaceCubeDetector w/ parameters of length, width, height
    if (length == width && length == height) {//checks if the length, width, and height are the same
      return "SPACE CUBE DETECTED!!";// returns this message if they are the same
    }
    else {//if they are not the same,
      return "THIS IS NO SPACE CUBE!";//the function returns this message instead
    }
  }
  return spaceCubeDetector;// returns spaceCubeDetector to the user
 };  // end Exer.parameters1

/*****************************    Parameters 2    *****************************/
// Given spaceCubeDetector:
// Run it once with a length of 3, width of 5, and height of 3.14159265359
//     and log its return value.
// Run it once with a length of 7, width of 7, and height of 7 and log its
//     return value.
// Run it once with a length of 1, width of 2, and height of 3 and log its
//    return value.
//================================================//
Exer.parameters2 = function (spaceCubeDetector) {  //
//================================================//
spaceCubeDetector(3, 5, 3.14159265359);// first test
spaceCubeDetector(7, 7, 7);//second test
spaceCubeDetector(1, 2, 3);// third test
console.log("THIS IS NO SPACE CUBE!");//result of the first test
console.log("SPACE CUBE DETECTED!!");//result of the second test
console.log("THIS IS NO SPACE CUBE!");//result of the third test

};  // Exer.parameters2

//===============================    SCOPE    ================================//
//  For Scope exercises 1-5, read through the following code and find the     //
//  values for the variables where noted by the comments. Write your asnwers  //
//  as return values for the functions Exer.scope[1-5].                       //
//============================================================================//

Exer.scopeExample = function() {

  var foo = 2;
  var bar = 7;
  var quux = 11;

  var skip = function() {
    var foo = 5;
    console.log(foo); // Scope 1: What value of foo is logged?
    quux = foo *  bar;
    console.log(quux); // Scope 2: What value of quux is logged?
    return bar;
  };

  var scoop = function(quux) {
    console.log(quux); // Scope 4: What value of quux is logged?
  };

  var scrap = function() {
    console.log(quux); // Scope 5: What value of quux is logged?
  };

  foo = skip();
  scoop(foo); // Scope 3: What value of foo is passed to the function Scoop?
  scrap();

};

/********************************    SCOPE    *********************************/
//  Write your answers in this section

Exer.scope1 = function() {
  return 5;//foo is equal to 5
};

Exer.scope2 = function() {
  return 35;//foo is being multiplied by 7, so it's 35
};

Exer.scope3 = function() {
  return 7;//returns 7 since foo was re-assigned to be equal to the result of the `skip` function, which returned 7
};

Exer.scope4 = function() {
  return 7;//is seven since scoop returned foo after scope 3
};

Exer.scope5 = function() {
  return 35;//quux was re-assigned to be equal to 35
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Nested Scope    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

//============================================================================//
//  For Nested Scope exercises 1-20, read through the following code and      //
//  find the values for the variables where noted by the comments. Write      //
//  your answers as the return values for functions Exer.nest[1-20].          //
//============================================================================//

Exer.nestExample = function() {

  var foo = 2;
  var bar = 5;
  var quux = 7;

  var nest = function(foo) {

    var bar = 11;

    var finch = function(foo) {
      console.log(foo); // Nest 8: What value of foo is logged?
      bar = foo;
      quux = foo;
    };

    console.log(bar); // Nest 4: What value of bar is logged?
    console.log(quux); // Nest 5: What value of quux is logged?

    var robin = function() {
      var bar = 13;
      quux = bar;
      console.log(quux); // Nest 11: What value of quux is logged?
    };

    console.log(bar); // Nest 6: What value of bar is logged?
    console.log(quux); // Nest 7: What value of quux is logged?

    var batman = function() {
      foo = 0;
      bar = 0;
      quux = 0;
      return "I AM THE NIGHT!!";
    };

    finch(17);

    console.log(bar); // Nest 9: What value of bar is logged?
    console.log(quux); // Nest 10: What value of quux is logged?

    robin();

    console.log(quux); // Nest 12: What value of quux is logged?

    if (batman()) {
      console.log(foo); // Nest 13: What value of foo is logged?
      console.log(bar); // Nest 14: What value of bar is logged?
      console.log(quux); // Nest 15: What value of quux is logged?
    }
  };

  console.log(foo); // Nest 1: What value of foo is logged?
  console.log(bar); // Nest 2: What value of bar is logged?
  console.log(quux); // Nest 3: What value of quux is logged?

  nest(5318008);

  console.log(foo); // Nest 16: What value of foo is logged?
  console.log(bar); // Nest 17: What value of bar is logged?
  console.log(quux); // Nest 18: What value of quux is logged?

};

/*****************************    Nested Scope    *****************************/
//  Write your answers in this section.
//2, 5, 7, 11, 7, 11, 7, 17, 17, 17, 13, 13, 0, 0, 0, 2, 5, 0,
Exer.nest1 = function() {
  return 2 ;//returns foo, which is equal to 2
};
Exer.nest2 = function() {
  return 5 ;//returns bar, which is equal to 5
};
Exer.nest3 = function() {
  return 7 ;// returns quux, which is equal to 7
};
Exer.nest4 = function() {
  return 11 ;//bar was reassigned to be equal to 11
};
Exer.nest5 = function() {
  return 7 ;//quux is still equal to 7
};
Exer.nest6 = function() {
  return 11;//bar is still equal to 11
};
Exer.nest7 = function() {
  return 7 ;//quux is still equal to 7
};
Exer.nest8 = function() {
  return 17 ;//foo's value changed to 17
};
Exer.nest9 = function() {
  return 17 ;// bar's value changed to 17
};
Exer.nest10 = function() {
  return 17 ;//quux's value changed to 17
};
Exer.nest11 = function() {
  return 13 ;//quux is now equal to 13
};
Exer.nest12 = function() {
  return 13 ;// quux is still 13
};
Exer.nest13 = function() {
  return 0 ;//foo is now 0
};
Exer.nest14 = function() {
  return 0 ;//bar is now 0
};
Exer.nest15 = function() {
  return 0 ;//quux is now 0
};
Exer.nest16 = function() {
  return 2 ;//foo remained the same
};
Exer.nest17 = function() {
  return 5 ;//bar is the same
};
Exer.nest18 = function() {
  return 0 ;//quux changed to 0
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Functions as Values    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/******************************    Values 1    ********************************/
// Given the parameters `volume` and `spaceCubeDetector`, assign the
// `spaceCubeDetector` function value to the `volume` variable. Call `volume`
// after the assignment. Then, return `volume`.
//=======================================================//
Exer.values1 = function ( volume, spaceCubeDetector ) {  //
//=======================================================//
volume = spaceCubeDetector;//assigns volume to be the same as spaceCubeDetector
volume(1, 1, 1);//tests volume
return volume;//returns volume to the user
};  // end Exer.values1

/******************************    Values 2    ********************************/
// Assign a new function to `volume` that takes a length, a width, and a height
// and returns their product. Return the new `volume` function when you
// are done.
//====================================//
Exer.values2 = function ( volume ) {  //
//====================================//
volume = function (length, height, width) {// creates a new function named volume that has length, width and height for the parameters
return length*height*width;//returns the result of multipling all tree parameters together
}
return volume;//returns volume to the user

};  // end Exer.values2

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^    Declaration Notation    ^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/****************************    DECLARATION 1    *****************************/
// Use declaration notation to declare a function called `testNinja` that has
//     no parameters
// `testNinja` should log the string "You gotta believe!"
// Return `testNinja` from `Exer.declaration1`
//=================================//
Exer.declaration1 = function () {  //
//=================================//
function testNinja() {
  console.log("You gotta believe!");
}
return testNinja;

};  // end Exer.declaration1

/****************************    DECLARATION 2    *****************************/
// 1. Call a function called `trainNinja` with the argument "punch"
//    Log what `trainNinja` returns
// 2. Declare a function named `trainNinja` that takes one parameter called
//        `move`
//    `trainNinja` should return the correct string
//=================================//
Exer.declaration2 = function () {  //
//=================================//
trainNinja("punch");
function trainNinja(move) {
  trainNinja = "Kick, " + move + ", block! It's all in the mind!";
  console.log(trainNinja);
}

};  // edn Exer.declaration2

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    The Call Stack    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*******************************    STACK 1    ********************************/
// 1. Push three pancakes in this order: `apple`, `banana`, and
//    `chocolate chip`.
// 2. Pop one pancake and save it in a variable called `yum`.
// 3. Push two pancakes: `bacon` and `snozzberries`.
// 4. Pop one pancake and concatenate it to the end of `yum`, but put a space
//    (' ') between the two flavors.
// 5. Return yum.
//=================================//
Exer.stack1 = function ( jack ) {  //
//=================================//

jack.push('apple', 'banana', 'chocolate chip');//adds the arguments (apple, banana, and chocolate chip) to the 'jack' array (list) at the end in that order
var yum = jack.pop();// takes off the last item in the array/list and makes it equal to the variable 'yum'
jack.push('bacon', 'snozzberries');//adds  bacon and snozzberries to the end of the 'jack' array/list
yum += ' ' + jack.pop();// adds a space to yum, takes off the last item in the 'jack' list and adds it to yum
return yum;//returns yum, which is now "chocolate chip snozzberries"
};  // end Exer.stack1

/*******************************    STACK 2    ********************************/
// Jack already has three pancakes warming on his plate: `apple`, `banana`,
// and `bacon`.
// 1. Pop two pancakes.
// 2. Push one `breadfruit` pancake.
// 3. Log how many pancakes Jack has.
// 4. Push two pancakes: `strawberry` and `durian`.
// 5. Pop one pancake and then push it back on.
// 6. Log the flavor of the pancake on top of the stack.
// 7. Pancake number 2 from the bottom is pancake number _____ from the top. Log
//    your answer.
// 6. Return Jack.
//=================================//
Exer.stack2 = function ( jack ) {  //
//=================================//
jack.pop();//pushes one Pancake
jack.pop();//pushes another Pancake
jack.push('breadfruit');//adds breadfruit to the array/list
console.log(2);//logs the number of pancakes in the list
jack.push('strawberry','durian');//adds strawberry and durian to the array
jack.pop();// takes off the last item in the array/list
jack.push('durian');//adds durian back to the array/list
console.log(jack[jack.length-1]);//logs the last item in the array, which is 'durian'
//console.log('durian'); <----- use this one instead
console.log(3);//logs the length of the array
return jack;// returns the array

};  // end Exer.stack2

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^    Optional Arguments    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*******************************    Optional 1    *******************************/
// Create a function that takes two parameters and return it.
//=================================//
Exer.optional1 = function() {
  var optional = function (first, second) {//creates a function that has two Parameters. Change the name of the function and the parameters

  }

return optional;//returns the fuction
};

/*******************************    Optional 2    *******************************/
// Call the function value we pass back to you with 4 arguments.
//=================================//
Exer.optional2 = function(exercise) {
  exercise(1, "testing", true, "test");//calls the function with 4 Arguments. Change the Arguments to whatever you want
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Closures   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*******************************    Closures 1    *******************************/
// 1.) Create a new version of `spaceCubeDetector` that takes a length and a width. DONE
// 2.) Make `spaceCubeDetector` return another function. DONE
// 3.) The function spaceCubeDetector returns should take a height
// 4.) and return the string "SPACE CUBE DETECTED!!" when length, width, and
// height are the same and the string "THIS IS NO SPACE CUBE!" when they are not.
// 5.) Return the new spaceCubeDetector. DONE
//=================================//
Exer.closures1 = function(spaceCubeDetector) {
  var spaceCubeDetector = function (length, width) {//new version of SpaceCubeDetector that takes a length and a width
    return function(height) {//returns another function
      if (height == length && height == width) {// this function, which is the function that SpaceCubeDetector returns, takes a height and
        return "SPACE CUBE DETECTED!!";// returns the string "SPACE CUBE DETECTED!!" when length, width, and height are the same
      }
      else {
        return "THIS IS NO SPACE CUBE!";// returns the string "THIS IS NO SPACE CUBE!" when they do not
      }
    }
  }
return spaceCubeDetector;//returns SpaceCubeDetector to the user
};

/*******************************    Closures 2    *******************************/
// 1.) Make spaceCubeDetector into a function that takes a length.
// 2.) Make spaceCubeDetector into a function returns a function.
// 3.) Make spaceCubeDetector's returned function take a width
// 4.) Make spaceCubeDetector's returned function returns a function
// that takes a height and returns the normal results for spaceCubeDetector.
// 5.) Return the new spaceCubeDetector.
//=================================//
Exer.closures2 = function(spaceCubeDetector) {
function spaceCubeDetector(length) {//creates SpaceCubeDetector with length as the parameter
   return function (width) {//returns a function with width as the parameter
     return function (height) {//returns a function with height as the parameter
       if (height == length && height == width) {// this function, which is the function that SpaceCubeDetector returns, takes a height and
         return "SPACE CUBE DETECTED!!";// returns the string "SPACE CUBE DETECTED!!" when length, width, and height are the same
       }
       else {
         return "THIS IS NO SPACE CUBE!";// returns the string "THIS IS NO SPACE CUBE!" when they do not
       }
     }
   }
 }
 return spaceCubeDetector;//returns spaceCubeDetector to the user
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Recursion    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*******************************    Recursion 1    *******************************/
//
//=================================//
Exer.recursion1 = function(code, controller) {// NOTE: code is an array/list and controller is function
  var contraWinningAI = function(code, controller) {// creates a function that accepts 'code' and 'controller'
    controller(code.curr());
    if (code.next()) {//If there is
      contraWinningAI(code, controller);//Recursion; the function calls itself and repeats until there is nothing next in the 'code' array
    }//once there is nothing in the array, the recursion stops
  };
  contraWinningAI(code, controller);//calls the function
};

/*******************************    Recursion 2   *******************************/
// 1.) We'll use a recursive function that calls `puzzleBox.click` and stores its
// returned function value.
// 2.) If `puzzleBox.click` returns `undefined` instead of a function value the
// function will just end.
// 3.) Otherwise, call the recursive function again with `puzzleBox` as a
// parameter then call `puzzleBox.click`'s returned function value.
//=================================//
Exer.recursion2 = function(puzzleBox) {
 var clicking = function (puzzleBox) {//recursive function that clicks the puzzleBox
   var clickingResult = puzzleBox.click();//catches the amount of clicks
   if (clickingResult) {// if you can click it more,
     clicking(puzzleBox);//click the puzzleBox one more time
     clickingResult();//return the amount of clicks you have done
   }//if you can't click any more, it'll stop
 }
 clicking(puzzleBox);//calls the function
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^^^^^^    Growing Functions    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/


/*******************************    Growing 1   *******************************/
// Reduce the following code by placing repetitive code into a reusable function.
//=================================//

Exer.growing1 = function (pigPenSide, chickenPenSide, sheepPenSide) {
  var animals = ["pigs", "chickens", "sheep"];
  var penSizes = [pigPenSide*pigPenSide, chickenPenSide*chickenPenSide, sheepPenSide*sheepPenSide];
  for (var i = 0; i < 3; i++) {
    console.log("The "+ animals[i]+ " need " + penSizes[i] + "sq. ft.");
  }
};

/*******************************************************************************
^^^^^^^^^^^^^^^^^^^^^^^    Functions and Side Effects    ^^^^^^^^^^^^^^^^^^^^^^^
*******************************************************************************/

/*******************************    Side Effects   *******************************/
// Given the following code example follow the instructions for side effects 1 & 2.
//=================================//

Exer.sideEffectExample = function() {
  var myBark = 'arf!';

  getBarkNoise = function () {
    return myBark();
  };

  setBarkNoise = function (bark) {
    ;myBark = bark;
  }

  bark = function (bark, times) {
    var min = 0;
    var max = times;

    for (var index = min; index < max; index++)
      console.log(bark);
  };

  pairsOfLegsToTotalLegs = function (pairs) {
    return pairs * 2;
  };

  hasTail = function () {
    return true;
  };

};


/*******************************    Side Effects 1  *******************************/
// Make a call to each function in the code example that is a pure function.
//=================================//

Exer.sideEffect1 = function() {//Pure functions never change anything, they just output stuff. They have no side effects
  pairsOfLegsToTotalLegs(2);//This is pure since it only returns the argument times 2
  hasTail();//Always returns 'true'
};

/*******************************    Side Effects 2  *******************************/
// Make a call to each function in the code example that is not a pure function.
//=================================//

Exer.sideEffect2 = function() {//Non-pure functions have side effects that are changed by arguments
  setBarkNoise('woof');//the function's argument changes what myBark is
  getBarkNoise();//Get's bark, which can change, therefore, it is not consistent and pure
  bark('bark', 5);
};