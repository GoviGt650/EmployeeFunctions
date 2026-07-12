// ---------- Inputs ----------
function CalculateSalary(annualSalary) {
    const standardDeduction = 50000; // Standard deduction (New Regime)
    const pfDeduction = 1800;        // Monthly PF
    const ptDeduction = 200;         // Monthly PT

    const workingDaysPerMonth = 22;
    const hoursPerDay = 8;

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

    if (remainingIncome > 0) {

        // Slab 1: 0 - 3,00,000 @ 0%
        if (remainingIncome > 300000) {
            remainingIncome = remainingIncome - 300000;
        } else {
            remainingIncome = 0;
        }

        // Slab 2: 3,00,000 - 6,00,000 @ 5%
        if (remainingIncome > 0) {
            if (remainingIncome > 300000) {
                tax = tax + (300000 * 0.05);
                remainingIncome = remainingIncome - 300000;
            } else {
                tax = tax + (remainingIncome * 0.05);
                remainingIncome = 0;
            }
        }

        // Slab 3: 6,00,000 - 9,00,000 @ 10%
        if (remainingIncome > 0) {
            if (remainingIncome > 300000) {
                tax = tax + (300000 * 0.10);
                remainingIncome = remainingIncome - 300000;
            } else {
                tax = tax + (remainingIncome * 0.10);
                remainingIncome = 0;
            }
        }

        // Slab 4: 9,00,000 - 12,00,000 @ 15%
        if (remainingIncome > 0) {
            if (remainingIncome > 300000) {
                tax = tax + (300000 * 0.15);
                remainingIncome = remainingIncome - 300000;
            } else {
                tax = tax + (remainingIncome * 0.15);
                remainingIncome = 0;
            }
        }

        // Slab 5: 12,00,000 - 15,00,000 @ 20%
        if (remainingIncome > 0) {
            if (remainingIncome > 300000) {
                tax = tax + (300000 * 0.20);
                remainingIncome = remainingIncome - 300000;
            } else {
                tax = tax + (remainingIncome * 0.20);
                remainingIncome = 0;
            }
        }

        // Slab 6: Above 15,00,000 @ 30%
        if (remainingIncome > 0) {
            tax = tax + (remainingIncome * 0.30);
            remainingIncome = 0;
        }
    }

    // ---------- Step 3: Health & Education Cess @ 4% ----------
    const cess = tax * 0.04;
    const totalTax = tax + cess;

    // ---------- Step 4: Monthly Tax ----------
    const monthlyTax = totalTax / 12;

    // ---------- Step 5: Monthly Gross Salary ----------
    const monthlyGrossSalary = annualSalary / 12;

    // ---------- Step 6: Monthly Net Salary ----------
    const monthlyNetSalary = monthlyGrossSalary - monthlyTax - pfDeduction - ptDeduction;

    // ---------- Step 7: Hourly Salary ----------
    const totalMonthlyHours = workingDaysPerMonth * hoursPerDay;
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