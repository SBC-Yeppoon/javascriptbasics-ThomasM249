/**
 * LESSON 5: LOOPS - FOR AND WHILE
 * Grade 11 Digital Solutions - JavaScript Fundamentals
 * 
 * Learning Objectives:
 * - Understand the purpose of loops
 * - Use for loops for counted iteration
 * - Use while loops for conditional iteration
 * - Understand loop control (break, continue)
 * - Nest loops for complex iteration patterns
 * - Output information from loops
 */

console.log("=== LOOPS ===\n");

// ============================================
// WHY USE LOOPS?
// ============================================

console.log("WHY LOOPS?\n");

// Without loop: repetitive code
console.log("Without a loop (repetitive):");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("");

// With loop: clean and efficient
console.log("With a for loop (efficient):");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("");

// ============================================
// FOR LOOPS (COUNTED LOOPS)
// ============================================

console.log("=== FOR LOOPS (COUNTED LOOPS) ===\n");

// Syntax: for (initialization; condition; increment/decrement) { code }

// Example 1: Simple counting loop
console.log("Example 1: Count from 1 to 5");
for (let count = 1; count <= 5; count++) {
  console.log(`Count: ${count}`);
}
console.log("");

// Example 2: Counting down
console.log("Example 2: Count down from 5 to 1");
for (let count = 5; count >= 1; count--) {
  console.log(`Count: ${count}`);
}
console.log("");

// Example 3: Skip numbers (increment by 2)
console.log("Example 3: Count by 2s");
for (let num = 0; num <= 10; num += 2) {
  console.log(num);
}
console.log("");

// Example 4: Nested loops (loops within loops)
console.log("Example 4: Multiplication table (2×2)");
for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 2; col++) {
    console.log(`Row ${row}, Col ${col}`);
  }
}
console.log("");

// ============================================
// FOR LOOPS - REAL EXAMPLES
// ============================================

console.log("=== FOR LOOP EXAMPLES ===\n");

// Example 1: Print numbers and their squares
console.log("Example 1: Numbers and their squares");
console.log("Number | Square");
console.log("-------|-------");
for (let n = 1; n <= 5; n++) {
  console.log(`${n.toString().padEnd(6)}| ${(n * n).toString().padStart(5)}`);
}
console.log("");

// Example 2: Sum numbers
console.log("Example 2: Sum numbers 1 to 10");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i; // or sum += i;
}
console.log(`Sum of 1 to 10 = ${sum}`);
console.log("");

// Example 3: Count character occurrences
console.log("Example 3: Count vowels in a word");
let word = "javascript";
let vowelCount = 0;
let vowels = "aeiou";

for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    vowelCount++;
  }
}
console.log(`Word: "${word}"`);
console.log(`Vowels: ${vowelCount}`);
console.log("");

// Example 4: Multiplication table
console.log("Example 4: Multiplication table (7)");
console.log("7 times table:");
for (let i = 1; i <= 10; i++) {
  console.log(`7 × ${i} = ${7 * i}`);
}
console.log("");

// Example 5: Build a pattern
console.log("Example 5: Build a pattern");
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
console.log("");

// Example 6: Calculate compound interest over years
console.log("Example 6: Compound interest over 5 years");
let principal = 1000;
let rate = 0.05; // 5% per year
console.log("Year | Amount");
console.log("-----|----------");
for (let year = 0; year <= 5; year++) {
  let amount = principal * (1 + rate) ** year;
  console.log(`${year.toString().padEnd(4)}| $${amount.toFixed(2)}`);
}
console.log("");

// ============================================
// WHILE LOOPS (CONDITIONAL LOOPS)
// ============================================

console.log("=== WHILE LOOPS (CONDITIONAL LOOPS) ===\n");

// Syntax: while (condition) { code }
// Repeats as long as condition is true

// Example 1: Simple while loop
console.log("Example 1: While loop counting");
let i = 1;
while (i <= 5) {
  console.log(`i = ${i}`);
  i++; // Don't forget to increment!
}
console.log("");

// Example 2: While loop with user input simulation
console.log("Example 2: Password guess simulation");
let guess = "wrong";
let attempts = 0;
let maxAttempts = 3;

while (guess !== "password" && attempts < maxAttempts) {
  attempts++;
  console.log(`Attempt ${attempts}: Guess is incorrect`);
  guess = attempts === 1 ? "wrong" : attempts === 2 ? "wrong" : "password";
}

if (guess === "password") {
  console.log(`✓ Correct! Success after ${attempts} attempts`);
} else {
  console.log(`✗ Failed - no more attempts`);
}
console.log("");

// Example 3: Find a number
console.log("Example 3: Find when sum exceeds threshold");
let sum2 = 0;
let number2 = 1;
while (sum2 < 50) {
  sum2 += number2;
  console.log(`Adding ${number2}: sum = ${sum2}`);
  number2++;
}
console.log(`Sum exceeded 50 after adding numbers up to ${number2 - 1}`);
console.log("");

