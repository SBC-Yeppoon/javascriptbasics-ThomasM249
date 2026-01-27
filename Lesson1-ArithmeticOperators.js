/**
 * LESSON 1: ARITHMETIC OPERATORS
 * Grade 11 Digital Solutions - JavaScript Fundamentals
 * 
 * Learning Objectives:
 * - Understand and use basic arithmetic operators
 * - Apply operators to perform calculations
 * - Output results to the screen
 */

// ============================================
// ARITHMETIC OPERATORS
// ============================================

console.log("=== ARITHMETIC OPERATORS ===\n");

// 1. ADDITION (+)
console.log("1. ADDITION (+)");
let a = 10;
let b = 5;
let sum = a + b;
console.log(`${a} + ${b} = ${sum}`);
console.log("");

// 2. SUBTRACTION (-)
console.log("2. SUBTRACTION (-)");
let difference = a - b;
console.log(`${a} - ${b} = ${difference}`);
console.log("");

// 3. MULTIPLICATION (*)
console.log("3. MULTIPLICATION (*)");
let product = a * b;
console.log(`${a} * ${b} = ${product}`);
console.log("");

// 4. DIVISION (/)
console.log("4. DIVISION (/)");
let quotient = a / b;
console.log(`${a} / ${b} = ${quotient}`);
console.log("");

// 5. MODULUS (%) - Returns the remainder after division
console.log("5. MODULUS (%) - Remainder");
let num1 = 17;
let num2 = 5;
let remainder = num1 % num2;
console.log(`${num1} % ${num2} = ${remainder}`);
console.log(`(17 divided by 5 is 3 with remainder ${remainder})`);
console.log("");

// REAL-WORLD EXAMPLE: Check if a number is even or odd
let testNumber = 8;
let isEven = testNumber % 2 === 0;
console.log(`Is ${testNumber} even? ${isEven}`);
console.log("");

// 6. EXPONENT (**)
console.log("6. EXPONENT (**)");
let base = 2;
let exponent = 3;
let power = base ** exponent;
console.log(`${base} ** ${exponent} = ${power}`);
console.log("(2 to the power of 3 = 8)");
console.log("");

// 7. INTEGER DIVISION (using Math.floor with division)
console.log("7. INTEGER DIVISION");
let fullDivision = 17 / 5;
let integerDivision = Math.floor(17 / 5);
console.log(`17 / 5 = ${fullDivision} (decimal)`);
console.log(`Math.floor(17 / 5) = ${integerDivision} (integer only)`);
console.log("");

// ============================================
// ORDER OF OPERATIONS (PEMDAS/BODMAS)
// ============================================

console.log("=== ORDER OF OPERATIONS ===\n");

// Parentheses/Brackets first
let result1 = (10 + 5) * 2;
console.log(`(10 + 5) * 2 = ${result1}`);

// Exponents next
let result2 = 2 + 3 ** 2;
console.log(`2 + 3 ** 2 = ${result2} (exponent before addition)`);

// Multiplication and Division (left to right)
let result3 = 20 / 4 * 2;
console.log(`20 / 4 * 2 = ${result3} (left to right)`);

// Addition and Subtraction last (left to right)
let result4 = 10 - 3 + 2;
console.log(`10 - 3 + 2 = ${result4} (left to right)`);
console.log("");

// ============================================
// EXAMPLE PROBLEMS
// ============================================

console.log("=== EXAMPLE PROBLEMS ===\n");

// Problem 1: Calculate the area of a rectangle
let width = 8;
let height = 6;
let area = width * height;
console.log(`Rectangle: width=${width}, height=${height}`);
console.log(`Area = ${area} square units\n`);

// Problem 2: Calculate the volume of a cube
let sideLength = 4;
let volume = sideLength ** 3;
console.log(`Cube: side length=${sideLength}`);
console.log(`Volume = ${volume} cubic units\n`);

// Problem 3: Calculate total cost with tax
let itemPrice = 99.99;
let taxRate = 0.10; // 10% tax
let totalCost = itemPrice + (itemPrice * taxRate);
console.log(`Item price: $${itemPrice}`);
console.log(`Tax (10%): $${(itemPrice * taxRate).toFixed(2)}`);
console.log(`Total: $${totalCost.toFixed(2)}\n`);

// ============================================
// COMMON MISTAKES & TIPS
// ============================================

console.log("=== TIPS & TRICKS ===\n");

// String concatenation vs addition
console.log("String Concatenation:");
console.log(`"5" + "3" = "${"5" + "3"}"  (concatenation, not addition)`);
console.log(`5 + 3 = ${5 + 3}  (numeric addition)`);
console.log("");

// Floating point precision
console.log("Floating Point Numbers:");
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`);
console.log(`(Note: may show rounding due to computer precision)`);
