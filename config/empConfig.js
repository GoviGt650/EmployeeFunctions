// ---------- Salary & Tax Constants ----------
const STANDARD_DEDUCTION = 50000; // Standard deduction (New Regime)
const MONTHLY_PF_DEDUCTION = 1800;  // Monthly Provident Fund deduction
const MONTHLY_PT_DEDUCTION = 200;   // Monthly Professional Tax deduction

const ANNUAL_SALARY = 1500000;  //Enter annual salary for employee salary breakdown

// ---------- Working Days & Hours Constants ----------
const WORKING_DAYS_PER_MONTH = 22;    // Number of working days in a month
const HOURS_PER_DAY = 8;    // Number of working hours in a day
const TOTAL_MONTHLY_HOURS = WORKING_DAYS_PER_MONTH * HOURS_PER_DAY;    // Total working hours in a month
const WORKING_DAYS_IN_WEEK = 5;    // Number of working days in a week

const CESS_RATE = 0.04;     // Health & Education Cess rate (4% of tax)

const PROJECT_TIME_LINE = 2;    //No of Months to calculate cost  estimation for the project

//Enter minimum and maximum salary range to filter employees based on salary
const EMP_MIN_SALARY = 1500000;
const EMP_MAX_SALARY = 2000000; 

const PROJECT_ALLOCATED = false;    //Enter true or false to filter employees based on project allocation
const EMP_EXPERIENCE = 2;    //Enter employee experience in years

// New Regime slabs: each slab taxes up to width rupees of the income
// that falls in it, at rate. Applied in order on the remaining income.
const TAX_SLABS = [
    { width: 300000, rate: 0.00 },
    { width: 300000, rate: 0.05 },
    { width: 300000, rate: 0.10 },
    { width: 300000, rate: 0.15 },
    { width: 300000, rate: 0.20 },
    { width: Infinity, rate: 0.30 },
];


const DESIGNATION_LEVELS = [
    {maxExperience : 2, engineering : 'Software Engineer', qa : 'QA 1'},
    {maxExperience : 5, engineering : 'Software Engineer', qa : 'QA 2'},
    {maxExperience : 9, engineering : 'Lead Engineer', qa : 'Lead Engineer'},
    {maxExperience : Infinity, engineering : 'Project Manager', qa : 'Project Manager'},
];

// ---------- Export the constants for use in other modules ----------
module.exports  = {
    STANDARD_DEDUCTION,
    MONTHLY_PF_DEDUCTION,
    MONTHLY_PT_DEDUCTION,
    WORKING_DAYS_PER_MONTH,
    HOURS_PER_DAY,
    TOTAL_MONTHLY_HOURS,
    CESS_RATE,
    TAX_SLABS,
    WORKING_DAYS_IN_WEEK,
    PROJECT_TIME_LINE,
    ANNUAL_SALARY,
    EMP_MAX_SALARY,
    EMP_MIN_SALARY,
    PROJECT_ALLOCATED,
    EMP_EXPERIENCE
};