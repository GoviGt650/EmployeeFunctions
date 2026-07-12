// const prompt = require("prompt-sync")();

const weeksCalculator = require('../config/empConfig');

//Constants
const daysInMonth = weeksCalculator.WORKING_DAYS_PER_MONTH;
const daysInWeek = weeksCalculator.WORKING_DAYS_IN_WEEK;



function calculateWeeks(value) {
    const days = value?.days;
    const months = value?.months;
    if (days !== undefined) {
        return days / daysInWeek;
    }
    if (months !== undefined) {
        const totalDays = months * daysInMonth;
        return totalDays / daysInWeek;
    }
}

console.log(calculateWeeks({days: 44}));
// console.log(calculateWeeks({months: 2}));