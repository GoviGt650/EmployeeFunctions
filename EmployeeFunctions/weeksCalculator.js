const prompt = require("prompt-sync")();

//Constants
const DAYS_IN_MONTH = 22;
const WORKING_DAYS_IN_WEEK = 5;

let num = prompt ("Enter the value :");

console.log("MENU")
console.log("1. Choose if value is in months");
console.log("2. Choose if value is in days");
console.log("3. Exit");


let choice = prompt("Enter your choice (1-3): ");
let weeks = 0;

switch (choice) {
    case "1":
        let days = num  * DAYS_IN_MONTH;
        weeks = days / WORKING_DAYS_IN_WEEK;
        console.log("Number of weeks for given "+num+" months are :"+weeks)
        break;

    case "2" :
        weeks = num / WORKING_DAYS_IN_WEEK;
        console.log("Number of weeks for given "+num+" days are :"+weeks)
        break;

    case "3" :
        break;
}