# Conditionals & Loops Unit - Student Workbook

**Name:** ________________________  
**Date:** ________________________  
**Grade:** ________________________

---

## Unit 2: Conditional Statements

### What are Conditionals?
Conditional statements allow your program to make decisions and execute different code based on different conditions.

### Types of Conditionals

#### 1. IF Statement (Single Branch)
```javascript
if (condition) {
  // code runs only if condition is true
}
```

**Example:**
```javascript
let age = 16;
if (age >= 16) {
  console.log("You can drive!");
}
```

#### 2. IF-ELSE Statement (Two Branches)
```javascript
if (condition) {
  // runs if condition is TRUE
} else {
  // runs if condition is FALSE
}
```

**Example:**
```javascript
let score = 75;
if (score >= 70) {
  console.log("PASS");
} else {
  console.log("FAIL");
}
```

#### 3. IF-ELSE IF-ELSE (Multiple Branches)
```javascript
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition1 is false AND condition2 is true
} else {
  // runs if all conditions are false
}
```

**Example:** Grade determination
```javascript
let grade = 88;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

### Practice Problems

**Problem 1:** Write code to check if a number is positive, negative, or zero
```javascript


```

**Problem 2:** Check if someone can watch a PG-13 movie
- Requirement: 13+ years old OR has parent permission
```javascript


```

**Problem 3:** Determine shipping cost based on weight
- 0-2 kg: $5.00
- 2.1-5 kg: $10.00
- 5.1+ kg: $15.00

Weight: 3.5 kg
Code:
```javascript


```

---

## Unit 2B: Nested Conditionals

### What are Nested Conditionals?
An if statement inside another if statement - conditions within conditions.

**Example:**
```javascript
if (isLoggedIn) {
  console.log("✓ Logged in");
  
  if (hasAdmin) {
    console.log("  ✓ Admin access");
  } else {
    console.log("  ✗ Regular user");
  }
} else {
  console.log("✗ Not logged in");
}
```

### Practice Problems

**Problem 1:** Online purchase eligibility
- Must be logged in
- Must have payment method
- Item must be in stock

Your code:
```javascript
let isLoggedIn = true;
let hasPayment = true;
let inStock = true;


```

**Problem 2:** Multilevel access control
Check if user can access a file:
- User must be employee
- If department is IT: needs password
- If department is Finance: needs manager approval

```javascript


```

---

## Unit 2C: Switch Statements

### What are Switch Statements?
A cleaner way to check one value against many options.

**Syntax:**
```javascript
switch (expression) {
  case value1:
    // runs if expression === value1
    break;
  case value2:
    // runs if expression === value2
    break;
  default:
    // runs if no case matches
}
```

**Important:** Don't forget `break;` statements!

### Practice Problems

**Problem 1:** Convert numbers to month names
- 1 = January, 2 = February, etc.

```javascript
let monthNumber = 5;


```

**Problem 2:** Direction converter
- 'N' = North, 'S' = South, 'E' = East, 'W' = West

```javascript


```

---

## Unit 3: Loops

### What are Loops?
Loops let you repeat code multiple times without writing it over and over.

### FOR LOOPS (When you know how many iterations)

**Syntax:**
```javascript
for (let i = 0; i < 5; i++) {
  // code runs 5 times
  // i starts at 0 and increases by 1 each time
}
```

**Breaking it down:**
- `let i = 0` - Initialize: start at 0
- `i < 5` - Condition: continue while i is less than 5
- `i++` - Increment: add 1 to i each time

### FOR Loop Examples

**Example 1: Count 1 to 5**
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

**Example 2: Count backwards**
```javascript
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// Output: 5, 4, 3, 2, 1
```

**Example 3: Skip numbers (count by 2s)**
```javascript
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
```

### FOR Loop Practice

**Problem 1:** Print the numbers 1 through 10
```javascript


```

**Problem 2:** Print only even numbers from 1 to 20
```javascript


```

**Problem 3:** Print the 5 times table (5×1, 5×2, ..., 5×10)
```javascript


```

**Problem 4:** Sum the numbers 1 to 10 (hint: use a variable to keep a running total)
```javascript


```

---

## Unit 3B: WHILE Loops

### What are While Loops?
Use while loops when you don't know how many times to repeat - you repeat WHILE a condition is true.

**Syntax:**
```javascript
while (condition) {
  // code runs as long as condition is true
  // MUST change something to eventually make condition false!
}
```

### WHILE Loop Examples

**Example 1: Simple counter**
```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

**Example 2: Until a value is reached**
```javascript
let sum = 0;
let i = 1;
while (sum < 50) {
  sum += i;
  i++;
}
console.log(`Sum exceeded 50 at number ${i-1}`);
```

### WHILE Loop Practice

**Problem 1:** Print numbers 10 down to 1
```javascript


```

**Problem 2:** Keep doubling a number until it exceeds 1000
Starting number: 2
```javascript


```

**Problem 3:** Count up by 5s from 0 to 50
```javascript


```

---

## Unit 3C: Loop Control

### BREAK - Exit loop immediately
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Stop the loop
  }
  console.log(i);
}
// Output: 1, 2, 3, 4
```

### CONTINUE - Skip to next iteration
```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

### Practice

**Problem 1:** Find the first number greater than 20 in a list
```javascript
let numbers = [5, 10, 15, 20, 25, 30];

// Use break to stop when found

```

**Problem 2:** Print only numbers divisible by 3 (from 1-20)
```javascript

// Use continue to skip others

```

---

