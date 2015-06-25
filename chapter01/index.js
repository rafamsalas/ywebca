// Chapter 1 Exercises

/*-----------------------------    NUMBERS    ------------------------------*/

// Numbers 1
// Make the function return a value that is a number.
Exercises.numbers1 = function() {

  return 5;

};

// Numbers 2
// Make the function return a value that is a negative number.
Exercises.numbers2 = function() {

  return -5;

};

// Numbers 3
// Make the function return a value that is between 4 and 5.
Exercises.numbers3 = function() {

  return 4.5;

};

// Numbers 4
// Make the function return a value that is between 10e4 and 10e5.
Exercises.numbers4 = function() {

  return 10.5e4;

};

/*---------------------------    ARITHMETIC    -----------------------------*/

// Arithmetic 1
// Make the function return an expression that evaluates to 10.
Exercises.arithmetic1 = function() {

  return 5+5 ;

};

// Arithmetic 2
// Fix the operators so the expression evaluates to 7.
Exercises.arithmetic2 = function() {

  return 2 * 3 + 5 - 4;
  
};

// Arithmetic 3
// Add parentheses to the expression so that it evaluates to -4.
Exercises.arithmetic3 = function() {

  return -1 * (6 * 1 - 4 / 1) * 2;
  
};

// Arithmetic 4
// Fix the values so the expression evaluates to 3.
Exercises.arithmetic4 = function() {

  return 14 % 11 ;
  
};

// Arithmetic 5
Exercises.arithmetic5 = function() {

  // Evaluate this expression on paper:
  // ( 3 + -( 2 - 14 ) + 11 % 7 + 8 ) / 2

  // Return that value here:
  return 13.5;
  
};

/*-------------------------    SPECIAL NUMBERS    --------------------------*/

// Special Numbers 1
Exercises.special1 = function () {

  // Use the console to subtract a number from Infinity.

  // Return the result here:
  return Infinity;

};

// Special Numbers 2
Exercises.special2 = function () {

  // Use the console to divide a number by zero.

  // Return the result here:
  return Infinity;

};

// Special Numbers 3
Exercises.special3 = function () {

  // Use the console to subtract Infinity from Infinity.

  // Return the result here:
  return NaN;

};

// Special Numbers 4
Exercises.special4 = function () {

  // Use the console to divide a number by Infinity.

  // Return the result here:
  return 0;

};

/*-----------------------------    STRINGS    ------------------------------*/

// Strings 1
// Return a string enclosed in double quotes.
Exercises.strings1 = function () {

  return "a string" ;

};

// Strings 2
// Return a string enclosed in single quotes.
Exercises.strings2 = function () {

  return 'a string' ;

};

// Strings 3
// Return multi-line string (a string that includes a new line character).
Exercises.strings3 = function () {

  return "What\nIs\nLove?" ;

};

// Strings 4
// Return the string
//     'If a string is in single quotes, like this,
//     you can nest "double quotes".
//     But don\'t forget to escape your \backslashes\
//     so you can type "\n"!'
// (including the enclosing single quotes).
Exercises.strings4 = function () {

  var answer;

  // Uncomment the following line and type your answer:
  answer = "'If a string is in single quotes, like this,\nyou can nest \"double quotes\".\nBut don\\\'t forget to escape your \\backslashes\\\nso you can type \"\\n\"!'";
  //answer = 'If a string is in single quotes, like this,\nyou can nest "double quotes".\nBut don\'t forget to escape your \\backslashes\\\nso you can type "\n"!'
  // Then check the console in spec.html to debug.
  
  console.log( "Strings 4:\n" + answer );
  return answer;

};

// Strings 5
// Use concatenation to return the string
// "supercalifragilisticexpialidocious".
Exercises.strings5 = function () {

  return "super" + "cali" + "frag" + "ilistic" + "exp" + "iali" + "docious" ;

};

/*-------------------------    UNARY OPERATORS    --------------------------*/

// Unary 1
// Use the typeof operator to return the type of "Hello, world!"
Exercises.unary1 = function () {

  return typeof "Hello, World!" ;

};

// Unary 2
// Use the typeof operator to return the type of NaN.
Exercises.unary2 = function () {

  return typeof NaN;

};

// Unary 3
// Use the unary minus operator to return a negative number.
Exercises.unary3 = function () {

  return -4 ;

};

