/* *** 
 Variables and constants 
*** */
let x = 4; //variable
const pi = 3.14; //constant

x = 5;
// pi = 4; this assignment generate an error
console.log(x);
console.log(pi);
console.clear(); // remove this to see previous output

/* ***
Aritmetic operators 
*** */
let a = 3;
let b = 2;
console.log("a =", a);
console.log("b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); //the rest of the division

/* *** 
Comparition operators
*** */
a = 4;
b = 1;
console.log(a == b);
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

console.clear();
/* *** 
Logical operators
*** */

// Operator OR
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log(false || false || true);

console.clear();

// Operator AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true && true && false);

console.clear();

// Operator NOT
console.log(!true);
console.log(!false);

console.clear();

console.log(true || false && true);
console.log(!false && true);
console.log(!false || false);
console.log(!true || !true);
console.log(true &&(!false));

