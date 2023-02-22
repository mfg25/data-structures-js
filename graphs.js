class Node{
    constructor(value){
        this.value = value
        this.edgesList = []
    }

    connect(node){
        this.edgesList.push(node)
    }

    getAdjacentNodes(){
        return this.edgesList
    }

    
}

class Graph{
    constructor(nodes){
        this.nodes = [...nodes]
    }

    addNode(node){
        this.nodes.push(node)
    }

    bfs(start, end){
        let prev = this.solve(start)

        return this.reconstructPath(start, end, prev)
    }

    reconstructPath(start, end, prev){
        let path = []
        for(let at = end; at != null; at = prev[at.value]){
            path.push(at.value)
        }
        path.reverse()

        if(path[0] == start.value){
            return path
        }
        return []
    }

    solve(start) {
        let visited = new Set()
        let queue = []
        let prev = {}
      
        visited.add(start)
        queue.push(start)
      
        while (queue.length > 0) {
          let node = queue.shift()
          for (let neighbor of node.getAdjacentNodes()) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor)
              queue.push(neighbor)
              prev[neighbor.value] = node
            }
          }
        }
        return prev
      }
}

const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')
const nodeE = new Node('E')

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE])

nodeA.connect(nodeB)
nodeB.connect(nodeA)
nodeB.connect(nodeC)
nodeB.connect(nodeE)
nodeC.connect(nodeB)
nodeE.connect(nodeB)
nodeE.connect(nodeD)
nodeD.connect(nodeE)

console.log(graph.bfs(nodeA, nodeD))



  

