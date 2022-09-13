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
    let newSquare = new square(array[mid][0],array[mid][1])
    let newNode = new node(array[mid], array[mid][0], array[mid][1], '', '', newSquare);
   
    if (this.root === null){ 
    this.root = newNode;}

    let left = array.slice(0, mid);
    let right = array.slice(mid +1, );

    
    
    newNode.left = this.mkTree(left)
    newNode.right = this.mkTree(right)

    return newNode
}

mkBoard (pointer = this.root) {
    if (pointer === null){
        return;
    }
    
    let newSquare = pointer.link
    
    
   
    this.mkBoard(pointer.right);
    this.mkBoard(pointer.left);
    
    
    newSquare.upOneRightTwo = this.linkElements(this.root, newSquare.x + 1, newSquare.y + 2, newSquare)
    newSquare.upOneLeftTwo = this.linkElements(this.root, newSquare.x + 1, newSquare.y - 2, newSquare)
    newSquare.upTwoLeftOne = this.linkElements(this.root, newSquare.x + 2, newSquare.y - 1, newSquare)
    newSquare.upTwoRightOne = this.linkElements(this.root, newSquare.x + 2, newSquare.y + 1, newSquare)
    console.log(newSquare.x, newSquare.y)
    newSquare.downOneLeftTwo = this.linkElements(this.root, newSquare.x - 1, newSquare.y - 2, newSquare)
    newSquare.downTwoLeftOne = this.linkElements(this.root, newSquare.x - 2, newSquare.y - 1, newSquare)
    newSquare.downOneRightTwo = this.linkElements(this.root, newSquare.x - 1, newSquare.y + 2, newSquare)
    newSquare.downTwoRightOne = this.linkElements(this.root, newSquare.x - 2, newSquare.y + 1, newSquare)

   // console.log('board', newSquare)
   
}
    
linkElements(pointer, a, b, newSquare) {
   
  //  console.log('start', newSquare, a, b)
    
   while(pointer !== null) {
            //console.log('runs', a, b)

              
            if (a > 8 ||a < 1 || b > 8 || b < 1){
             pointer = null
             //console.log('broke')
             return null
            }
 
             
             if(a === pointer.x) {
                 if(b === pointer.y) {
                 //console.log('completes', pointer['link'])
                 return  pointer.link
                }
                 else if(b > pointer.y) {
                    //console.log('a equals but b greater')
                 pointer = pointer.right;
                     continue}
                else {
                 pointer = pointer.left
                 //console.log('a = but b is <')
                 continue}
             }
         
             else if (a > pointer.x) {
             pointer = pointer.right;
             //console.log('a >')
             continue
             }
             
             else {//console.log('a <')
             pointer = pointer.left
             
                 continue}
             
            }
          
      
}

findLinkFromTree (start, pointer = this.root) {
    if (pointer === null) {
        return
    };

    if (pointer.constructor.name === 'node') {
        console.log(pointer)
        if (pointer.x !== start[0] || pointer.y !== start[1]) {
        this.movDistance(start,pointer.left)
        this.movDistance(start, pointer.right)}
        else {
            console.log(pointer.link)
        }
    return    
    }
}

 movDistance (start, end, pointer = null, runCap = 0, touched = [], array = []) {
    
    if (pointer === null) {
        return -1
    }; 
       

    if (pointer.constructor.name === 'node') {
        if (pointer.x !== start[0] || pointer.y !== start[1]) {
        this.movDistance(start, end, pointer.left, runCap)
        this.movDistance(start, end, pointer.right, runCap)}
        else {
            this.movDistance(start, end, pointer.link)
            
            return
        }
    return    
    }
    
    runCap++
    touched.push([pointer.x, pointer.y])
    console.log(pointer)
   
    if (pointer.x === end[0]){
        if(pointer.y === end[1]) {
            return +1
        }
    }


    if (pointer.x < end[0]) {
        if (pointer.y < end[1]) {
        let move1 = this.movDistance(start, end, pointer.upOneRightTwo, runCap, touched);
        let move2 = this.movDistance(start, end, pointer.upTwoRightOne, runCap, touched);
            if (move1 > move2) {
                console.log('move1', move1)
                return move1 +1
            }
            else{
                console.log('move2', move2)
                return move2 +1
            }
        }
        else {
        let move3 = this.movDistance(start, end, pointer.upOneLeftTwo, runCap, touched);
        let move4 = this.movDistance(start, end, pointer.upTwoLeftOne, runCap, touched);
            if(move3 > move4) {
                return move3 +1
            }
            else{
                return move4 +1
            }
    }
    }

    else  {
        if (pointer.y < end[1]) {
        let move7 = this.movDistance(start, end, pointer.downOneRightTwo, runCap, touched);
        let move8 = this.movDistance(start, end, pointer.downTwoRightOne, runCap, touched);
            if(move7 > move8) {
                return move7 +1
            }
            else {
                return move8+1
            }
        }
        else {
        let move9 = this.movDistance(start, end, pointer.downOneLeftTwo, runCap, touched);
        let move10 = this.movDistance(start, end, pointer.downTwoLeftOne, runCap, touched);
            if(move9 > move10) {
                console.log('move9', move9)
                return move9 + 1
            }
            else {
                console.log('move10', move10)
                return move10 +1
            }
        }
    }   
       
}}




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
  
  myTree.mkBoard();
  console.log(myTree.root.right.right)
  //myTree.findLinkFromTree([8,5])
   console.log(myTree.movDistance([2, 3], [1, 1], myTree.root));