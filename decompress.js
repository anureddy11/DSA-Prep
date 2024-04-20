const decompressBraces = (s) => {
    // tod

    let stack = []

    for (let char of s) {

      if(char=== '{'){

        continue

      }else if(char!=='}'){

        stack.push(char)

      }else{
        let segement=''

        while(isNaN(stack[stack.length-1])){
          segement =stack.pop()+segement
        }

      //now pop the number
      let multiplier = stack.pop()
      let repeatSegment = segement.repeat(multiplier)
      stack.push(repeatSegment)
    }

  }

  console.log(stack.join(''))

};

decompressBraces("2{q}3{tu}v");
decompressBraces("2{3{r4{e}r}io}")