/*-----------------------------    BOOLEANS    -----------------------------*/

// Boolean 1
// Return true.
Exercises.boolean1 = function () {

  return true ;

};

// Boolean 2
// Return false.
Exercises.boolean2 = function () {


  return false;

};

/*---------------------------    COMPARISONS    ----------------------------*/

// Comparisons 1
// Correct the comparison operators to return true.
Exercises.compare1 = function () {

  return -16 < 8 ;

};

// Comparisons 2
Exercises.compare2 = function () {

  // Add one character to correct the operator such that the expression
  // returns true.
  return 2 < 21;
  
};

// Comparisons 3
// Correct the comparison operators to return true.
Exercises.compare3 = function () {

  return "&" != "ampersand" ;
  
};

// Comparisons 4
// Correct the comparison operators to return false.
Exercises.compare4 = function () {

  return true != true ;
  
};

// Comparisons 5
// Correct the comparison operators to return false.
Exercises.compare5 = function () {

  return NaN == NaN ;
  
};

// Comparisons 6
// Correct the comparison operators to return false.
Exercises.compare6 = function () {

  return "cake" == "lie" ;
  
};

/*--------------------------    LOGICAL OPERATORS    -----------------------*/

// Logical 1
// Use NOT (!) to return false.
Exercises.logic1 = function () {

  return !true;

};

// Logical 2
// Use NOT (!) to return true.
Exercises.logic2 = function () {

  return !false;

};

// Logical 3
// Return the result of ( true AND false ).
Exercises.logic3 = function () {

  return true && false;

};

// Logical 4
// Return the result of ( true OR false ).
Exercises.logic4 = function () {

  return true || false;

};

// Logical 5
Exercises.logic5 = function () {

// Evaluate the expression:
// 1 + 1 == 2 && 10 * 10 > 50

  // Return the result:
  return true;

};

// Logical 6
// Use the ternary (conditional) operator to
// return -4 if input is true and
// return 7 if input is false.
Exercises.logic6 = function ( input ) {

  // Remove the comments and type your answer:
  return input ? -4 : 7;

};

/*-------------------------    UNDEFINED VALUES    -------------------------*/

// Undefined 1
Exercises.undef1 = function () {

  // Fix the statements so that undefined is returned.
  return undefined;

};

// Undefined 2
// Return the value null.
Exercises.undef2 = function () {

  return null;

};

/*--------------------    AUTOMATIC TYPE CONVERSION    ---------------------*/

// Coercion 1
// Use null in an arithmetic operation that evaluates to 0.
Exercises.coercion1 = function () {

  return null + null;

};

// Coercion 2
// Use arithmetic operators and the strings "-1", "2", and "3" in an
// expression that evaluates to -5.
Exercises.coercion2 = function () {

  return - "2" *"3" - "-1";
  
};

// Coercion 3
// Use arithmetic operators and the strings "-1", "2", and "3" in an
// expression that evaluates to "-32".
Exercises.coercion3 = function () {

  return "-1"*"3"+"2";
  
};

// Coercion 4
// Compare the string "hey!" and null with the not-equal-to operator (!=) in an
// expression that evaluates to true.
Exercises.coercion4 = function () {

  return "hey!" != null;
  
};

// Coercion 5
// Compare null and 0 with the equal-to operator (==) in an expression that
// evaluates to false.
Exercises.coercion5 = function () {

  return null == 0;
  
};

// Coercion 6
// Compare true and "true" in an expression that evaluates to false.
Exercises.coercion6 = function () {

  return true == "true";
  
};

// Coercion 7
// Use 0, "0", "", false, undefined, null, NaN in an expression that evaluates
// to true.
Exercises.coercion7 = function () {

  return null == undefined || NaN || "0" || 0 || false;
  
};

// Coercion 8
// Fix the operator to make the expression return false.
Exercises.coercion8 = function () {

  return "" != false;
  
};

/*-------------------------    SHORT-CIRCUTING    --------------------------*/

// Circuit 1
// Short-circut the expression so the bad function does not get called.
Exercises.circuit1 = function () {
  return true && true && true || badFunction();
};

// Circuit 2
// Short-circut the expression so the bad function does not get called.
Exercises.circuit2 = function () {
  return false || false || false && badFunction();
};
