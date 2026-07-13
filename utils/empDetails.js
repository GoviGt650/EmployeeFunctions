const empDetails = require('../data/empData');
const empSalaryDetails = require('../config/empConfig')

const { EMP_MIN_SALARY, EMP_MAX_SALARY } = empSalaryDetails;
const experience = empSalaryDetails.EMP_EXPERIENCE;

const salary = {
  min: EMP_MIN_SALARY,
  max: EMP_MAX_SALARY
};

const projectAllocated = empSalaryDetails.PROJECT_ALLOCATED;

function filterEmployee(option = {}) {
    const { min, max } = option?.salary || {};
    const project = option?.projectAllocated;
    const empExperience = option?.experience;

    return empDetails.filter(emp => {
        let salaryMatch = true;
        if (min !== undefined) {
            salaryMatch = emp.salary >= min;
        }
        if (max !== undefined) {
            salaryMatch = salaryMatch && emp.salary <= max;
        }

        let projectMatch = true;
        if (project !== undefined) {
            projectMatch = emp.projectAllocated === project;
        }

        let experienceMatch = true;
        if (empExperience !== undefined) {
            experienceMatch = emp.experience === empExperience;
        }

        return salaryMatch && projectMatch && experienceMatch;
    });
}


// console.log(filterEmployee({salary}));
// console.log(filterEmployee({projectAllocated}));
console.log(filterEmployee({experience}));
