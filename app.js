

// Q1
// let date = new Date("Saturday, 9 August 2025");
// console.log(date);

// Q2
// let startTime = new Date()
// let endTime = new Date("2025-09-03 14:30:00")

// let  millseconds  = endTime - startTime
// console.log(Math.floor(millseconds / 1000 /60));



// Q3

// let birthDay = new Date(" 9 sep 2007");
// let currentDay = new Date()
// let milliSeconds = currentDay - birthDay
// console.log(Math.floor(milliSeconds /1000 / 60 / 60 / 24 / 365));


// Q4


// let todayDate = new Date()
// let ans = todayDate.getDate()
// console.log(ans);


// Q5
// let date = new Date()
// date.setMonth(date.getMonth())
// date.setDate(0)
// console.log(date);




// function userDate(date){
//     let currnetdate = new Date() 
//     let pastseconds = Math.floor(currnetdate - new Date(date) / 1000)
// let pastminutes = Math.floor(currnetdate - new Date(date) / 1000 / 60)
// let pasthours = Math.floor(currnetdate - new Date(date) / 1000 / 60 / 60)
// let pastdays = Math.floor(currnetdate - new Date(date) / 1000 / 60 / 60 / 365)
// if(pastseconds < 60 ) {
//     return `${pastseconds} just Now`
// }
// else if(pastminutes < 60){
//     return `${pastminutes} is ago`
// }
// else if(pasthours < 24){
// return `${pasthours} is ago`
// }
// else if(pastdays < 365){
// return `${pastdays} is ago`
// }
// }
// console.log(userDate("2025-09-03T12:30:00Z"));




// function newYear(targetdate) {

//   const futureDate = new Date(targetdate);

//   let time = setInterval(function () {
//     const currentDate = new Date();
//     const getMilliseconds = futureDate - currentDate;

//     if (getMilliseconds <= 0) {
//       clearInterval(time);
//       console.log("Happy New Year");
//       return;
//     }

    
//     const day = Math.floor(getMilliseconds / (1000 * 60 * 60 * 24));
//     const hour = Math.floor(
//       (getMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minute = Math.floor(
//       (getMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
//     );
//     const second = Math.floor((getMilliseconds % (1000 * 60)) / 1000);

//     console.log(`${day}d ${hour}h ${minute}m ${second}s`);
//   }, 1000);
// }

// console.log(newYear("2026-01-01 00:00:00"));




// Q8


// function towDates(date1,date2){
//     const d1 = new Date(date1)
//      const d2 = new Date(date2)
//     const milliSeconds = Math.abs(d2 - d1)
//     const totalMin = Math.floor(milliSeconds/1000/60)
//     const hour = Math.floor(totalMin/60)
//     const minutes = hour % 60
//     return `${hour} hours ${minutes} is minutes`
// }

// console.log(towDates("2025-09-07T10:45:30.000Z" , "2025-09-07T11:55:30.000Z"));