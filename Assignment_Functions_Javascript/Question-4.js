// Closure to handle tax calculation - using India's income tax slabs
// as of FY 2023-24 under the old regime for individuals below 60 years.
function createTaxCalculator() {
  return function calculateTax(income) {
    let tax = 0;

    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = (250000 * 0.05) + (income - 500000) * 0.20;
    } else {
      tax = (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30;
    }

    return tax;
  };
}

// Create the tax calculator using the closure
const calculateTax = createTaxCalculator();

// Test with different incomes
const incomes = [200000, 350000, 600000, 1200000];

incomes.forEach(income => {
  const tax = calculateTax(income);
  console.log(`Income: ₹${income.toLocaleString()} => Tax: ₹${tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}`);
});
