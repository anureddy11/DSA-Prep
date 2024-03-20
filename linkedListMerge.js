let curr1 = head1
let curr2 = head2

let dummyHead = { next: null }; // Dummy node to facilitate merging
let tail = dummyHead;

while(curr1!==null && curr2!==null){
   if(curr1.val<curr2.val){
      tail.next = curr1
      curr1 = curr1.next
  }else{
      tail.next = curr2
      curr2 =curr2.next
  }

  tail=tail.next
}

if(curr1!==null){
  tail.next=curr1
}
if(curr2!==null){
  tail.next = curr2
}

return dummyHead.next
