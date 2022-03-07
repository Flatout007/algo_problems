class Node {
    constructor(val) {  
        this.next = null;
        this.val = val;
    }
}


/**
 * Linked List:

Unlike an Array, the Linked list does not follow a contigous block of memory , 

instead, its a data struture in which each node has a special pointer(s) that "point" to another;

This allows for splitting up nodes while still mantaining its relationship with other nodes
 */

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    pushToList(val) {
       let node = new Node(val);

       if(!this.head) {
           this.head = node;
           this.tail = node;
           this.size++;
           return this;
       }

       this.tail.next = node;
       this.tail = this.tail.next;
       this.size++;

       return this
    }

    popFromList() {
        if(!this.head) return;
        if(this.size === 1) {let temp = this.head; this.size--; return temp;}
        let secondToLastNode = List.FindSecondToLastNode(this);
        let temp = secondToLastNode.next;

        secondToLastNode.next = null;
        this.tail = secondToLastNode;
        this.size--;
           
        if(this.size === 0) {
            this.head = null;
            this.tail = null;
        }   

        return temp;
    }

    shiftFromList() {
      if(!this.head) return
      let secondNode = this.head.next;
      let formerHead = this.head;

      this.head = secondNode;
      this.size--;
      if(this.size === 0) {this.head = null; this.tail = null;}

      return formerHead;
    }

    unshiftToList(val) { 
       let node = new Node(val);
       if(!this.head) {this.head = node; this.size++; return this}

       node.next = this.head;
       this.head = node;
       this.size++;

       return this;
    }

    getNodeFromList(num) {
        if(!this.head) return;
        if(num <= -1) return;
        if(num > this.size) return;
        let count = 0;
        let tempNode = this.head;

        while(tempNode) {
            if(count === num) return tempNode;
            count += 1;
           
         tempNode = tempNode.next;   
        }
    }

    setNodeFromList(pos, val) {
       if(!this.getNodeFromList(pos)) return false;
       this.getNodeFromList(pos).val = val;

       return true;
    }

    insertNodeToList(pos, val) {
        let node = new Node(val);
        if(!pos) return;
        if(!this.head) {this.head = node; this.size++; return this}
        if(pos === 0)  {this.unshiftToList(node); this.size++; return this};
        if(pos === this.size) {this.pushToList(node); this.size++; return this};

        let prevNode = this.getNodeFromList(pos - 1);
        node.next = prevNode.next;
        prevNode.next = node;
        this.size++;

        return this;
    }

    removeNodeFromList(pos) {
        if(!this.head) return;
        if(this.size === 1) {return this.shiftFromList()}
        if(pos === this.size) return this.popFromList();
        if(pos === 0) return this.shiftFromList();
        let prevNode = this.getNodeFromList(pos - 1);
        let markForDeletion = prevNode.next;

        prevNode.next = null;
        prevNode.next = markForDeletion.next;
        this.size--;

        return markForDeletion;
    }

    reverseNodesFromList() {
        if(!this.head) return;
        if(this.size === 1) return this.head;
        let count = 0;
        let curr = this.head;  
        this.head = this.tail;
        this.tail = curr;
        let prev = null;
        
        while(curr) {
         let tempNode = curr.next; 
         curr.next = prev;
         prev = curr; 
         
        curr = tempNode;
        }
        
        return this;
    }

    static FindSecondToLastNode(list) {
       let secondToLastNode = list.head;
       let count = 0;

       while(secondToLastNode.next) {
           count += 1;
           if(count === list.size - 1) return secondToLastNode;

        secondToLastNode = secondToLastNode.next;
        }
    }
}

let list = new List();

list.pushToList('AKM');              
list.pushToList('M1 Carbine');            
list.pushToList('M1 Garand');            
list.pushToList('Beretta M9')

 // list.pushToList('AKM');       ->       list.pushToList('M1 Carbine');     ->       list.pushToList('M1 Garand');      ->       list.pushToList('Beretta M9')


       
