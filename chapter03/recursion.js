Exer.isEven = function (x) {
  if (x == 0) {
    return true;
  }
  else if (x == 1) {
    return false;
  }
  else if (x < 0) {
    return Exer.isEven(-x);
  }
  else {
    return Exer.isEven(x - 2);
  }
};

Exer.isFooDivByBar = function (foo, bar) {
  if (foo == 0) {// if foo is divisible by bar
    return true;// the function will return true
  }
  else if (foo < 0) {
    return false;
  }
  else {
    return Exer.isFooDivByBar((foo - bar), bar);//recursion part of the function
  }
};

Exer.isDivisibleBy = function (a) {
  var division = function (b){
    if (b == 0) {
      return true;
    }
    else if (b < 0) {
      return false;
    }
    else {
      return division(b-a);
    }
  }
  return division;

}
