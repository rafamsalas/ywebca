Exer.countChar = function (checksString, letter){
  var count = 0;
  for (i = 0; i < checksString.length; i++){
    if (checksString.charAt(i) == letter){
      count++;
    }
  }
  return count;
};

Exer.countBs = function (bWord) {
  return Exer.countChar(bWord, "B");
};

Exer.countCharX = function (character){
  return function (string){
    return Exer.countChar(string, character);
  }
};
