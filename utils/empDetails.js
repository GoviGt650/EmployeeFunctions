const empDetails = require('../data/empData');

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


// console.log(filterEmployee({salary: { min: 1500000, max: 2000000 }}));
// console.log(filterEmployee({projectAllocated: false}));
// console.log(filterEmployee({salary: { min: 1500000, max: 2000000 }, projectAllocated: true}));
console.log(filterEmployee({experience: 2}));
