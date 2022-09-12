function square (x, y, link, upOneRightTwo, downOneLeftTwo, upTwoRightOne, downTwoLeftOne, upOneLeftTwo, downOneRightTwo, upTwoLeftOne, downTwoRightOne) {
    this.x = x;
    this.y = y;
    this.link = link; 

    this.upOneRightTwo = upOneRightTwo;
    this.downOneLeftTwo = downOneLeftTwo;
    this.upTwoRightOne = upTwoRightOne;
    this.downTwoLeftOne = downTwoLeftOne;
    this.upOneLeftTwo = upOneLeftTwo;
    this.downOneRightTwo = downOneRightTwo;
    this.upTwoLeftOne = upTwoLeftOne;
    this.downTwoRightOne = downTwoRightOne; 

}

function node (data, x, y, left = null, right = null, link) {
    this.data = data;
    this.x = x;
    this.y = y;
    this.left = left;
    this.right = right; 
    this.link = link;
    


}
const board = [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7],[7,8], [8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8]];
allSquares = [];

class tree { 
    constructor () {
        this.root = null
    }

    mkTree (array) {
    if(0 > array.length - 1) {
        return null
    }

    let mid = Math.floor(array.length /2);
    let newNode = new node(array[mid], array[mid][0], array[mid][1]);
    
    if (this.root === null){ 
    this.root = newNode;}

    let left = array.slice(0, mid);
    let right = array.slice(mid +1, );

    
    
    newNode.left = this.mkTree(left)
    newNode.right = this.mkTree(right)

    return newNode
}

mkBoard (pointer = this.root, a = null, b = null) {
    if (pointer === null){
        return;
    }
    
    const newSquare = new square(pointer.data[0], pointer.data[1], pointer)
  
    {pointer.link = newSquare}
    
  
   
    this.mkBoard(pointer.right);
    this.mkBoard(pointer.left);

    newSquare.upOneRightTwo = this.linkElements(this.root, newSquare.x + 1, newSquare.y + 2)
    newSquare.downOneLeftTwo = this.linkElements(this.root, newSquare.x - 1, newSquare.y - 2)
    newSquare.upTwoRightOne = this.linkElements(this.root, newSquare.x + 2, newSquare.y + 1)
    newSquare.downTwoLeftOne = this.linkElements(this.root, newSquare.x - 2, newSquare.y - 1)
    newSquare.upOneLeftTwo = this.linkElements(this.root, newSquare.x + 1, newSquare.y - 2)
    newSquare.downOneRightTwo = this.linkElements(this.root, newSquare.x - 1, newSquare.y + 2)
    newSquare.upTwoLeftOne = this.linkElements(this.root, newSquare.x + 2, newSquare.y - 1)
    newSquare.downTwoRightOne = this.linkElements(this.root, newSquare.x - 2, newSquare.y + 1)
}
    
linkElements(pointer, a, b) {
   
  
    
    try {while(pointer !== null  && pointer.x !== a, pointer.y !== b) {
     
           
            if (a > 8 ||a < 1 || b > 8 || b < 1){
             pointer = null
             break
            }
 
             
             if(a === pointer.x) {
                 if(b === pointer.y)
                 break
                 else if(b > pointer.y) {
                 pointer = pointer.right;
                
                     continue}
                 pointer = pointer.left
                 
                 continue
             }
         
             else if (a > pointer.x) {
             pointer = pointer.right;
           
             continue
             }
     
             pointer = pointer.left
             
                 continue
             
             
         } } catch{console.log('broke')}
                
         return pointer !== null ? pointer.link : null
}

 movDistance (start, end, pointer = this.root.link) {

    try{if (pointer.x === start[0] && pointer.y === start[1]){
        console.log('runs searc ')
 }catch{console.log('fails')}
}
}

  



const myTree = new tree();
const builtTree = myTree.mkTree(board)

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
 prettyPrint(myTree.root)
  
  const myBoard = myTree.mkBoard();
  myTree.movDistance([5,1], [1, 1])