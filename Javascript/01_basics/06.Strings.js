const name = "Vanshika"
const repoCount = 33

console.log(name + repoCount + " Value");//Vanshika33 Value
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//Hello my name is Vanshika and my repo count is 33

const fullName= new String('Vanshika-Mishra')
console.log(fullName.__proto__);//{}

console.log(fullName.length);//15
console.log(fullName.toUpperCase());//VANSHIKA-MISHRA
console.log(fullName.charAt(2));//n
console.log(fullName.indexOf('t'));//-1

const newString = fullName.substring(0, 8)
console.log(newString);//Vanshika

const anotherString = fullName.slice(0, 4)
console.log(anotherString); //Vans , it doesnt make changes in original
console.log(fullName);

const newStringOne = "   Vanshika    "
console.log(newStringOne);
console.log(newStringOne.trim()); //Vanshika no spaces

console.log(fullName.split('-')); //[ 'Vanshika', 'Mishra' ]

const url = "https://vanshika.com/vanshika%20mishra" 

console.log(url.replace('%20', '-')) //https://vanshika.com/vanshika-mishra

console.log(url.includes('sundar')) //false

