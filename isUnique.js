const isUnivalueList = (head) => {
    // todo
    let curr = head
    let val = head.val
    while(curr!==null){
      if (curr.val===val){
        curr=curr.next
      }else{
        return false
      }
    }
    return true
  };

  module.exports = {
    isUnivalueList,
  };
