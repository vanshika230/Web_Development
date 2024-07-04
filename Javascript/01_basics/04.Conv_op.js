let score="Vanshika"
console.log(typeof score)

let no=Number(score)
console.log(typeof no)// number
console.log(no) //NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn= Boolean("Vanshika")
console.log(typeof isLoggedIn)
console.log(isLoggedIn)//true

isLoggedIn= Boolean("")
console.log(isLoggedIn)//false

isLoggedIn= Boolean(1)
console.log(isLoggedIn)//true

isLoggedIn= Boolean(0)
console.log(isLoggedIn)//false

isLoggedIn= Boolean(-1)
console.log(isLoggedIn)//true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);//-3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " Vanshika"

let str3 = str1 + str2
console.log(str3);//12

console.log("1" + 2);//12 converted to string
console.log(1 + "2"); // 12 converted to string
console.log("1" + 2 + 2);// 122 converted to string
console.log(1 + 2 + "2");//32 1+2 is done as numbers and then converted to string
console.log( (3 + 4) * 5 % 3); //2

console.log(+true); //1
console.log(+false); //0

console.log(+"");//0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion