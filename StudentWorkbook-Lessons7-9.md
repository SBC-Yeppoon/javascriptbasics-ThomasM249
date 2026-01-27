# Functions & Advanced Concepts - Student Workbook

**Name:** ________________________  
**Date:** ________________________  
**Grade:** ________________________

---

## Unit 3A: FUNCTIONS

### What are Functions?
Functions are reusable blocks of code that perform a specific task. They help us avoid repetition and organize code.

### Why Use Functions?

**Without functions (repetitive):**
```javascript
let result1 = 5 + 3;
console.log(result1);

let result2 = 10 + 7;
console.log(result2);

let result3 = 15 + 12;
console.log(result3);
```

**With functions (clean):**
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));
console.log(add(10, 7));
console.log(add(15, 12));
```

### Function Syntax

```javascript
function functionName(parameter1, parameter2) {
  // Code to execute
  return result;
}

// Call the function
functionName(argument1, argument2);
```

**Key Terms:**
- **Parameter:** Variable in the function definition (name, age, etc.)
- **Argument:** Actual value passed when calling the function
- **Return:** Value that comes back from the function

### Types of Functions

#### 1. No Parameters, No Return
```javascript
function greet() {
  console.log("Hello!");
}

greet(); // Call the function
```

#### 2. Parameters, No Return
```javascript
function printName(name) {
  console.log("Hello, " + name);
}

printName("Alice");
```

#### 3. Parameters and Return
```javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 3); // result = 8
```

#### 4. No Parameters, But Return
```javascript
function getTodaysDate() {
  return new Date();
}

let today = getTodaysDate();
```

### Practice Problems

**Problem 1:** Create a function that multiplies two numbers
```javascript
function multiply(a, b) {
  // Write the function body


}

// Test it
console.log(multiply(4, 5)); // Should print 20
```

**Problem 2:** Create a function that checks if a number is positive
```javascript
function isPositive(num) {
  // Return true if positive, false otherwise


}

// Test it
console.log(isPositive(10));   // true
console.log(isPositive(-5));   // false
```

**Problem 3:** Create a function that returns a greeting message
```javascript
function greetUser(firstName, lastName) {
  // Return a greeting with both names


}

// Test it
console.log(greetUser("John", "Smith"));
```

---

## Unit 3B: BUILT-IN FUNCTIONS

### Math Functions

```javascript
Math.abs(-5)           // 5 (absolute value)
Math.max(3, 7, 2)      // 7 (maximum)
Math.min(3, 7, 2)      // 2 (minimum)
Math.round(4.6)        // 5 (round to nearest)
Math.floor(4.9)        // 4 (round down)
Math.ceil(4.1)         // 5 (round up)
Math.sqrt(16)          // 4 (square root)
Math.pow(2, 3)         // 8 (2 to the power of 3)
```

### String Functions

```javascript
let text = "JavaScript";

text.length                   // 10
text.toUpperCase()            // "JAVASCRIPT"
text.toLowerCase()            // "javascript"
text.includes("Script")       // true
text.indexOf("a")             // 1
text.substring(0, 4)          // "Java"
text.charAt(0)                // "J"
text.split("")                // ["J","a","v",...]
```

### Practice

**Problem 1:** Use Math functions
```javascript
let numbers = [23, 45, 12, 78, 34];

// Find the largest number
let max = Math.max(23, 45, 12, 78, 34);
console.log("Largest: " + max);

// Find the smallest
let min = Math.min(23, 45, 12, 78, 34);
console.log("Smallest: " + min);
```

**Problem 2:** Use String functions
```javascript
let userInput = "HELLO world";

// Convert to lowercase
console.log(userInput.toLowerCase());

// Get length
console.log("Length: " + userInput.length);

// Check if contains word
console.log(userInput.includes("world"));
```

---

## Unit 3C: FUNCTIONS WITH CONDITIONALS AND LOOPS

### Function with If-Else

```javascript
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else {
    return "C";
  }
}

