Exer.min = function (first, second, third) {
  if (third == undefined) {
    if (first > second) {
      return second;
    }
    else {
      return first;
    }
  }
else {
  if (first < second && first < third){
    return first;
  }
  else if (second < first && second < third) {
    return second;
  }
  else {
    return third;
  }
}
};

Exer.min3 = function (first, second, third) {
  if (first < second && first < third){
    return first;
  }
  else if (second < first && second < third) {
    return second;
  }
  else {
    return third;
  }
};
