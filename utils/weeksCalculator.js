// ---------- Import Required Modules ----------
const weeksCalculator = require('../config/empConfig');

// ---------- Extract Required Constants from Configuration ----------
const daysInMonth = weeksCalculator.WORKING_DAYS_PER_MONTH;
const daysInWeek = weeksCalculator.WORKING_DAYS_IN_WEEK;
const days = weeksCalculator.DAYS_FOR_WEEKS_CALCULATION;
const months = weeksCalculator.MONTHS_FOR_WEEKS_CALCULATION;

// ---------- Function to Calculate Weeks Based on Days or Months ----------
function calculateWeeks(value) {
    const days = value?.days;
    const months = value?.months;
    // ---------- Calculate Weeks Based on Provided Days or Months ----------
    if (days !== undefined) {
        return days / daysInWeek;
    }
    if (months !== undefined) {
        const totalDays = months * daysInMonth;
        return totalDays / daysInWeek;
    }
}

// ---------- Output ----------
console.log(calculateWeeks({days}));
// console.log(calculateWeeks({months}));