// ============================================
// LOOP CONTROL: BREAK AND CONTINUE
// ============================================

console.log("=== LOOP CONTROL ===\n");

// BREAK: Exit the loop immediately
console.log("Example 1: Break (exit loop early)");
console.log("Find first number > 15:");
for (let n = 1; n <= 20; n++) {
  if (n > 15) {
    console.log(`Found: ${n}`);
    break; // Exit the loop
  }
}
console.log("");

// CONTINUE: Skip to the next iteration
console.log("Example 2: Continue (skip even numbers)");
console.log("Odd numbers from 1 to 10:");
for (let n = 1; n <= 10; n++) {
  if (n % 2 === 0) {
    continue; // Skip this iteration
  }
  console.log(n);
}
console.log("");

// Real example: Find password
console.log("Example 3: Break - search for specific value");
let found = false;
let arr = [10, 20, 30, 40, 50];
let searchValue = 30;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === searchValue) {
    console.log(`Found ${searchValue} at position ${i}`);
    found = true;
    break;
  }
}

if (!found) {
  console.log(`${searchValue} not found in array`);
}
console.log("");

// ============================================
// COMPARING FOR AND WHILE
// ============================================

console.log("=== FOR LOOP VS WHILE LOOP ===\n");

// Use FOR loop when you know how many iterations
console.log("FOR loop: Known iterations (1 to 5)");
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}
console.log("");

// Use WHILE loop when you don't know when to stop
console.log("WHILE loop: Unknown iterations (until condition met)");
let value = 1;
let iterations = 0;
while (value < 100) {
  value = value * 2;
  iterations++;
  console.log(`Iteration ${iterations}: value = ${value}`);
}
console.log("");

// ============================================
// NESTED LOOPS
// ============================================

console.log("=== NESTED LOOPS ===\n");

// Example 1: Simple nested loop
console.log("Example 1: Nested loops - Multiplication table");
console.log("Multiplication table (1-3):");
console.log("");
console.log("   | 1  2  3");
console.log("---|--------");
for (let row = 1; row <= 3; row++) {
  let line = `${row}  |`;
  for (let col = 1; col <= 3; col++) {
    line += ` ${(row * col).toString().padStart(2)}`;
  }
  console.log(line);
}
console.log("");

// Example 2: Create a grid pattern
console.log("Example 2: Create a grid pattern");
console.log("3×3 grid:");
for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= 3; col++) {
    line += "□ ";
  }
  console.log(line);
}
console.log("");

// Example 3: Diamond pattern
console.log("Example 3: Diamond pattern");
let size = 5;
for (let i = 1; i <= size; i++) {
  let spaces = " ".repeat(size - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}
console.log("");

// ============================================
// EXAMPLE PROBLEMS
// ============================================

console.log("=== EXAMPLE PROBLEMS ===\n");

// Problem 1: Display numbers with conditions
console.log("Problem 1: Numbers 1-10 with odd/even label");
for (let num = 1; num <= 10; num++) {
  let type = num % 2 === 0 ? "EVEN" : "ODD";
  console.log(`${num}: ${type}`);
}
console.log("");

// Problem 2: Calculate factorial
console.log("Problem 2: Calculate 5! (factorial)");
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial = factorial * i;
}
console.log(`5! = ${factorial}`);
console.log("(5! = 5 × 4 × 3 × 2 × 1 = 120)");
console.log("");

// Problem 3: Count down with conditions
console.log("Problem 3: Countdown from 10");
for (let i = 10; i >= 1; i--) {
  if (i === 1) {
    console.log(`${i}: Blastoff! 🚀`);
  } else {
    console.log(i);
  }
}
console.log("");

// Problem 4: Times tables practice
console.log("Problem 4: Display 7 times table");
console.log("7 times table:");
for (let i = 1; i <= 12; i++) {
  console.log(`7 × ${i.toString().padStart(2)} = ${(7 * i).toString().padStart(2)}`);
}
console.log("");

// Problem 5: Password guess with loop
console.log("Problem 5: Login attempts");
let correctPassword = "secret123";
let password = "wrong";
let loginAttempts = 0;
let maxLoginAttempts = 3;

while (password !== correctPassword && loginAttempts < maxLoginAttempts) {
  loginAttempts++;
  console.log(`Attempt ${loginAttempts}: Password incorrect`);
  
  // Simulate user trying different passwords
  if (loginAttempts === 1) password = "guess1";
  else if (loginAttempts === 2) password = "secret123";
}

if (password === correctPassword) {
  console.log(`✓ Login successful after ${loginAttempts} attempt(s)`);
} else {
  console.log(`✗ Account locked after ${maxLoginAttempts} failed attempts`);
}
console.log("");

// Problem 6: Find average and count
console.log("Problem 6: Average of numbers 1-100");
let total = 0;
let count = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
  count++;
}
let average = total / count;
console.log(`Sum: ${total}`);
console.log(`Count: ${count}`);
console.log(`Average: ${average}`);
console.log("");
