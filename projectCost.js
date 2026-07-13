const CalculateSalary = require ("./utils/salaryBreakdown")
const costEstimationConfig = require ("./config/empConfig")
const empData = require ("./data/empData")


let empFilter = empData.filter(emp => emp.projectAllocated === costEstimationConfig.PROJECT_ALLOCATED);
let empSalary = empFilter.map(emp => emp.salary);
let totalMonthlySalary = 0;
empSalary.forEach(annualSalary => {
    const salaryData = CalculateSalary(annualSalary);
    const monthlySalary = salaryData.monthlyNetSalary;
    totalMonthlySalary = totalMonthlySalary + monthlySalary;
});

const months = costEstimationConfig.PROJECT_TIME_LINE;

const projectCost = totalMonthlySalary * months;

console.log("Project Cost :"+projectCost.toFixed(2));
