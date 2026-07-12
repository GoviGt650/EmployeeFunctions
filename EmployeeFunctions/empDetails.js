let employees = [
    {
    name    : "Satya",
    salary  : 1500000,
    projectAllocated: false
    },
    {
    name    : "Rupesh",
    salary  : 1800000,
    projectAllocated: false
    },
    {
    name    : "Rupesh",
    salary  : 1800000,
    projectAllocated: true,
    projectCompletionDate: "2026/08/10"
    },
    {
    name    : "Keerthi",
    salary  : 2800000,
    projectAllocated: true,
    projectCompletionDate: "2026/08/20"
    },
];

const prompt = require("prompt-sync")();

console.log("========== MENU ==========");
console.log("1. View Employees by Salary");
console.log("2. View Employees by Project Allocation");
console.log("3. Exit");
console.log("==========================");

let choice = prompt("Enter your choice (1-3): ");

let empSalary = 0;
let empProject = "";

switch (choice) {
    case "1":
        empSalary = prompt("Enter the salary to filter employees: ");
        let filterEmployees = employees.filter(emp => emp.salary <= parseInt(empSalary));
        console.log("Filtered Employees:");
        filterEmployees.forEach(emp => {
            console.log(`Name: ${emp.name}, Salary: ${emp.salary}`);
        });
        break;

    case "2":
        console.log("Filter Employees by Project Allocation:");
        let empProject = prompt("Enter 'true' for allocated or 'false' for not allocated: ");
        if (empProject.toLowerCase() === 'true') {
            let filterByProject = employees.filter(emp => emp.projectAllocated === true);
            console.log("Filtered Employees:");
            filterByProject.forEach(emp => {
                console.log(`Name: ${emp.name}, Project Allocated: ${emp.projectAllocated}`);
            });
        } else if (empProject.toLowerCase() === 'false') {
            let filterByProject = employees.filter(emp => emp.projectAllocated === false);
            console.log("Filtered Employees:");
            filterByProject.forEach(emp => {
                console.log(`Name: ${emp.name}, Project Allocated: ${emp.projectAllocated}`);
        });
        } else {
            console.log("Invalid input. Please enter 'true' or 'false'.");
        }
        break;

    case "3" :
        break;
}