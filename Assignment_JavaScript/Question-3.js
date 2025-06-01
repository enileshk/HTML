function calculateBMI(weightKg, heightM) {
  if (weightKg <= 0 || heightM <= 0) {
    console.log("Weight and height must be positive numbers");
    return;
  }

  const bmi = weightKg / (heightM * heightM);
  return bmi.toFixed(2); // returns BMI rounded to 2 decimal places
}

const weight = 81;   // in kilograms
const height = 1.59; // in meters

console.log(calculateBMI(weight, height));
