/**
 * LESSON 7: FUNCTIONS
 * Grade 11 Digital Solutions - JavaScript Fundamentals
 * 
 * Learning Objectives:
 * - Understand the purpose and structure of functions
 * - Create and call functions
 * - Use parameters and arguments
 * - Return values from functions
 * - Understand function scope
 * - Use built-in functions effectively
 * - Create reusable code through functions
 */

console.log("=== FUNCTIONS ===\n");

// ============================================
// WHY USE FUNCTIONS?
// ============================================

console.log("WHY FUNCTIONS?\n");

// WITHOUT functions: repetitive code
console.log("Without functions (repetitive):");
let result1 = 5 + 3;
console.log(`5 + 3 = ${result1}`);

let result2 = 10 + 7;
console.log(`10 + 7 = ${result2}`);

let result3 = 15 + 12;
console.log(`15 + 12 = ${result3}`);
console.log("");

// WITH functions: clean and reusable
console.log("With functions (reusable):");

function addNumbers(a, b) {
  return a + b;
}

console.log(`5 + 3 = ${addNumbers(5, 3)}`);
console.log(`10 + 7 = ${addNumbers(10, 7)}`);
console.log(`15 + 12 = ${addNumbers(15, 12)}`);
console.log("");

// ============================================
// FUNCTION BASICS
// ============================================

console.log("=== FUNCTION BASICS ===\n");

// Example 1: Simple function with no parameters
console.log("Example 1: No parameters");

function greet() {
  console.log("Hello, World!");
}

greet(); // Call the function
greet(); // Can call it multiple times
console.log("");

// Example 2: Function with parameters
console.log("Example 2: With parameters");

function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

greetPerson("Alice");
greetPerson("Bob");
greetPerson("Charlie");
console.log("");

// Example 3: Function with multiple parameters
console.log("Example 3: Multiple parameters");

