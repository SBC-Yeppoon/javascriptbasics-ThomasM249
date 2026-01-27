/**
 * LESSON 8: VARIABLE SCOPE - LOCAL VS GLOBAL
 * Grade 11 Digital Solutions - JavaScript Fundamentals
 * 
 * Learning Objectives:
 * - Understand variable scope
 * - Distinguish between local and global variables
 * - Understand block scope
 * - Avoid scope-related bugs
 * - Use scope effectively for code organization
 * - Understand variable shadowing
 */

console.log("=== VARIABLE SCOPE ===\n");

// ============================================
// WHAT IS SCOPE?
// ============================================

console.log("WHAT IS SCOPE?\n");

// Scope determines WHERE a variable can be used
// Two main types: GLOBAL and LOCAL

console.log("Example: Scope determines visibility");
console.log("A variable declared globally can be used anywhere");
console.log("A variable declared locally can only be used in its block");
console.log("");

// ============================================
// GLOBAL VARIABLES
// ============================================

console.log("=== GLOBAL VARIABLES ===\n");

// Variables declared outside all functions are GLOBAL
// They can be accessed from anywhere

let globalName = "Alice"; // GLOBAL variable
let globalCount = 0; // GLOBAL variable

function testGlobalAccess() {
  console.log(`Inside function, globalName = ${globalName}`);
  globalCount++;
}

console.log("Global variables:");
console.log(`globalName = ${globalName}`);
console.log(`globalCount = ${globalCount}`);

testGlobalAccess();

console.log(`globalCount after function call = ${globalCount}`);
console.log("");

// ============================================
// LOCAL VARIABLES
// ============================================

console.log("=== LOCAL VARIABLES ===\n");

// Variables declared INSIDE a function are LOCAL
// They only exist within that function

function greetPerson(name) {
  let greeting = "Hello, " + name + "!"; // LOCAL variable
  console.log(greeting);
}

greetPerson("Bob");

// This would cause an error if uncommented:
// console.log(greeting); // Error: greeting is not defined

console.log("Local variable 'greeting' only exists inside greetPerson()");
console.log("");

// Example: Local variables in different functions
console.log("Example: Local variables in different functions");

function function1() {
  let localVar = "Function 1"; // LOCAL to function1
  console.log(localVar);
}

function function2() {
  let localVar = "Function 2"; // Different local variable!
  console.log(localVar);
}

function1();
function2();
console.log("Each function has its own localVar - they don't interfere");
console.log("");

// ============================================
// BLOCK SCOPE (let and const)
// ============================================

console.log("=== BLOCK SCOPE ===\n");

// let and const are block-scoped (inside {})
// var is function-scoped (old style, avoid)

console.log("Example: Block scope with let");
if (true) {
  let blockVariable = "Inside block";
  console.log(`Inside block: ${blockVariable}`);
}

// This would cause an error:
// console.log(blockVariable); // Error: blockVariable is not defined

console.log("");

// Example: Block scope in loops
console.log("Example: Block scope in for loop");
for (let i = 0; i < 3; i++) {
  console.log(`Loop iteration: i = ${i}`);
}

// This would cause an error:
// console.log(i); // Error: i is not defined

console.log("");

// ============================================
// VARIABLE SHADOWING
// ============================================

console.log("=== VARIABLE SHADOWING ===\n");

// When you declare a local variable with the same name as a global variable
// The local variable "hides" or "shadows" the global one

let message = "Global message"; // GLOBAL

function demonstrateShadowing() {
  let message = "Local message"; // LOCAL (shadows global)
  console.log(message); // Uses LOCAL version
}

console.log(`Outside function: ${message}`); // Uses GLOBAL
demonstrateShadowing(); // Uses LOCAL
console.log(`Outside function again: ${message}`); // Uses GLOBAL
console.log("");

// Example: Shadowing in nested blocks
console.log("Example: Shadowing in nested blocks");

let value = "Outer";
console.log(`Outer block: value = ${value}`);

if (true) {
  let value = "Inner"; // Shadows outer value
  console.log(`Inner block: value = ${value}`);
}

console.log(`Back to outer: value = ${value}`);
console.log("");

// ============================================
// FUNCTION PARAMETERS ARE LOCAL
// ============================================

console.log("=== FUNCTION PARAMETERS ARE LOCAL ===\n");

function calculatePrice(price, taxRate) {
  // price and taxRate are local to this function
  let total = price + (price * taxRate);
  return total;
}

let finalPrice = calculatePrice(100, 0.1);
console.log(`Final price: $${finalPrice}`);

// These would cause errors:
// console.log(price); // Error: price is not defined
// console.log(taxRate); // Error: taxRate is not defined

console.log("");

// ============================================
// MODIFYING GLOBAL VARIABLES FROM FUNCTIONS
// ============================================

console.log("=== MODIFYING GLOBAL VARIABLES ===\n");

let balance = 1000; // GLOBAL

function withdraw(amount) {
  balance = balance - amount; // Modifies GLOBAL variable
}

function deposit(amount) {
  balance = balance + amount; // Modifies GLOBAL variable
}

console.log(`Starting balance: $${balance}`);

withdraw(100);
console.log(`After withdrawal: $${balance}`);

deposit(50);
console.log(`After deposit: $${balance}`);
console.log("");

// Best practice: Return values instead of modifying globals
console.log("Better approach: Return values instead");

function betterWithdraw(currentBalance, amount) {
  return currentBalance - amount; // Returns new value
}

let balance2 = 1000;
balance2 = betterWithdraw(balance2, 100);
console.log(`New balance: $${balance2}`);
console.log("");

// ============================================
// SCOPE CHAINS
// ============================================

