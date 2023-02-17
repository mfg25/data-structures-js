class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    buildTree(array, start, end){
        if(start > end) return null
        else{
            let mid = Math.floor((start + end)/2)
            let node = new Node(array[mid])
            node.left = this.buildTree(array, start, mid-1)
            node.right = this.buildTree(array, mid+1, end)
            return node
        }
    }

    insert(root, value){
        if(!root)return null
        else{
            if(value < root.value) this.insert(root.left, value)
            else this.insert(root.right, value)
            let node = new Node(value)
            node.value = value
            if(!root.left && value < root.value){
                let node = new Node(value)
                node.value = value
                root.left = node
                return
            }
            if(!root.right && value > root.value){
                let node = new Node(value)
                node.value = value
                root.right = node
                return
            }
            return
        }
    }

    findMin(root){
        while(root.left){
            root = root.left
        }
        return root.value
    }

    remove(currentNode, value){
        if(!currentNode) return currentNode
        if(value < currentNode.value) currentNode.left = this.remove(currentNode.left, value)
        else if(value > currentNode.value) currentNode.right = this.remove(currentNode.right, value)
        else{
            if(!currentNode.left && !currentNode.right){
                return null
            }
            else if(currentNode.left && !currentNode.right){
                return currentNode.left
            }
            else if(!currentNode.left && currentNode.right){
                return currentNode.right
            }else{
                currentNode.value = this.findMin(currentNode.right)
                currentNode.right = this.remove(currentNode.right, currentNode.value)
            }
        }
        return currentNode
    }
    find(value, root){
        if(!root) return null
        if(value < root.value) return this.find(value, root.left)
        else if(value > root.value) return this.find(value, root.right)
        else{
            return root
        }
    }

    
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 30);
}
  

let tree = new Tree()
let root = tree.buildTree([1,2,3,4,5,6,7,8,9,10], 0, 9)

tree.remove(root, 8)

console.log(tree.find(10, root))
prettyPrint(root)

