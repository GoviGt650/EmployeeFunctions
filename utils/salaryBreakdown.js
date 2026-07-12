// ---------- Inputs ----------
const empConfig = require('../config/empConfig');

const standardDeduction = empConfig.STANDARD_DEDUCTION;
const pfDeduction = empConfig.MONTHLY_PF_DEDUCTION;
const ptDeduction = empConfig.MONTHLY_PT_DEDUCTION;

const workingDaysPerMonth = empConfig.WORKING_DAYS_PER_MONTH;
const hoursPerDay = empConfig.HOURS_PER_DAY;


function CalculateSalary(annualSalary) {
    
    // ---------- Step 1: Taxable Income ----------
    const taxableIncome = annualSalary - standardDeduction;

    // ---------- Step 2: Calculate Tax as per New Regime Slabs ----------
    // Slab 1: 0 - 3,00,000              -> 0%
    // Slab 2: 3,00,001 - 6,00,000       -> 5%
    // Slab 3: 6,00,001 - 9,00,000       -> 10%
    // Slab 4: 9,00,001 - 12,00,000      -> 15%
    // Slab 5: 12,00,001 - 15,00,000     -> 20%
    // Slab 6: Above 15,00,000           -> 30%

    let tax = 0;
    let remainingIncome = taxableIncome;


    for (const slab of empConfig.TAX_SLABS) {
        if (remainingIncome > 0) {
            const taxableAmount = Math.min(remainingIncome, slab.width);
            tax += taxableAmount * slab.rate;
            remainingIncome -= taxableAmount;
        }
    }


    // ---------- Step 3: Health & Education Cess @ 4% ----------
    const cess = tax * empConfig.CESS_RATE;
    const totalTax = tax + cess;

    // ---------- Step 4: Monthly Tax ----------
    const monthlyTax = totalTax / 12;

    // ---------- Step 5: Monthly Gross Salary ----------
    const monthlyGrossSalary = annualSalary / 12;

    // ---------- Step 6: Monthly Net Salary ----------
    const monthlyNetSalary = monthlyGrossSalary - monthlyTax - pfDeduction - ptDeduction;

    // ---------- Step 7: Hourly Salary ----------
    const totalMonthlyHours = empConfig.TOTAL_MONTHLY_HOURS;
    const hourlySalary = monthlyNetSalary / totalMonthlyHours;

    // ---------- Output ----------
    console.log("========== Salary Breakdown ==========");
    console.log("Annual Salary        : " + annualSalary.toFixed(2));
    console.log("Taxable Income       : " + taxableIncome.toFixed(2));
    console.log("Annual Tax (+ Cess)  : " + totalTax.toFixed(2));
    console.log("Monthly Gross Salary : " + monthlyGrossSalary.toFixed(2));
    console.log("Monthly Tax          : " + monthlyTax.toFixed(2));
    console.log("PF Deduction         : " + pfDeduction.toFixed(2));
    console.log("PT Deduction         : " + ptDeduction.toFixed(2));
    console.log("Monthly Net Salary   : " + monthlyNetSalary.toFixed(2));
    console.log("Total Monthly Hours  : " + totalMonthlyHours);
    console.log("Hourly Salary        : " + hourlySalary.toFixed(2));
    console.log("=======================================");

}

CalculateSalary(1500000); 