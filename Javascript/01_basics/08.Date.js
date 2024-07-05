let myDate = new Date()
console.log(myDate.toString()); //Sat Jul 06 2024 00:33:07 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Sat Jul 06 2024
console.log(myDate.toLocaleString()) //6/7/2024, 12:34:49 am

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString());//23/1/2023, 12:00:00 am month index starts from 0
date1 = new Date(2023, 0, 23, 5, 3)
console.log(date1.toLocaleString()); //23/1/2023, 5:03:00 am
date2 = new Date("2023-01-14")
console.log(date2.toLocaleString()); //14/1/2023, 5:30:00 am
date3= new Date("01-14-2023")
console.log(date3.toLocaleString()); //14/1/2023, 12:00:00 am

let myTimeStamp = Date.now() 

console.log(myTimeStamp); //1720206590540
console.log(myCreatedDate.getTime()); //1674412200000
console.log(Math.floor(Date.now()/1000)); //1720206590

let newDate = new Date()
console.log(newDate);//2024-07-05T19:09:50.541Z
console.log(newDate.getMonth() + 1); //7
console.log(newDate.getDay()); //6

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
