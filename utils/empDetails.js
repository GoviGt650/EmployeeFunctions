// ---------- Import Required Modules ----------
const empDetails = require('../data/empData');
const empSalaryDetails = require('../config/empConfig')
// ---------- Extract Salary and Project Allocation Details ----------
const { EMP_MIN_SALARY, EMP_MAX_SALARY } = empSalaryDetails;
const experience = empSalaryDetails.EMP_EXPERIENCE;
const salary = {
  min: EMP_MIN_SALARY,
  max: EMP_MAX_SALARY
};
const projectAllocated = empSalaryDetails.PROJECT_ALLOCATED;
// ---------- Function to Filter Employees Based on Salary, Project Allocation, and Experience ----------
function filterEmployee(option = {}) {
    const { min, max } = option?.salary || {};
    const project = option?.projectAllocated;
    const empExperience = option?.experience;

    return empDetails.filter(emp => {
        // ---------- Check Salary Match ----------
        let salaryMatch = true;
        if (min !== undefined) {
            salaryMatch = emp.salary >= min;
        }
        if (max !== undefined) {
            salaryMatch = salaryMatch && emp.salary <= max;
        }
        // ---------- Check Project Allocation Match ----------
        let projectMatch = true;
        if (project !== undefined) {
            projectMatch = emp.projectAllocated === project;
        }
        // ---------- Check Experience Match ----------
        let experienceMatch = true;
        if (empExperience !== undefined) {
            experienceMatch = emp.experience === empExperience;
        }
        // ---------- Return True if All Conditions Match ----------
        return salaryMatch && projectMatch && experienceMatch;
    });
}

// ---------- Output ----------
// console.log(filterEmployee({salary}));
// console.log(filterEmployee({projectAllocated}));
console.log(filterEmployee({experience}));