function add(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

add(5, 3);
add(10, 20);
add(100, 50);
console.log("");

// Example 4: Function that returns a value
console.log("Example 4: Return values");

function multiply(a, b) {
  return a * b;
}

let product = multiply(6, 7);
console.log(`6 × 7 = ${product}`);

console.log(`4 × 9 = ${multiply(4, 9)}`);
console.log("");

// ============================================
// PARAMETERS AND ARGUMENTS
// ============================================

console.log("=== PARAMETERS VS ARGUMENTS ===\n");

// Parameters: variables in the function definition
// Arguments: actual values passed when calling function

function calculateArea(length, width) {
  // length and width are PARAMETERS
  return length * width;
}

// When we call the function with values:
let area1 = calculateArea(5, 10);
// 5 and 10 are ARGUMENTS
console.log(`Rectangle area (5 × 10): ${area1} square units`);

let area2 = calculateArea(8, 6);
console.log(`Rectangle area (8 × 6): ${area2} square units`);
console.log("");

// ============================================
// RETURN VALUES
// ============================================

console.log("=== RETURN VALUES ===\n");

// Example 1: Function that calculates and returns
function calculateDiscount(originalPrice, discountPercent) {
  let discountAmount = originalPrice * (discountPercent / 100);
  let finalPrice = originalPrice - discountAmount;
  return finalPrice;
}

let price1 = calculateDiscount(100, 20);
console.log(`Original: $100, Discount: 20%, Final: $${price1.toFixed(2)}`);

let price2 = calculateDiscount(50, 10);
console.log(`Original: $50, Discount: 10%, Final: $${price2.toFixed(2)}`);
console.log("");

// Example 2: Function that returns boolean
function isEven(number) {
  return number % 2 === 0;
}

console.log(`Is 10 even? ${isEven(10)}`);
console.log(`Is 7 even? ${isEven(7)}`);
console.log("");

// Example 3: Function that returns different types
function getGradeStatus(score) {
  if (score >= 70) {
    return "PASS";
  } else {
    return "FAIL";
  }
}

console.log(`Score 85: ${getGradeStatus(85)}`);
console.log(`Score 55: ${getGradeStatus(55)}`);
console.log("");

// ============================================
// BUILT-IN FUNCTIONS
// ============================================

console.log("=== BUILT-IN FUNCTIONS ===\n");

// Math functions
console.log("Math Functions:");
console.log(`Math.abs(-5) = ${Math.abs(-5)}`);
console.log(`Math.max(3, 7, 2) = ${Math.max(3, 7, 2)}`);
console.log(`Math.min(3, 7, 2) = ${Math.min(3, 7, 2)}`);
console.log(`Math.round(4.6) = ${Math.round(4.6)}`);
console.log(`Math.sqrt(16) = ${Math.sqrt(16)}`);
console.log(`Math.pow(2, 3) = ${Math.pow(2, 3)}`);
console.log("");

// String functions
console.log("String Functions:");
let text = "JavaScript";
console.log(`"${text}".length = ${text.length}`);
console.log(`"${text}".toUpperCase() = ${text.toUpperCase()}`);
console.log(`"${text}".toLowerCase() = ${text.toLowerCase()}`);
console.log(`"${text}".includes("Script") = ${text.includes("Script")}`);
console.log(`"${text}".indexOf("a") = ${text.indexOf("a")}`);
console.log(`"${text}".substring(0, 4) = ${text.substring(0, 4)}`);
console.log("");

// Array functions (preview)
console.log("Array Functions:");
let numbers = [1, 2, 3, 4, 5];
console.log(`[1,2,3,4,5].length = ${numbers.length}`);
console.log(`[1,2,3,4,5].includes(3) = ${numbers.includes(3)}`);
console.log(`[1,2,3,4,5].indexOf(4) = ${numbers.indexOf(4)}`);
console.log("");

// ============================================
// CREATING AND USING CUSTOM FUNCTIONS
// ============================================

console.log("=== CUSTOM FUNCTIONS ===\n");

// Example 1: Temperature converter
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(`0°C = ${celsiusToFahrenheit(0)}°F`);
console.log(`100°C = ${celsiusToFahrenheit(100)}°F`);
console.log(`37°C = ${celsiusToFahrenheit(37)}°F`);
console.log("");

// Example 2: Check password strength
function isStrongPassword(password) {
  return password.length >= 8 && 
         password.includes(password.toUpperCase().charAt(0)) &&
         /[0-9]/.test(password);
}

console.log(`"abc123" is strong: ${isStrongPassword("abc123")}`);
console.log(`"Password123" is strong: ${isStrongPassword("Password123")}`);
console.log("");

// Example 3: Calculate BMI
function calculateBMI(weight, height) {
  return weight / (height * height);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

let bmi = calculateBMI(70, 1.75);
let category = getBMICategory(bmi);
console.log(`Weight 70kg, Height 1.75m: BMI = ${bmi.toFixed(2)} (${category})`);
console.log("");

// Example 4: Validate email format
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

console.log(`"user@example.com" valid: ${isValidEmail("user@example.com")}`);
console.log(`"invalid.email" valid: ${isValidEmail("invalid.email")}`);
console.log("");

// ============================================
// FUNCTIONS WITH CONDITIONAL LOGIC
// ============================================

console.log("=== FUNCTIONS WITH CONDITIONALS ===\n");

// Example 1: Classify age group
function classifyAge(age) {
  if (age < 13) {
    return "Child";
  } else if (age < 18) {
    return "Teenager";
  } else if (age < 65) {
    return "Adult";
  } else {
    return "Senior";
  }
}

console.log(`Age 8: ${classifyAge(8)}`);
console.log(`Age 15: ${classifyAge(15)}`);
console.log(`Age 30: ${classifyAge(30)}`);
console.log(`Age 70: ${classifyAge(70)}`);
console.log("");

// Example 2: Determine ticket price
function getTicketPrice(age, hasStudentID) {
  if (age < 5) {
    return 0;
  } else if (age < 12) {
    return 8;
  } else if (hasStudentID) {
    return 10;
  } else {
    return 15;
  }
}

console.log(`Age 4: $${getTicketPrice(4, false)}`);
console.log(`Age 10: $${getTicketPrice(10, false)}`);
console.log(`Age 20 with student ID: $${getTicketPrice(20, true)}`);
console.log(`Age 20 without student ID: $${getTicketPrice(20, false)}`);
console.log("");

// ============================================
// FUNCTIONS WITH LOOPS
// ============================================

console.log("=== FUNCTIONS WITH LOOPS ===\n");

// Example 1: Sum numbers in range
function sumRange(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
}

console.log(`Sum of 1 to 10: ${sumRange(1, 10)}`);
console.log(`Sum of 1 to 100: ${sumRange(1, 100)}`);
console.log("");

// Example 2: Count occurrences
function countVowels(text) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  return count;
}

console.log(`Vowels in "Hello World": ${countVowels("Hello World")}`);
console.log(`Vowels in "JavaScript": ${countVowels("JavaScript")}`);
console.log("");

// Example 3: Generate multiplication table
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} × ${i} = ${num * i}`);
  }
}

console.log("7 times table:");
multiplicationTable(7);
console.log("");

// ============================================
// FUNCTION NAMING CONVENTIONS
// ============================================

console.log("=== FUNCTION NAMING CONVENTIONS ===\n");

// Good function names describe what they do
// Usually use camelCase

function calculateAverageScore(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

function isValidPhoneNumber(phone) {
  return phone.length === 10 && /^[0-9]+$/.test(phone);
}

function getUserDiscount(membershipType) {
  // Implementation here
  return 0;
}

console.log("Functions with clear, descriptive names:");
console.log("- calculateAverageScore()");
console.log("- isValidPhoneNumber()");
console.log("- getUserDiscount()");
console.log("");

// ============================================
// EXAMPLE PROBLEMS
// ============================================

console.log("=== EXAMPLE PROBLEMS ===\n");

// Problem 1: Create a simple calculator
console.log("Problem 1: Simple Calculator Functions");

function add2(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply2(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

console.log(`10 + 5 = ${add2(10, 5)}`);
console.log(`10 - 5 = ${subtract(10, 5)}`);
console.log(`10 × 5 = ${multiply2(10, 5)}`);
console.log(`10 ÷ 5 = ${divide(10, 5)}`);
console.log(`10 ÷ 0 = ${divide(10, 0)}`);
console.log("");

// Problem 2: Grade letter function
console.log("Problem 2: Grade Letter Converter");

function scoreToGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(`92 = ${scoreToGrade(92)}`);
console.log(`85 = ${scoreToGrade(85)}`);
console.log(`75 = ${scoreToGrade(75)}`);
console.log(`55 = ${scoreToGrade(55)}`);
console.log("");

// Problem 3: Calculate compound interest
console.log("Problem 3: Compound Interest Calculator");

function compoundInterest(principal, rate, years) {
  return principal * Math.pow(1 + rate, years);
}

let amount = compoundInterest(1000, 0.05, 5);
console.log(`Principal: $1000, Rate: 5%, Years: 5`);
console.log(`Final Amount: $${amount.toFixed(2)}`);
console.log("");

// Problem 4: Find average of array
console.log("Problem 4: Calculate Average");

function findAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

let scores = [85, 92, 78, 95, 88];
let average = findAverage(scores);
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log("");
