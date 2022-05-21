var input = 'aloha';

const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    
    if(input[i] === 'e') {
        resultArray.push(input[i]);
    }
    if(input[i] === 'u') {
        resultArray.push(input[i]);
    } 
   //console.log(input.length);

for (let j = 0; j < vowels.length; j++) {
    
   
    //console.log(j);
  

  if(input[i] === vowels[j]) {

   // console.log(input[i]);
    
   resultArray.push(input[i]);

    //console.log(resultArray);   

  }
  
  

}

 
}

//console.log(resultArray);

const resultString = resultArray.join('').toUpperCase();

console.log(resultString);
