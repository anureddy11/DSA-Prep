const nestingScore = (str) => {
    // todo

    let stack =[]
    let overAllCount = 0
    let count = 0
    let prevChar =''

    for (let char of str){


      if(char ==="[") {

        stack.push(char)
        prevChar = '['

      }

      //if closed bracket
     else{

        stack.pop()

        //if the closed brack was hit again multiply by 2
        if(prevChar==="]") count *=2
        else count+=1

        prevChar = char

    }
          // this to segement out complete sets
    if(stack.length===0){
        overAllCount += count
        count = 0
        prevChar = ''
      }

    }

    return overAllCount
  }
