/**
 * LESSON 3: OPERATORS & OUTPUT METHODS
 * Grade 11 Digital Solutions - JavaScript Fundamentals
 * 
 * Learning Objectives:
 * - Review and apply all operator types
 * - Use multiple methods to output information
 * - Format output for readability
 * - Understand different data types and their behavior
 */

console.log("=== MULTIPLE WAYS TO OUTPUT INFORMATION ===\n");

// ============================================
// OUTPUT METHODS
// ============================================

// 1. console.log() - Most common method
console.log("1. Using console.log()");
console.log("This outputs text to the console");
let name = "Sarah";
let age = 16;
console.log(name, age);  // Multiple values
console.log("");

// 2. String Concatenation with +
console.log("2. Using String Concatenation (+)");
let message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);
console.log("");

// 3. Template Literals (Backticks and ${})
console.log("3. Using Template Literals");
let message2 = `My name is ${name} and I am ${age} years old.`;
console.log(message2);
console.log("");

// 4. Template Literals with Expressions
console.log("4. Template Literals with Expressions");
let score1 = 85;
let score2 = 92;
let average = (score1 + score2) / 2;
console.log(`Score 1: ${score1}, Score 2: ${score2}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log("");

// ============================================
// PRACTICING OUTPUT WITH ALL OPERATORS
// ============================================

console.log("=== COMPREHENSIVE OPERATOR REVIEW ===\n");

// Arithmetic Operators
console.log("ARITHMETIC OPERATORS:");
let num1 = 20;
let num2 = 7;
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(3)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
console.log("");

// Comparison Operators
console.log("COMPARISON OPERATORS:");
console.log(`Is ${num1} > ${num2}? ${num1 > num2}`);
console.log(`Is ${num1} < ${num2}? ${num1 < num2}`);
console.log(`Is ${num1} >= ${num2}? ${num1 >= num2}`);
console.log(`Is ${num1} === ${num1}? ${num1 === num1}`);
console.log("");

// Logical Operators
console.log("LOGICAL OPERATORS:");
let condition1 = num1 > 15;
let condition2 = num2 < 10;
console.log(`${num1} > 15: ${condition1}`);
console.log(`${num2} < 10: ${condition2}`);
console.log(`Both conditions (AND): ${condition1 && condition2}`);
console.log(`At least one (OR): ${condition1 || condition2}`);
console.log(`NOT first condition: ${!condition1}`);
console.log("");

// ============================================
// FORMATTED OUTPUT
// ============================================

console.log("=== FORMATTED OUTPUT ===\n");

// Using toFixed() for decimal places
let price = 19.95;
let quantity = 3;
let total = price * quantity;
console.log(`Price: $${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: $${total.toFixed(2)}`);
console.log("");

// Using padStart/padEnd for alignment
console.log("Formatted Table:");
console.log("Item".padEnd(15) + "Price".padStart(10));
console.log("-".repeat(25));
console.log("Apple".padEnd(15) + "$2.50".padStart(10));
console.log("Banana".padEnd(15) + "$1.20".padStart(10));
console.log("Orange".padEnd(15) + "$3.00".padStart(10));
console.log("");

// ============================================
// WORKING WITH DIFFERENT DATA TYPES
// ============================================

console.log("=== DATA TYPES & OPERATORS ===\n");

// Numbers
console.log("Numbers:");
let integer = 42;
let decimal = 3.14;
console.log(`Integer: ${integer}, Decimal: ${decimal}`);
console.log(`Sum: ${integer + decimal}`);
console.log("");

// Strings
console.log("Strings:");
let str1 = "Hello";
let str2 = "World";
console.log(`str1: "${str1}", str2: "${str2}"`);
console.log(`Concatenation: "${str1} ${str2}"`);
console.log(`Comparison (str1 == str1): ${str1 == str1}`);
console.log("");

// Booleans
console.log("Booleans:");
let bool1 = true;
let bool2 = false;
console.log(`bool1: ${bool1}, bool2: ${bool2}`);
console.log(`bool1 && bool2: ${bool1 && bool2}`);
console.log(`bool1 || bool2: ${bool1 || bool2}`);
console.log(`!bool1: ${!bool1}`);
console.log("");

// Type Coercion (automatic type conversion)
console.log("Type Coercion Examples:");
console.log(`"5" + 3 = ${"5" + 3}  (string concatenation)`);
console.log(`5 + 3 = ${5 + 3}  (numeric addition)`);
console.log(`"10" - 5 = ${"10" - 5}  (converts string to number)`);
console.log(`true + 1 = ${true + 1}  (true becomes 1)`);
console.log("");

// ============================================
// COMPLEX CALCULATIONS WITH OUTPUT
// ============================================

console.log("=== COMPLEX CALCULATIONS ===\n");

// Calculate compound interest
console.log("Compound Interest Calculator:");
let principal = 1000;
let rate = 0.05; // 5%
let years = 3;
let amount = principal * (1 + rate) ** years;
console.log(`Principal: $${principal}`);
console.log(`Annual Rate: ${rate * 100}%`);
console.log(`Years: ${years}`);
console.log(`Final Amount: $${amount.toFixed(2)}`);
console.log("");

// Calculate triangle area
console.log("Triangle Area Calculator:");
let base = 10;
let height = 6;
let triangleArea = (base * height) / 2;
console.log(`Base: ${base} units`);
console.log(`Height: ${height} units`);
console.log(`Area: ${triangleArea} square units`);
console.log("");

// Grade calculation with logic
console.log("Grade Calculation:");
let midterm = 78;
let finalExam = 85;
let participation = 90;
let finalGrade = (midterm * 0.3) + (finalExam * 0.5) + (participation * 0.2);
let isPassing2 = finalGrade >= 60;
let isHonors = finalGrade >= 85;

console.log(`Midterm (30%): ${midterm}`);
console.log(`Final Exam (50%): ${finalExam}`);
console.log(`Participation (20%): ${participation}`);
console.log(`Final Grade: ${finalGrade.toFixed(2)}`);
console.log(`Passing: ${isPassing2}`);
console.log(`Honors: ${isHonors}`);
console.log("");

// ============================================
// EXAMPLE PROBLEMS - COMPREHENSIVE
// ============================================

console.log("=== COMPREHENSIVE EXAMPLES ===\n");

// Problem 1: Rental Cost with Conditions
console.log("Problem 1: Movie Rental Cost");
let daysRented = 5;
let basePrice = 3.99;
let totalRentalCost = daysRented * basePrice;
let hasLateFees = daysRented > 7;
let finalCost = hasLateFees ? totalRentalCost * 1.2 : totalRentalCost;

console.log(`Days rented: ${daysRented}`);
console.log(`Base price per day: $${basePrice}`);
console.log(`Late fees applied: ${hasLateFees}`);
console.log(`Final cost: $${finalCost.toFixed(2)}`);
console.log("");

// Problem 2: BMI (Body Mass Index)
console.log("Problem 2: BMI Calculation");
let weight = 70; // kg
let height2 = 1.75; // meters
let bmi = weight / (height2 ** 2);
let isHealthyWeight = bmi >= 18.5 && bmi < 25;

console.log(`Weight: ${weight} kg`);
console.log(`Height: ${height} m`);
console.log(`BMI: ${bmi.toFixed(2)}`);
console.log(`Healthy weight range: ${isHealthyWeight}`);
console.log("");

// Problem 3: Budget Analysis
console.log("Problem 3: Monthly Budget Analysis");
let income = 2000;
let rent = 800;
let food = 300;
let transportation = 150;
let entertainment = 200;
let totalExpenses = rent + food + transportation + entertainment;
let savings = income - totalExpenses;
let hasExcess = savings > 0;
let percentSaved = (savings / income) * 100;

console.log(`Income: $${income}`);
console.log(`Expenses: $${totalExpenses}`);
console.log(`Savings: $${savings}`);
console.log(`Percentage saved: ${percentSaved.toFixed(1)}%`);
console.log(`Within budget: ${hasExcess}`);
console.log("");

// ============================================
// DEBUGGING OUTPUT
// ============================================

console.log("=== TIPS FOR CLEAR OUTPUT ===\n");

// Use descriptive labels
let variable1 = 100;
console.log(`The value of variable1 is: ${variable1}`);

// Group related output
console.log("--- Student Information ---");
console.log(`Name: Alice`);
console.log(`Age: 16`);
console.log(`Grade: 11`);

// Use separators for readability
console.log("\n" + "=".repeat(40) + "\n");

// Show calculations step by step
let x = 10;
let y = 5;
let z = x + y;
console.log(`Step 1: x = ${x}`);
console.log(`Step 2: y = ${y}`);
console.log(`Step 3: x + y = ${x} + ${y} = ${z}`);
