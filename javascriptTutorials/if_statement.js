"use script"

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }


// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );


// let companyName = prompt('What is the official name of JavaScript?', '');

// if (companyName == 'ECMAScript') {
//   alert('Right!');
// } else {
//   alert("You don't know? 'ECMAScript!'");
// }


// let number = prompt('Provide any number', '');

// if (number > 0){
//     alert("1")
// } else if (number < 0){
//     alert("-1")
// } else {
//     alert("0")
// }


// let result;

//  (a + b < 4) ? 
//   result = 'Below':

//   result = 'Over';



  // Create a calculator
  // importance: 5
  // Create an object calculator with three methods:
  
  // read() prompts for two values and saves them as object properties with names a and b respectively.
  // sum() returns the sum of saved values.
  // mul() multiplies saved values and returns the result.


  // let calculator = {


  //   read: function(){
  //      this.value1 = Number(prompt("Enter first values"));
  //      this.value2 = Number(prompt("Enter second value")); 
       
  //      return value1, value2;

  //   },

  //   sum: function(){
  //     let total = this.a + this.b;
  //     return total;
  //   },

    
  //   multiply: function(){
  //     let value = this.a * this.b;
  //     return value;
  //   }
  // }


  // calculator.read();
  // alert( calculator.sum() );
  // alert( calculator.multiply() );


  function findLongestWordLength(str) {

    let splitStr = str.split(" ");
  
    let longestWord = 0;
  
      for(let i = 0; i < splitStr.length; i++){
        if(splitStr[i].length > longestWord){
          longestWord = splitStr[i].length;
        }
      }
  
      
  
    return longestWord;
   }
  
    alert( findLongestWordLength("The quick brown fox jumped over the lazy dog") );



    
