function testing() {
	var n = 8; //this is both the width and height of the chessboard

	var cb = ""; //"cb" is short for chessboard. This is going to be used to print out the pattern

	for(var x = 0; x < cb; x++){ // for every row, in this 
		for (var y = 0; y < cb; y++){ // for every index (column)
			if ((x + y) % 2 == 0){
				cb += " ";
			}
			else {
				cb += "#";
			}
		}
	}
};