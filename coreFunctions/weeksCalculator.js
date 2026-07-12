// const prompt = require("prompt-sync")();

//Constants
const DAYS_IN_MONTH = 22;
const WORKING_DAYS_IN_WEEK = 5;

// let num = prompt ("Enter the value :");

// console.log("MENU")
// console.log("1. Choose if value is in months");
// console.log("2. Choose if value is in days");
// console.log("3. Exit");


// let choice = prompt("Enter your choice (1-3): ");
// let weeks = 0;

// switch (choice) {
//     case "1":
//         let days = num  * DAYS_IN_MONTH;
//         weeks = days / WORKING_DAYS_IN_WEEK;
//         console.log("Number of weeks :"+weeks)
//         break;

//     case "2" :
//         weeks = num / WORKING_DAYS_IN_WEEK;
//         console.log("Number of weeks :"+weeks)
//         break;

//     case "3" :
//         break;
// }

function calculateWeeks(value) {
    const days = value?.days;
    const months = value?.months;
    if (days !== undefined) {
        return days / WORKING_DAYS_IN_WEEK;
    }
    if (months !== undefined) {
        const totalDays = months * DAYS_IN_MONTH;
        return totalDays / WORKING_DAYS_IN_WEEK;
    }
}

console.log(calculateWeeks({days: 44}));
// console.log(calculateWeeks({months: 2}));