// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
    // todo
    let obj ={}
    for(let char of s){
        if(char in obj){
            obj[char]+=1
        }else{
            obj[char]=0
        }
    }

    let max = 0
    let char1 =""

    for(let char of s){
        if(obj[char]>max){
            char1 = char
            max= obj[char]
        }
    }

    console.log(char1)
  };


// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('david'); // -> 'd'
// mostFrequentChar('abby'); // -> 'b'
// mostFrequentChar('mississippi'); // -> 'i'
// mostFrequentChar('potato'); // -> 'o'
// mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'
