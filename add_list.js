class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

    const addLists = (head1, head2) => {
        // Initialize a new head and a carry variable
        let dummyHead = new Node(0);
        let outputPointer = dummyHead;
        let carry = 0;

        let pointerOne = head1;
        let pointerTwo = head2;

        // Traverse both linked lists
        while (pointerOne !== null || pointerTwo !== null) {
            // Get the values of the current nodes (or 0 if node is null)
            let val1 = pointerOne ? pointerOne.val : 0;
            let val2 = pointerTwo ? pointerTwo.val : 0;

            // Calculate the sum with carry
            let sum = val1 + val2 + carry;

            // Update carry for next calculation
            carry = Math.floor(sum / 10);

            // Update the value of the next node
            outputPointer.next = new Node(sum % 10);
            outputPointer = outputPointer.next;

            // Move pointers to next nodes
            if (pointerOne) pointerOne = pointerOne.next;
            if (pointerTwo) pointerTwo = pointerTwo.next;
        }

        // If carry is still remaining, add a new node with carry
        if (carry > 0) {
            outputPointer.next = new Node(carry);
        }
        let output =dummyHead.next
        while(output!==null){
            console.log(output.val)
            output = output.next
        }
        // Return the new head of the resulting linked list
        return dummyHead.next;
    }




//   999
//  +  6
//  ----
//  1005

const a1 = new Node(9);
const a2 = new Node(9);
const a3 = new Node(9);
a1.next = a2;
a2.next = a3;
// 9 -> 9 -> 9

const b1 = new Node(6);
// 6

addLists(a1, b1);
