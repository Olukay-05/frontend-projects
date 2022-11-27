// let i = 0;

// while (i <= 5) {
//     alert(i);
//     i++;
// }

// let k = 3;
// while (k) {
//     alert(k);
//     k--;
// }


// //do...while loop

// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 5);


let a = prompt  ("Input first number");

let b = prompt  ("Input second number");


if(a > b){
    alert("the first number is greater");   
} else{
    alert("the second number is greater");
}



// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

let x = 20;
let y = 30;
let z = 40;

if (x > 0 && y > 0 && z > 0) {
    alert("The sign is +");
}else if (x<0 && y<0 && z<0){
    alert("The sign is +");
}else if (x<0 && y>0 && z<0){
  console.log("The sign is +");
}else{
  console.log("The sign is -");
}