console.log(getGrade(92)); // "A"
console.log(getGrade(85)); // "B"
```

### Function with Loop

```javascript
function sumNumbers(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
}

console.log(sumNumbers(1, 10)); // 55
```

### Practice

**Problem 1:** Function with conditional
```javascript
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}

// Test it
console.log(isEvenOrOdd(10));
console.log(isEvenOrOdd(7));
```

**Problem 2:** Function with loop
```javascript
function countUp(number) {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}

// Test it
countUp(5);
```

**Problem 3:** Function that combines both
```javascript
function sumEvenNumbers(max) {
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Test it
console.log(sumEvenNumbers(10)); // Should be 2+4+6+8+10 = 30
```

---

## Unit 4A: VARIABLE SCOPE

### What is Scope?
Scope determines **WHERE** a variable can be used.

### GLOBAL SCOPE
Variables declared outside functions can be used anywhere.

```javascript
let globalVar = "I'm global"; // GLOBAL

function printGlobal() {
  console.log(globalVar); // Can access it here
}

console.log(globalVar); // Can access it here
```

### LOCAL SCOPE
Variables declared inside functions can ONLY be used in that function.

```javascript
function myFunction() {
  let localVar = "I'm local"; // LOCAL
  console.log(localVar); // ✓ Works
}

console.log(localVar); // ✗ Error: not defined
```

### Practice

**Problem 1:** Identify scope
```javascript
let score = 100; // GLOBAL or LOCAL?

function checkScore() {
  let feedback = "Great job!"; // GLOBAL or LOCAL?
  console.log(feedback);
}

checkScore();
console.log(score); // Will this work?
// console.log(feedback); // Will this work?
```

**Problem 2:** Write global and local variables
```javascript
let playerName = "Alice"; // GLOBAL - used by multiple functions

function login() {
  let password = "secret123"; // LOCAL - only for login
  console.log(`${playerName} is logging in`);
}

function logout() {
  let message = "Goodbye!"; // LOCAL - only for logout
  console.log(message);
}
```

---

## Unit 4B: VARIABLE SHADOWING

### What is Shadowing?
When you declare a local variable with the SAME NAME as a global variable, it "hides" the global one.

```javascript
let name = "Global Alice"; // GLOBAL

function printName() {
  let name = "Local Bob"; // SHADOWS global name
  console.log(name); // Prints "Local Bob"
}

printName();
console.log(name); // Prints "Global Alice" (unchanged)
```

### Practice

**Problem 1:** Predict the output
```javascript
let value = "Outside";

function testShadow() {
  let value = "Inside";
  console.log(value); // What prints?
}

testShadow();
console.log(value); // What prints?
```

**Answer:**
- First: ________
- Second: ________

**Problem 2:** Fix shadowing confusion
```javascript
let balance = 500;

function updateBalance() {
  let balance = 100; // This creates a LOCAL variable!
  console.log(`Inside: ${balance}`);
}

updateBalance();
console.log(`Outside: ${balance}`); // Still 500!

// Better way - return the new value:
function betterUpdate(currentBalance) {
  return currentBalance + 50;
}

balance = betterUpdate(balance);
console.log(balance); // Now it's 550
```

---

## Unit 5: PUTTING IT ALL TOGETHER

### Simple Project: Calculator

```javascript
// Global calculator state
let lastResult = 0;

function add(a, b) {
  lastResult = a + b;
  return lastResult;
}

function subtract(a, b) {
  lastResult = a - b;
  return lastResult;
}

function getLastResult() {
  return lastResult;
}

// Use it
console.log(add(10, 5));      // 15
console.log(subtract(10, 3)); // 7
console.log(getLastResult()); // 7
```

### Simple Project: Grade Tracker

```javascript
// Global to track grades
let grades = [];

function addGrade(grade) {
  grades.push(grade); // Add to list
}

function calculateAverage() {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

function getLetterGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  return "F";
}

// Use it
addGrade(85);
addGrade(92);
addGrade(88);

let avg = calculateAverage();
console.log(`Average: ${avg.toFixed(2)}`);
console.log(`Grade: ${getLetterGrade(avg)}`);
```

---

## Your Challenge Problems

### Challenge 1: Temperature Converter
Create functions to convert between Celsius, Fahrenheit, and Kelvin

```javascript
function celsiusToFahrenheit(celsius) {
  // Write this


}

function celsiusToKelvin(celsius) {
  // Write this


}

// Test
console.log(celsiusToFahrenheit(0));   // Should be 32
console.log(celsiusToKelvin(0));       // Should be 273.15
```

### Challenge 2: Password Validator
Create a function that checks if a password is strong

Requirements:
- At least 8 characters long
- Contains at least one number

```javascript
function isStrongPassword(password) {
  // Check length
  // Check for number
  // Return true/false


}

// Test
console.log(isStrongPassword("weak"));        // false
console.log(isStrongPassword("Strong123"));   // true
```

### Challenge 3: Bank Account System
Create functions to manage a bank account

```javascript
let balance = 1000;

function deposit(amount) {
  // Add to balance
  // Return new balance


}

function withdraw(amount) {
  // Subtract from balance (but not if insufficient funds)
  // Return true if successful, false otherwise


}

function getBalance() {
  // Return current balance
  

}

// Test
console.log(deposit(500));    // 1500
console.log(withdraw(200));   // true
console.log(getBalance());    // 1300
```

---

## Self-Check: Can You...?

### Functions
- [ ] Write a function with parameters
- [ ] Write a function that returns a value
- [ ] Call a function and use its return value
- [ ] Use Math functions (abs, max, min, sqrt, etc.)
- [ ] Use String functions (length, toUpperCase, includes, etc.)
- [ ] Write a function with conditional logic inside
- [ ] Write a function with a loop inside
- [ ] Use built-in functions effectively

### Scope
- [ ] Explain what global variables are
- [ ] Explain what local variables are
- [ ] Know when to use global vs. local
- [ ] Understand variable shadowing
- [ ] Avoid scope-related bugs
- [ ] Use function parameters properly
- [ ] Return values instead of modifying globals

### Integration
- [ ] Combine functions, conditionals, and loops
- [ ] Build a simple application with multiple functions
- [ ] Organize code with proper scope
- [ ] Create reusable, modular code

---

## Key Rules to Remember

### Functions
1. Always use `return` to send values back
2. Give functions clear, descriptive names
3. Functions should do ONE thing well
4. Test functions with different inputs

### Scope
1. Use `let` for local variables (inside functions/blocks)
2. Use global variables sparingly
3. Avoid variable shadowing by using different names
4. Pass data as parameters, don't rely on globals

### Best Practices
1. Functions make code reusable
2. Local variables prevent conflicts
3. Return values instead of modifying globals
4. Clear, descriptive function names help understanding

---

## Glossary

| Term | Definition |
|------|-----------|
| **Function** | A reusable block of code that performs a task |
| **Parameter** | Variable in function definition |
| **Argument** | Value passed to a function |
| **Return** | Value that comes back from a function |
| **Scope** | Where a variable can be used |
| **Global** | Variable accessible everywhere |
| **Local** | Variable only in function/block |
| **Shadowing** | Local variable hides a global one |
| **Built-in** | Functions provided by JavaScript |

---

## Notes Section

Use this space for your own notes:

__________________________________________________________________________

__________________________________________________________________________

__________________________________________________________________________

__________________________________________________________________________

__________________________________________________________________________

---

## Reflection

**What's the difference between a parameter and an argument?**

__________________________________________________________________________

**Why is using local variables better than global variables?**

__________________________________________________________________________

**What happens if you forget a return statement?**

__________________________________________________________________________

**How do you know when to create a new function?**

__________________________________________________________________________

---

**You're doing great!** Functions are powerful tools that make programming easier. Keep practicing, and soon you'll be writing complex applications! 🚀💻
