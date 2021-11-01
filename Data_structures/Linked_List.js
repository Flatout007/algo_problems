class Node {
    constructor(val) {
        
        this.next = null;
        this.val = val;
    }
}

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
list.pushToList('AKM')
list.pushToList('M1 Carbine')
list.pushToList('M1 Garand')
list.pushToList('Beretta M9')


