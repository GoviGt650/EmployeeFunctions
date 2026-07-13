// ---------- Salary & Tax Constants ----------
const STANDARD_DEDUCTION = 50000; // Standard deduction (New Regime)
const MONTHLY_PF_DEDUCTION = 1800;
const MONTHLY_PT_DEDUCTION = 200;

const ANNUAL_SALARY = 1500000;  //Enter annual salary for employee salary breakdown

const WORKING_DAYS_PER_MONTH = 22;
const HOURS_PER_DAY = 8;
const TOTAL_MONTHLY_HOURS = WORKING_DAYS_PER_MONTH * HOURS_PER_DAY;

const CESS_RATE = 0.04;

const PROJECT_TIME_LINE = 2;    //No of Months to calculate cost  estimation for the project

const EMP_MIN_SALARY = 1500000;
const EMP_MAX_SALARY = 2000000;
const PROJECT_ALLOCATED = false;
const EMP_EXPERIENCE = 2; //Enter employee experience in years

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




const WORKING_DAYS_IN_WEEK = 5;

const DESIGNATION_LEVELS = [
    {maxExperience : 2, engineering : 'Software Engineer', qa : 'QA 1'},
    {maxExperience : 5, engineering : 'Software Engineer', qa : 'QA 2'},
    {maxExperience : 9, engineering : 'Lead Engineer', qa : 'Lead Engineer'},
    {maxExperience : Infinity, engineering : 'Project Manager', qa : 'Project Manager'},
];

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