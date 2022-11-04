let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}


let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );


let companyName = prompt('What is the official name of JavaScript?', '');

if (companyName == 'ECMAScript') {
  alert('Right!');
} else {
  alert("You don't know? 'ECMAScript!'");
}


let number = prompt('Provide any number', '');

if (number > 0){
    alert("1")
} else if (number < 0){
    alert("-1")
} else {
    alert("0")
}


let result;

 (a + b < 4) ? 
  result = 'Below':

  result = 'Over';


    
