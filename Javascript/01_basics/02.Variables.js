const accountId=144553 //cannot be changed 
//accountId=2 wont let you change
//console.log(accountId);

// can be changed
let accountEmail= "mvanshika23@gmail.com" 
var accountPassword="12345" 
accountCity="New Delhi" 
let accountState

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var
because of issue in block scope and functional scope, if variable isnt given value, then it is undefined by default.
*/
