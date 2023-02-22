class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.start = null
        this.end = null
    }

    insert(value){
        let node = new Node(value)
        if(this.end) this.end.next = node
        else this.start = node
        this.end = node
    }

    remove(){
        let aux = new Node()
        if(!this.start)return -1
        aux = this.start
        let value = this.start.value
        this.start = this.start.next
        if(!this.start)this.end = null
        return value
    }

    print(){
        let iterator = new Node()
        iterator = this.start
        while(iterator){
            process.stdout.write(`${iterator.value} `)
            iterator = iterator.next
        }
    }

}

let queue = new Queue()

queue.insert(1)
queue.insert(2)
queue.insert(3)
queue.insert(4)
queue.insert(5)

queue.remove()

queue.insert(10)

queue.print()