console.log("=== SCOPE CHAINS ===\n");

// JavaScript looks for variables in this order:
// 1. Local scope
// 2. Parent scope
// 3. Global scope

let outerVar = "Global";

function outer() {
  let outerVar = "Outer function";
  
  function inner() {
    let outerVar = "Inner function";
    console.log(`Inner function sees: ${outerVar}`);
  }
  
  inner();
  console.log(`Outer function sees: ${outerVar}`);
}

outer();
console.log(`Global scope sees: ${outerVar}`);
console.log("");

// ============================================
// PRACTICAL EXAMPLES
// ============================================

console.log("=== PRACTICAL EXAMPLES ===\n");

// Example 1: Game score (global state)
console.log("Example 1: Game Score Management");

let playerScore = 0;
let level = 1;

function addPoints(points) {
  playerScore += points;
}

function levelUp() {
  level++;
}

console.log(`Initial: Score=${playerScore}, Level=${level}`);
addPoints(100);
console.log(`After points: Score=${playerScore}, Level=${level}`);
levelUp();
console.log(`After level up: Score=${playerScore}, Level=${level}`);
console.log("");

// Example 2: Calculator with local scope
console.log("Example 2: Calculator (local scope)");

function calculate(operation, num1, num2) {
  let result; // LOCAL variable
  
  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    result = num1 / num2;
  }
  
  return result;
}

console.log(`10 + 5 = ${calculate("add", 10, 5)}`);
console.log(`10 - 5 = ${calculate("subtract", 10, 5)}`);
console.log(`10 × 5 = ${calculate("multiply", 10, 5)}`);
console.log(`10 ÷ 5 = ${calculate("divide", 10, 5)}`);
console.log("");

// Example 3: Student grade tracker
console.log("Example 3: Student Grade Tracker");

let totalGrades = 0;
let gradeCount = 0;

function recordGrade(grade) {
  totalGrades += grade;
  gradeCount++;
}

function getAverage() {
  if (gradeCount === 0) return 0;
  return totalGrades / gradeCount;
}

recordGrade(85);
recordGrade(92);
recordGrade(78);

console.log(`Grades recorded: ${gradeCount}`);
console.log(`Average: ${getAverage().toFixed(2)}`);
console.log("");

// ============================================
// COMMON SCOPE MISTAKES
// ============================================

console.log("=== COMMON SCOPE MISTAKES ===\n");

// Mistake 1: Forgetting variable declaration
console.log("Mistake 1: Forgetting let/const");

function badFunction() {
  undeclaredVar = "Oops!"; // Creates GLOBAL variable accidentally!
}

badFunction();
console.log(`undeclaredVar is now global: ${undeclaredVar}`);
console.log("(This is bad practice - always use let/const)\n");

// Mistake 2: Expecting local variable outside function
console.log("Mistake 2: Trying to access local variable");

function createLocalVar() {
  let localVar = "I'm local";
}

createLocalVar();

// Uncommenting this would cause an error:
// console.log(localVar); // Error: localVar is not defined
console.log("localVar cannot be accessed outside the function\n");

// Mistake 3: Shadowing causing confusion
console.log("Mistake 3: Variable shadowing");

let score = 100;

function printScore() {
  let score = 50; // Shadows global score
  console.log(`Inside function: ${score}`);
}

printScore();
console.log(`Outside function: ${score}`);
console.log("The local variable 'score' shadowed the global one\n");

// ============================================
// BEST PRACTICES
// ============================================

console.log("=== SCOPE BEST PRACTICES ===\n");

console.log("1. Use let/const instead of var");
console.log("2. Keep variables in the smallest scope needed");
console.log("3. Avoid global variables when possible");
console.log("4. Use function return values instead of modifying globals");
console.log("5. Give variables clear, descriptive names");
console.log("6. Avoid variable shadowing - use different names");
console.log("");

// ============================================
// EXAMPLE PROBLEMS
// ============================================

console.log("=== EXAMPLE PROBLEMS ===\n");

// Problem 1: Bank account with proper scope
console.log("Problem 1: Bank Account");

let accountBalance = 500;

function checkBalance() {
  return accountBalance;
}

function makeWithdrawal(amount) {
  if (amount <= accountBalance) {
    accountBalance -= amount;
    return true;
  }
  return false;
}

console.log(`Balance: $${checkBalance()}`);

if (makeWithdrawal(100)) {
  console.log(`Withdrew $100. Balance: $${checkBalance()}`);
} else {
  console.log("Insufficient funds");
}
console.log("");

// Problem 2: Temperature converter with local scope
console.log("Problem 2: Temperature Converter");

function convertTemp(celsius, targetScale) {
  let fahrenheit = (celsius * 9/5) + 32;
  let kelvin = celsius + 273.15;
  
  if (targetScale === "F") {
    return fahrenheit;
  } else if (targetScale === "K") {
    return kelvin;
  } else {
    return celsius;
  }
}

console.log(`0°C = ${convertTemp(0, "F")}°F`);
console.log(`0°C = ${convertTemp(0, "K")}K`);
console.log("");

// Problem 3: Quiz grader with scope
console.log("Problem 3: Quiz Grader");

let quizzes = []; // Global array

function addQuizScore(score) {
  quizzes.push(score);
}

function getAverageScore() {
  if (quizzes.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < quizzes.length; i++) {
    sum += quizzes[i];
  }
  return sum / quizzes.length;
}

addQuizScore(85);
addQuizScore(92);
addQuizScore(78);

console.log(`Quiz scores: ${quizzes.join(", ")}`);
console.log(`Average: ${getAverageScore().toFixed(2)}`);
console.log("");
