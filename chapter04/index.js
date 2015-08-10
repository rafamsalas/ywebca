/*-----------------------------    DATA SETS    -----------------------------*/

/*****************************    Data Sets 1    *****************************/
var dataOne = function (arrayList) {
  console.log(arrayList[2]);
  console.log(arrayList[4]);
  console.log(arrayList[7]);
  console.log(arrayList[arrayList.length-1]);
};

/*****************************    Data Sets 2    *****************************/
var dataTwo = function(arrayList){
  for (var i = 0; i < arrayList.length; i++){
    console.log(arrayList[i]);
  }

};

/*-----------------------------    PROPERTIES    ----------------------------*/
var properties = function (first) {
  console.log(first.legs);
  console.log(first.isAGoodBoy);
};

/*-------------------------------    METHODS    -----------------------------*/
var methods = function (first) {
  first.bark();
  if (first.isAGoodBoy()) {
    'arf'.setBark();
  }
  else {
    'whimper'.setBark()
  }
  console.log(first.getBark());
  first.bark();
  call.isAGoodBoy(true);
};


/*-------------------------------    OBJECTS    -----------------------------*/
var objects = function() {
  var barkSound = 'BARK!';

  return fido;
};

/*----------------------------    MUTABILITY    -----------------------------*/
var mutability = function (first, second) {
  if( first == second) {
    console.log(first);
  }
  else {
    if (first.color == second.color) {
    console.log("Color matches");
    }
    if (first.quantity == second.quantity) {
      console.log("Quantity matches");
    }
    if (first.isA == second.isA) {
      console.log("isA matches");
    }
    if (first.color != second.color && first.quantity != second.quantity && first.isA != second.isA) {
      console.log(first, second);
    }
  }
};

/*--------------------------    OBJECTS AS MAPS    --------------------------*/
var maps = function () {

};


/*----------------------------    ARRAYOLOGY    -----------------------------*/
var arrayology = function (stringArray) {
  var returnedArray = stringArray;
  for (i = 0; i < stringArray.length; i++) {
    if(stringArray[i] == 'fnord'){
      
    }
  }
};


/*-------------------    STRINGS AND THEIR PROPERTIES    --------------------*/
var strings = function (string) {

};

/*------------------------   THE ARGUMENTS OBJECT    ------------------------*/
var arguments = function () {

};


/*--------------------------    THE MATH OBJECT    --------------------------*/
var math = function (stringNum) {
  if (typeof stringNum === 'string') {
    return Math.PI;
  }
  if (typeof stringNum === 'number') {
    return Math.random() * stringNum;
  }
};









/* !!DANGER ZONE!! */
/*  DO NOT CROSS!  */



































// Seriously, go back!





































// I told you there was a monster at the end of this book!

if (typeof Exer === 'undefined') Exer = {};

if (typeof dataOne !== 'undefined') Exer.dataOne = dataOne;
if (typeof dataTwo !== 'undefined') Exer.dataTwo = dataTwo;
if (typeof properties !== 'undefined') Exer.properties = properties;
if (typeof methods !== 'undefined') Exer.methods = methods;
if (typeof objects !== 'undefined') Exer.objects = objects;
if (typeof mutability !== 'undefined') Exer.mutability = mutability;
if (typeof maps !== 'undefined') Exer.maps = maps;
if (typeof arrayology !== 'undefined') Exer.arrayology = arrayology;
if (typeof strings !== 'undefined') Exer.strings = strings;
if (typeof arguments === 'function') Exer.arguments = arguments;
if (typeof math !== 'undefined') Exer.math = math;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