## Unit 3D: Nested Loops

### What are Nested Loops?
A loop inside a loop - useful for patterns and tables.

**Example: Create a table**
```javascript
for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(`Row ${row}, Col ${col}`);
  }
}
```

### Practice Problems

**Problem 1:** Multiplication table (3×3)
```javascript


```

**Problem 2:** Create a square pattern
```javascript
// Print a 4×4 square of *
// Expected output:
// ****
// ****
// ****
// ****


```

**Problem 3:** Create a triangle pattern
```javascript
// Print a triangle:
// *
// **
// ***
// ****
// *****


```

---

## Unit 4: Combining Conditionals and Loops

### Real-World Examples

#### Example 1: Grade Analysis
```javascript
let grades = [85, 92, 78, 95, 88];
let passCount = 0;
let failCount = 0;

for (let i = 0; i < grades.length; i++) {
  if (grades[i] >= 80) {
    passCount++;
  } else {
    failCount++;
  }
}

console.log(`Passed: ${passCount}, Failed: ${failCount}`);
```

#### Example 2: Data Validation
```javascript
let scores = [85, 102, 92, -5, 78]; // Some invalid

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 0 && scores[i] <= 100) {
    console.log(`Score ${scores[i]}: VALID`);
  } else {
    console.log(`Score ${scores[i]}: INVALID`);
  }
}
```

### Challenge Problems

**Challenge 1:** ATM Simulation
Starting balance: $500
Transactions:
- Withdraw $50
- Deposit $100
- Withdraw $200
- Withdraw $600 (check if sufficient funds)

```javascript
let balance = 500;
let transactions = [50, 100, -200, -600]; // negative = withdraw


```

**Challenge 2:** Student Grade Report
Students with scores: [85, 92, 78, 95, 88]
Calculate:
- How many passed (≥80)
- How many failed (<80)
- Average score
- Highest score
- Lowest score

```javascript


```

**Challenge 3:** Ticket Sales
Total tickets: 100
Customers want: [2, 3, 5, 4, 3] tickets
Process each customer in order:
- If tickets available, complete sale
- If not enough, reject

```javascript


```

---

## Self-Check: Can You...?

### Conditionals
- [ ] Write an if statement
- [ ] Write an if-else statement
- [ ] Write an if-else if-else chain
- [ ] Nest conditionals inside each other
- [ ] Use switch statements
- [ ] Write complex conditions with AND/OR

### For Loops
- [ ] Create a simple for loop (counting)
- [ ] Count down
- [ ] Count by different increments (2s, 5s, etc.)
- [ ] Use loop variable in calculations
- [ ] Create nested loops
- [ ] Build patterns with loops

### While Loops
- [ ] Create a while loop
- [ ] Know when to use while vs. for
- [ ] Avoid infinite loops
- [ ] Use break to exit early
- [ ] Use continue to skip iterations

### Combined
- [ ] Use conditionals inside loops
- [ ] Accumulate values based on conditions
- [ ] Filter/validate data
- [ ] Create real-world simulations
- [ ] Explain my logic in pseudocode

---

## Common Mistakes

### Mistake 1: Forgetting the loop increment
```javascript
// WRONG - Infinite loop!
for (let i = 1; i < 10; ) {
  console.log(i);
  // i never changes!
}

// CORRECT
for (let i = 1; i < 10; i++) {
  console.log(i);
}
```

### Mistake 2: Wrong comparison operator
```javascript
// Counts 1-9
for (let i = 1; i < 10; i++) { }

// Counts 1-10
for (let i = 1; i <= 10; i++) { }
```

### Mistake 3: Using = instead of ==
```javascript
// WRONG - This assigns, not compares!
if (age = 18) { }

// CORRECT - Use == or ===
if (age === 18) { }
```

### Mistake 4: Missing break in switch
```javascript
// WRONG - Falls through
switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");  // Runs even if day=1!
}

// CORRECT
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
}
```

---

## Quick Reference

### If Statement Structure
```
if (condition)
  ↓ YES (true)
  [run code]
  ↓ (continue)
else
  ↓ NO (false)
  [run different code]
  ↓ (continue)
```

### For Loop Structure
```
START: i = 0
  ↓
CHECK: i < 10?
  YES → RUN CODE → i++ → CHECK again
  NO → EXIT loop
```

### While Loop Structure
```
CHECK: condition true?
  YES → RUN CODE → CHECK again
  NO → EXIT loop
```

---

## Glossary

| Term | Definition |
|------|-----------|
| **Conditional** | Statement that runs code only if a condition is true |
| **Boolean** | A value that is either true or false |
| **Condition** | An expression that evaluates to true or false |
| **Loop** | A block of code that repeats |
| **Iteration** | One time through a loop |
| **Counter** | Variable that tracks loop iterations |
| **Increment** | Increase by 1 (i++) |
| **Decrement** | Decrease by 1 (i--) |
| **Break** | Exit a loop immediately |
| **Continue** | Skip to next iteration |
| **Nested** | Something inside something else |

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

**What was the most challenging concept?**

__________________________________________________________________________

**What real-world problem could you solve with conditionals and loops?**

__________________________________________________________________________

**How are conditionals and loops similar? How are they different?**

__________________________________________________________________________

**What do you want to learn next?**

__________________________________________________________________________

---

**Remember:** Practice is key! Write lots of loops and conditionals. Test your code and debug errors. The more you practice, the better you'll get! 💻

You've mastered operators and now you're learning control flow. These are fundamental programming skills! Keep going! 🚀
