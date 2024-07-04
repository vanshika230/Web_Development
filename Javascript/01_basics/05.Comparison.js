console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true


console.log("2" > 1); //true
console.log("02" > 1); //true
console.log("2" > "12"); //true 
console.log("2" > 12); //false


console.log(null > 0); //false Comparisons convert null to a number, treating it as 0. That’s why null >= 0 is true and null > 0 is false.
console.log(null == 0); //false null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === 

console.log("2" === 2); //false it checks content as well as address
