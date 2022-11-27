'use strict';

//  Terms: “unary”, “binary”, “operand”

// Before we move on, let’s grasp some common terminology.

// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.



// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number: 

// let x = 1;
// x = -x;
// alert(x); //unary negation was applied


// An operator is binary if it has two operands. The same minus exists in binary form as well:

// let z = 1, y = 3;

// alert(y - z); // binary minus substracts values


// Maths
// The following math operations are supported:

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.
// The first four are straightforward, while % and ** need a few words about them.

// Remainder %
// The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the remainder of the integer division of a by b.

// For instance:


let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3





// What will be the result for these expressions?

// 5 > 4
// "apple" > "pineapple"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

//answers

// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false

// reasons

// Some of the reasons:

// Obviously, true.
// Dictionary comparison, hence false. "a" is smaller than "p".
// Again, dictionary comparison, first char "2" is greater than the first char "1".
// Values null and undefined equal each other only.
// Strict equality is strict. Different types from both sides lead to false.
// Similar to (4), null only equals undefined.
// Strict equality of different types.