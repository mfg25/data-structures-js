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

    inOrder(root){
        if(!root)return
        else{
            this.inOrder(root.left)
            process.stdout.write(`${root.value} `)
            this.inOrder(root.right)
        }
    }

    inOrderArray(arr, root){
        if(!root) return arr
        else{
            this.inOrderArray(arr, root.left)
            arr.push(root.value)
            this.inOrderArray(arr, root.right)
            return arr
        }
    }

    preOrder(root){
        if(!root)return
        else{
            process.stdout.write(`${root.value} `)
            this.inOrder(root.left)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(!root)return
        else{
            this.inOrder(root.left)
            this.inOrder(root.right)
            process.stdout.write(`${root.value} `)
        }
    }

    height(node){
        if(!node) return 0
        else{
            return 1 + Math.max(this.height(node.left), this.height(node.right))
        }
    }

    depth(root, node){
        if(!root || root == node) return 1
        else{
            return 1 + Math.min(this.depth(root.left, node), this.depth(root.right, node))
        }
    }

    isBalanced(root){
        if(!root)return true
        else{
            let diff = this.height(root.left) - this.height(root.right)
            if(Math.abs(diff) > 1) return false
            else return this.isBalanced(root.left) && this.isBalanced(root.right)
        }
    }

    rebalance(root){
        let array = []
        array = this.inOrderArray(array, root)
        let rootNode = this.buildTree(array, 0, array.length-1)
        return rootNode
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
let root = tree.buildTree([110,2,3,1,53,9,121,50,12,569], 0, 9)

tree.insert(root, 600)
tree.insert(root, 601)
tree.insert(root, 602)
let node = tree.find(10, root)
prettyPrint(root)
console.log(tree.isBalanced(root))
console.log()


let newRoot = tree.rebalance(root)
prettyPrint(newRoot)
console.log(tree.isBalanced(newRoot))
