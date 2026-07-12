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

function filterBySalary(limit) {
    return employees.filter(emp => emp.salary <= limit);
}

function filterByProject(isAllocated) {
    return employees.filter(emp => emp.projectAllocated === isAllocated);
}

console.log("Employees with salary <= 1800000");
console.log(filterBySalary(1800000));

console.log("\nAllocated Employees");
console.log(filterByProject(true));

console.log("\nNot Allocated Employees");
console.log(filterByProject(false));