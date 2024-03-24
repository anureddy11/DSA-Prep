class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const createLinkedList = (values) => {
    // todo
    if(values.length===0){
      return null
    }


    let prev= new Node(null)
    let head = new Node(values[0])
    let curr=head
    prev.next = curr
    for(let i=1;i<values.length;i++){
      prev=curr
      curr = new Node(values[i])
      prev.next = curr
    }
    return head

  };
