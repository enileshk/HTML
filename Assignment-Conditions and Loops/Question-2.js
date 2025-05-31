function gradeStudent(score) {
  if (score > 90) {
    console.log("A Grade");
  } else if (score >= 70 && score <= 90) {
    console.log("B Grade");
  } else if (score >= 50 && score < 70) {
    console.log("C Grade");
  } else {
    console.log("F Grade");
  }
}
gradeStudent(95); // Output: A Grade
gradeStudent(85); // Output: B Grade
gradeStudent(60); // Output: C Grade
gradeStudent(40); // Output: F Grade
