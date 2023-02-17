class LinkedList{
    constructor(){
        this.head = null
    }

    printList(){
        let iterator = this.head
        while(iterator){
            console.log(iterator.value)
            iterator = iterator.next
        }
    }

    size(){
        let iterator = new Node()
        iterator = this.head
        let size = 0
        while(iterator){
            iterator = iterator.next
            size++
        }
        return size
    }

    append(value){
        const node = new Node()
        node.value = value
        node.next = null
        if(this.size() == 0){
            this.head = node
        }else{
            let iterator = new Node()
            iterator = this.head
            while(iterator.next){
                iterator = iterator.next
            }
            iterator.next = node
    }
    }

    prepend(value){
        const node = new Node()
        node.value = value
        node.next = this.head
        this.head = node
    }

    tail(){
        let iterator = new Node()
        iterator = this.head
        while(iterator.next){
            iterator = iterator.next
        }
        return iterator
    }

    at(index){
        if(index == 0) return this.head
        else{
            let iterator = new Node()
            iterator = this.head
            while(iterator.next){
                iterator = iterator.next
            }
            return iterator
        }
    }

    pop(){
        if(this.size() == 0)return
        if(this.size() == 1)this.head = null
        else{
        let iterator = new Node()
        iterator = this.head
        while(iterator.next.next){
            iterator = iterator.next
        }
        iterator.next = null
    }
    }

    contains(value){    
        if(this.size() == 0) return false    
        let iterator = new Node()
        iterator = this.head
        if(iterator.value == value) return true
        while(iterator){
            if(iterator.value == value)return true
            else iterator = iterator.next
        }
        return false
    }

    find(value){
        if(this.size() == 0) return null
        if(this.head.value == value) return 0
        let iterator = new Node()
        iterator = this.head
        let index = 1
        while(iterator){
            if(iterator.value == value)return index
            else iterator = iterator.next
        }
        return null
    }
   
    toString(){
        if(this.size() == 0) console.log(`Empty list`)
        else{
            let iterator = new Node()
            iterator = this.head
            while(iterator){
                process.stdout.write(`(${iterator.value}) -> `)
                iterator = iterator.next
            }
            console.log(`null`)
        }
    }

    insertAt(value, index){
        if(index > this.size() || index < 0) return 'invalid index'
        let node = new Node()
        node.value = value
        if(index == 0){
            if(this.size() == 0) node.next = null
            else{ 
                node.next = this.head
            }
            this.head = node
        }else{
            let iterator = new Node()
            iterator = this.head
            let prev;
            let i = 0
            while(index != i){
                prev = iterator
                iterator = iterator.next
                i++
            }
            prev.next = node
            node.next = iterator
        }

    }
    removeAt(index){
        if(index < 0) return null
        if(index == 0) this.head = this.head.next
        else{
            let iterator = new Node()
            iterator = this.head
            let prev;
            let i = 0
        while(index != i){
            prev = iterator
            iterator = iterator.next
            i++
        }
        prev.next = iterator.next
        iterator = null
    }
}
}

class Node{
    constructor(){
        this.value = null
        this.next = null
    }
}

