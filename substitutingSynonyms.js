const substituteSynonyms = (sentence, synonyms) => {


    // todo

    if(sentence.length===0) return [""]

    // console.log(typeof(sentence))

    const { choices, remainder } = getChoices(sentence, synonyms);


    let output =[]

    for(let choice of choices) {

        for(let sub of substituteSynonyms(remainder,synonyms)){

        output.push(choice + " " + sub)

        }

    }

    return output


  };



  function getChoices (s,syn) {

    let words = s.split(" ")

    if(words[0] in syn){

        return {

          choices : syn[words[0]],
          remainder : words.slice(1).join(" ")

        }

    }else{

        return {

          choices: [words[0]],
          remainder:words.slice(1).join(" ")

      }


    }
  }


const sentence = "follow the yellow brick road";
const synonyms = {
  follow: ["chase", "pursue"],
  yellow: ["gold", "amber", "lemon"],
};

console.log(substituteSynonyms(sentence,synonyms))
