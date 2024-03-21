const longestStreak = (head) => {
    // todo
    let max = 0
    let curr=head
    let var1=null
    let currMax=0

    while(curr!==null){
      if(curr.val===var1){
        currMax+=1
      }else{
        currMax=1
        var1=curr.val
      }
      max = Math.max(currMax, max)
      console.log(max)
      curr=curr.next
    }
    return max
  };
