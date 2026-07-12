let employees = [
    {
        name: "Satya",
        salary: 1500000,
        projectAllocated: false
    },
    {
        name: "Rupesh",
        salary: 1800000,
        projectAllocated: false
    },
    {
        name: "Rupesh",
        salary: 1800000,
        projectAllocated: true,
        projectCompletionDate: "2026/08/10"
    },
    {
        name: "Keerthi",
        salary: 2800000,
        projectAllocated: true,
        projectCompletionDate: "2026/08/20"
    },
];

function filterEmployees(option) {
    const salary = option?.salary;
    const project = option?.projectAllocated;
    if (salary !==undefined && project !==undefined) {
        return employees.filter(emp => emp.salary <= salary && emp.projectAllocated === project);
    }
    if (salary !==undefined) {
        return employees.filter(emp => emp.salary <= salary);
    }
    if (project !==undefined) {
        return employees.filter(emp => emp.projectAllocated === project);
    }
    
}

console.log(filterEmployees({salary: 1800000}));
// console.log(filterEmployees({projectAllocated: true}));
// console.log(filterEmployees({salary: 2000000, projectAllocated: true}));
