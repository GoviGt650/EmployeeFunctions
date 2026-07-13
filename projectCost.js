// ---------- Import Required Modules ----------
const CalculateSalary = require ("./utils/salaryBreakdown")
const costEstimationConfig = require ("./config/empConfig")
const empData = require ("./data/empData")

// ---------- Filter Employees with Project Allocated ----------
let empFilter = empData.filter(emp => emp.projectAllocated === costEstimationConfig.PROJECT_ALLOCATED);

// ---------- Extract Salaries of Filtered Employees ----------
let empSalary = empFilter.map(emp => emp.salary);

let totalMonthlySalary = 0;

// ---------- Calculate Monthly Salary for Each Employee ----------
empSalary.forEach(annualSalary => {
    const salaryData = CalculateSalary(annualSalary);
    const monthlySalary = salaryData.monthlyNetSalary;
    totalMonthlySalary = totalMonthlySalary + monthlySalary;
});

// ---------- Calculate Project Cost ----------
const months = costEstimationConfig.PROJECT_TIME_LINE;
const projectCost = totalMonthlySalary * months;

// ---------- Output ----------
console.log("Project Cost :"+projectCost.toFixed(2));
