function square (x, y, upOneRightTwo, downOneLeftTwo, upTwoRightOne, downTwoLeftOne, upOneLeftTwo, downOneRightTwo, upTwoLeftOne, downTwoRightOne) {
    this.x = x;
    this.y = y; 

    this.upOneRightTwo = upOneRightTwo;
    this.downOneLeftTwo = downOneLeftTwo;
    this.upTwoRightOne = upTwoRightOne;
    this.downTwoLeftOne = downTwoLeftOne;
    this.upOneLeftTwo = upOneLeftTwo;
    this.downOneRightTwo = downOneRightTwo;
    this.upTwoLeftOne = upTwoLeftOne;
    this.downTwoRightOne = downTwoRightOne; 

}
function root () {
    this.root = null
}


//const board = [1:1, 1:2, 1:3, 1:4, 1:5, 1:6, 1:7, 1:7, 1:8, 2:1, 2:2, 2:3, 2:4, 2:5, 2:6, 2:7, 2:8, 3:1, 3:2, 3:3, 3:4, 3:5, 3:6, 3:7, 3:8, 4:1, 4:2, 4:3, 4:4, 4:5, 4:6, 4:7, 4:8, 5:1, 5:2, 5:3, 5:4, 5:5, 5:6, 5:7, 5:8, 6:1, 6:2, 6:3, 6:4, 6:5, 6:6, 6:7, 6:8, 7:1, 7:2, 7:3, 7:4, 7:5, 7:6, 7:7, [7,8], [8,1], [8,2], [8,3], [8,4], [8,5], {8:6}, [8,7], [8,8]];

function mkSquares (x = 1, y = 1, newSquare) {
   if (x > 8 || x < 1 || y > 8 || y < 1)
   return null

   if (x == 1 && y == 1){
    newSquare = new square(x, y)
    console.log(newSquare)
    newSquare.upOneRightTwo = mkSquares(x + 1, y + 2, newSquare);
    newSquare.downOneLeftTwo = null;
    newSquare.upTwoRightOne = mkSquares(x + 2, y + 1, newSquare);
    newSquare.downTwoLeftOne = null;
    newSquare.upOneLeftTwo =  null
    newSquare.downOneRightTwo = null;
    newSquare.upTwoLeftOne = null
    newSquare.downTwoRightOne = null;
   return newSquare
   }

   
   newSquare = new square(x, y, mkSquares(x + 1, y + 2), newSquare, mkSquares(x + 2, y + 1), newSquare, mkSquares(x - 1, y + 2), newSquare, mkSquares(x - 2, y + 1))
   return newSquare
}

function traverse (pointer, start = [1,1], end = [8,8]) {
    if (pointer === null) {
        return -1
    }
    console.log(start[0], start[1])
    console.log(pointer.x, pointer.y)
    if (pointer.x !== start[0] || pointer.y !== start[1]){
        upOneRightTwo = traverse(pointer.upOneRightTwo, start, end);
    }
}

const myGraph = new root()
myGraph.root = mkSquares(1, 1);

traverse(myGraph.root)
