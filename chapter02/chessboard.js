// Student Workspace
Chess.start = function ( n ) {
var gd = n || 8;
//the grid width and height, aka dimensions of the chessboard
var cb = "";
//short for "chessboard"
if (n == 0){
	return cb;
  }
else{
  for (var i = 0; i < gd; i++) {
    for (var j = 0; j < gd; j++) {
      if ((j + i) % 2 == 0){
        cb += " ";
       }
       else{
        cb += "#";
       }
    }
    cb += "\n";
    //needed to print to the next line
}
//console.log(cb);
return cb;
}
};