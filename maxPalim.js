const maxPalinSubsequence = (str) => {
    if (str.length === 0) return 0;
    if (str.length === 1) return 1;

    for(i=0; i<str.length;i++) {

        const remainingString = str.slice(0,i) + str.slice(i+1,str.length)
        console.log(remainingString)
       //    output = Math.max(output,maxPalinSubsequence(remainingString))

       }



    if (checkPalin(str)===true) return str.length;

    let output = - Infinity

    // for(i=0; i<str.lenght;ni++) {

    //  const remainingString = str.slice(0,i) + str(i,str.length-1)
    //    console.log(remainingString)
    // //    output = Math.max(output,maxPalinSubsequence(remainingString))

    // }

    //  return output

  };

  const checkPalin = (str) => {
    let startPointer = 0;
    let endPointer = str.length - 1;

    while (startPointer <= endPointer) { // Corrected loop condition
      if (str[startPointer] !== str[endPointer]) return false;
      startPointer++;
      endPointer--;
      console.log(startPointer,endPointer)
    }

    return true;
  };


  console.log(maxPalinSubsequence("loltdsfsf")); //
